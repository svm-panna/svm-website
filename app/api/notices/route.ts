import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getNotices, saveNotices } from '@/lib/data';

export async function GET() {
  const notices = getNotices();
  return NextResponse.json(notices);
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await req.json();
  saveNotices(data);
  return NextResponse.json({ success: true });
}
