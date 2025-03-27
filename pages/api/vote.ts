import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    const { apartment, issue } = await req.json();

    return NextResponse.json({
      message: `Vote request for apartment ${apartment} regarding: ${issue} has been logged.`,
    });
  } else {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }
}