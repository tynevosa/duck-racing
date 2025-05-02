import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const wallet = req.cookies.get('wallet')?.value;

  if (!wallet) return NextResponse.json({ success: false }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { wallet: wallet },
  });

  return NextResponse.json({ success: true, user });
}
