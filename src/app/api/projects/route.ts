import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireAuth, getAuthError } from '@/lib/middleware';
import { revalidatePath } from 'next/cache';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Check authentication for POST requests
  if (!requireAuth(request)) {
    return getAuthError();
  }

  try {
    const body = await request.json();
    const { title, description, imageUrl, liveUrl, githubUrl, tags } = body;

    // Validate required fields
    if (!title || !description || !imageUrl || !liveUrl || !githubUrl || !tags) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        liveUrl,
        githubUrl,
        tags,
      },
    });
    revalidatePath('/');
    revalidatePath('/projects');

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
