import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.json({ message: "Maintenance request received" });
}

export const config = {
  runtime: 'edge', 
};