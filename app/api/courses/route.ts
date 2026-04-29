import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getCourses, saveCourses, getCourseCategories, saveCourseCategories } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    courses: getCourses(),
    categories: getCourseCategories(),
  });
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  if (body.courses) saveCourses(body.courses);
  if (body.categories) saveCourseCategories(body.categories);
  return NextResponse.json({ success: true });
}
