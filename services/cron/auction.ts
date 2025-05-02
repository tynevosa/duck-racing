import cron from 'node-cron';
import { prisma } from '@/lib/prisma';

// Function to create a new auction
async function createNewAuction() {
  const expirationDate = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

  const ducks = await prisma.duck.findMany({
    orderBy: {
      createdAt: 'asc', // Order by creation date
    },
  });

  if (!ducks.length) {
    console.log('No available ducks found for auction');
    return;
  }

  await prisma.auction.create({
    data: {
      amount: 0,
      expiredAt: expirationDate,
      newName: ducks[0].name,
      duckId: ducks[0].id,
    },
    include: {
      duck: true,
    },
  });

  console.log('New auction created, expires at:', expirationDate);
}

// Function to check and handle expired auctions
async function handleExpiredAuctions() {
  const expiredAuctions = await prisma.auction.findMany({
    where: {
      expiredAt: {
        lte: new Date(),
      },
    },
    include: {
      duck: true,
    },
  });

  for (const auction of expiredAuctions) {
    // Update duck name if there was a winning bid
    if (auction.userId) {
      await prisma.duck.update({
        where: { id: auction.duckId },
        data: { name: auction.newName },
      });
    }

    // Create a new auction immediately
    await createNewAuction();
  }
}

// Create initial auction if needed
async function createInitialAuction() {
  const existingAuction = await prisma.auction.findFirst({
    where: {
      expiredAt: {
        gt: new Date(),
      },
    },
  });

  if (!existingAuction) {
    console.log('No active auctions found, creating initial auction...');
    await createNewAuction();
    console.log('Initial auction created successfully');
  } else {
    console.log('Active auction found, skipping initial creation');
    console.log('Current auction expires at:', existingAuction.expiredAt);
  }
}

// Create initial auction if none exists
createInitialAuction();

// Check for expired auctions every minute
cron.schedule('*/10 * * * *', handleExpiredAuctions);

if (require.main === module) {
  console.log('[Cron] Race betting job started');
}
