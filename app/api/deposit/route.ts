import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const wallet = req.cookies.get('wallet')?.value;
  const { amount } = await req.json();

  if (!wallet) return NextResponse.json({ success: false }, { status: 401 });

  const user = await prisma.user.update({
    where: { wallet: wallet },
    data: { balance: { increment: amount } },
  });

  if (user.referredBy) {
    await prisma.user.update({
      where: { wallet: user.referredBy },
      data: { balance: { increment: amount * 0.05 } },
    });
  }

  return NextResponse.json({ success: true, user });
}
