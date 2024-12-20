import { NextResponse } from 'next/server';

export async function GET() {
  // This is a simple check. In a real application, you would verify the session/token
  return NextResponse.json({ authenticated: true });
}
