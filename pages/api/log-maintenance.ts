import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { apartment, issue } = await req.json();
  return NextResponse.json({ message: `Logged maintenance issue for ${apartment}: ${issue}` });
}

export const config = { runtime: 'edge' };