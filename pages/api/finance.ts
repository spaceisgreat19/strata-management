import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.json({ report: "Financial report for this quarter" });
}

export const config = { runtime: 'edge' };