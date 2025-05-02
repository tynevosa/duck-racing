import { prisma } from '@/lib/prisma';

async function main() {
  // Clean the database first
  await prisma.duck.deleteMany();
  await prisma.race.deleteMany();
  await prisma.bet.deleteMany();

  // // Create initial race
  // await prisma.race.create({
  //   data: {
  //     status: 'ONGOING',
  //     liveStream:
  //       'https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID',
  //     result: [],
  //     totalWin: 0,
  //     totalPlace: 0,
  //     totalShow: 0,
  //     expiredAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes from now
  //   },
  // });

  // Create some ducks
  await Promise.all([
    prisma.duck.create({
      data: {
        name: 'Speedy',
        color: 'Red',
      },
    }),
    prisma.duck.create({
      data: {
        name: 'Lightning',
        color: 'Yellow',
      },
    }),
    prisma.duck.create({
      data: {
        name: 'Thunder',
        color: 'Blue',
      },
    }),
  ]);

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
