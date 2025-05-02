import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  const { wallet, referralCode } = await req.json();

  if (!wallet)
    return NextResponse.json(
      { error: 'Missing wallet address' },
      { status: 400 }
    );

  const user = await prisma.user.findUnique({ where: { wallet } });

  if (!user) {
    const newReferralCode = uuidv4().slice(0, 8);

    let referrer;
    if (referralCode) {
      referrer = await prisma.user.findUnique({
        where: { referralCode },
      });
    }

    await prisma.user.create({
      data: {
        wallet,
        referralCode: newReferralCode,
        referredBy: referrer?.wallet,
      },
    });
  }

  (await cookies()).set('wallet', wallet, {
    path: '/',
    httpOnly: false,
  });

  return NextResponse.json({ success: true });
}
