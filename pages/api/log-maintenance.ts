export default function handler(req, res) {
  if (req.method === "POST") {
    const { apartment, issue } = req.body;


    res.status(200).json({
      message: `Maintenance request for apartment ${apartment} regarding: ${issue} has been logged.`,
    });
  } else {

    res.status(405).json({ message: "Method Not Allowed" });
  }
}


import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { apartment, issue } = await req.json();
  return NextResponse.json({ message: `Logged maintenance issue for ${apartment}: ${issue}` });
}

export const config = { runtime: 'edge' };