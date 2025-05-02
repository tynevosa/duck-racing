import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  const auctions = await prisma.auction.findMany({
    where: id
      ? { id: id }
      : {
          expiredAt: {
            gt: new Date(), // Greater than current date/time
          },
        },
    include: {
      duck: true, // Include related duck data
      user: true, // Include related user data
    },
    orderBy: {
      expiredAt: 'asc', // Show soonest expiring auctions first
    },
  });

  return NextResponse.json({ success: true, auctions }); // Removed status 400 as it's for errors
}
