import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  const lastRace = await prisma.race.findFirst({
    where: id
      ? { id }
      : {
          status: 'ONGOING', // Filter
        },
    orderBy: {
      createdAt: 'desc', // Order by the `createdAt` field in descending order
    },
  });

  return NextResponse.json({
    success: true,
    race: lastRace,
    remainingTime: lastRace ? lastRace?.expiredAt.getTime() - Date.now() : 0,
  });
}
