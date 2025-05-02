import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const ducks = await prisma.duck.findMany();

  return NextResponse.json({ success: true, ducks });
}
