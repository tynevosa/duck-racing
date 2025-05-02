import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  { params }: { params: { race: string } }
) {
  const { race: raceId } = await params;
  const wallet = req.cookies.get('wallet')?.value;
  const { duckId, amount, betType } = await req.json();

  if (!wallet) return NextResponse.json({ success: false }, { status: 401 });

  // First check the user's current balance
  const currentUser = await prisma.user.findUnique({
    where: { wallet: wallet },
    select: { balance: true },
  });

  if (!currentUser || currentUser.balance < amount) {
    return NextResponse.json(
      {
        success: false,
        message: 'Insufficient balance',
      },
      { status: 400 }
    );
  }

  // If balance is sufficient, proceed with the bet
  const user = await prisma.user.update({
    where: { wallet: wallet },
    data: { balance: { decrement: amount } },
  });

  const duck = await prisma.duck.findUnique({
    where: { id: duckId },
  });

  const race = await prisma.race.update({
    where: { id: raceId },
    data:
      betType === 'Win'
        ? { totalWin: { increment: amount } }
        : betType === 'Place'
        ? { totalPlace: { increment: amount } }
        : betType === 'Show'
        ? { totalShow: { increment: amount } }
        : {},
  });

  if (user && duck && race) {
    await prisma.bet.create({
      data: {
        raceId: race.id,
        userId: user.id,
        duckId: duck.id,
        amount,
        betType,
      },
    });

    return NextResponse.json({ success: true, race });
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { race: string } }
) {
  const { race: raceId } = await params;
  const wallet = req.cookies.get('wallet')?.value;

  if (!wallet) return NextResponse.json({ success: false }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { wallet: wallet },
  });

  const race = await prisma.race.findUnique({
    where: { id: raceId },
  });

  if (user && race) {
    const bets = await prisma.bet.findMany({
      where: {
        raceId: race.id, // Filter by the race ID
        userId: user.id, // Filter by the user's ID
      },
      include: {
        duck: true, // Optionally include related duck details
      },
    });

    return NextResponse.json({ success: true, bets });
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
