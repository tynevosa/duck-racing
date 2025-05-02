import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { amount, suggestedName } = await req.json();
  const wallet = req.cookies.get('wallet')?.value;

  if (!wallet) {
    return NextResponse.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }

  // Start a transaction to ensure data consistency
  try {
    return await prisma.$transaction(async (tx) => {
      // Get current auction
      const auction = await tx.auction.findUnique({
        where: { id: params.id },
        include: { user: true },
      });

      if (!auction) {
        return NextResponse.json(
          { success: false, message: 'Auction not found' },
          { status: 404 }
        );
      }

      // Get bidder
      const bidder = await tx.user.findUnique({
        where: { wallet },
      });

      if (!bidder) {
        return NextResponse.json(
          { success: false, message: 'Bidder not found' },
          { status: 404 }
        );
      }

      // Check if bid amount is greater than current
      if (amount <= auction.amount) {
        return NextResponse.json(
          { success: false, message: 'Bid must be higher than current amount' },
          { status: 400 }
        );
      }

      // Check if bidder has enough balance
      if (bidder.balance < amount) {
        return NextResponse.json(
          { success: false, message: 'Insufficient balance' },
          { status: 400 }
        );
      }

      // If there was a previous bidder, refund their bid
      if (auction.userId) {
        await tx.user.update({
          where: { id: auction.userId },
          data: {
            balance: { increment: auction.amount },
          },
        });
      }

      // Update auction with new bid
      await tx.auction.update({
        where: { id: params.id },
        data: {
          amount,
          newName: suggestedName,
          userId: bidder.id,
        },
      });

      // Deduct balance from new bidder
      await tx.user.update({
        where: { id: bidder.id },
        data: {
          balance: { decrement: amount },
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Bid placed successfully',
      });
    });
  } catch (error) {
    console.error('Bid error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to place bid' },
      { status: 500 }
    );
  }
}
