// File: scripts/raceCron.ts
import cron from 'node-cron';
import { prisma } from '@/lib/prisma';

// Function to shuffle and simulate race result
async function getRaceResult() {
  const ducks = await prisma.duck.findMany({
    orderBy: {
      createdAt: 'asc', // Order by creation date
    },
  });

  const shuffled = ducks.sort(() => 0.5 - Math.random()); // Get top 3 ducks
  return shuffled.slice(0, 3);
}

// Function to calculate payout (tote logic simplified)
function calculatePayout(totalPool: number, winningBets: number) {
  if (winningBets === 0) return 0;
  const taxedPool = totalPool * 0.975; // 2.5% tax
  return taxedPool / winningBets;
}

// Function to create new race
async function createRace() {
  await prisma.race.create({
    data: {
      status: 'ONGOING',
      createdAt: new Date(),
      expiredAt: new Date(Date.now() + 1 * 60 * 1000), // 10 minutes from now
      liveStream:
        'https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID', // Assuming liveStream can be null initially
      totalWin: 0,
      totalPlace: 0,
      totalShow: 0,
    },
  });
  console.log('[Race] New race created');
}

// Function to process active race and distribute rewards
async function settleRace() {
  const race = await prisma.race.findFirst({
    where: { status: 'ONGOING' },
    orderBy: { createdAt: 'asc' },
  });
  if (!race) return;

  const result = await getRaceResult();
  const allBets = await prisma.bet.findMany({
    where: {
      raceId: race.id,
    },
  });

  const betGroups = {
    Win: allBets.filter(
      (b) => b.betType === 'Win' && b.duckId === result[0].id
    ),
    Place: allBets.filter(
      (b) =>
        b.betType === 'Place' && [result[0].id, result[1].id].includes(b.duckId)
    ),
    Show: allBets.filter(
      (b) =>
        b.betType === 'Show' &&
        [result[0].id, result[1].id, result[2].id].includes(b.duckId)
    ),
  };

  const payoutGroups = ['Win', 'Place', 'Show'] as const;

  for (const type of payoutGroups) {
    const pool = allBets
      .filter((b) => b.betType === type)
      .reduce((sum, b) => sum + b.amount, 0);
    const winners = betGroups[type];
    const payoutPerUser = calculatePayout(pool, winners.length);

    for (const bet of winners) {
      await prisma.user.update({
        where: { id: bet.userId },
        data: { balance: { increment: Math.floor(payoutPerUser) } },
      });
    }
  }

  await prisma.race.update({
    where: { id: race.id },
    data: { status: 'COMPLETED', result: result.map((re) => re.id) },
  });
  console.log('[Race] Race settled. Winners paid.');
}

// Initialize cron job to run every 10 minutes
cron.schedule('*/1 * * * *', async () => {
  console.log('[Cron] Settling current race and creating new one');
  await settleRace();
  await createRace();
});

if (require.main === module) {
  console.log('[Cron] Race betting job started');
}
