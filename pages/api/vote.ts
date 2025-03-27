import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { candidate } = await req.json();
  return NextResponse.json({ message: `Vote received for ${candidate}` });
}

export const config = { runtime: 'edge' };