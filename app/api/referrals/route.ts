import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const wallet = req.cookies.get('wallet')?.value;

  if (!wallet) return NextResponse.json({ success: false }, { status: 401 });

  const referrals = await prisma.user.findMany({
    where: { referredBy: wallet },
  });

  return NextResponse.json({ success: true, referrals });
}
