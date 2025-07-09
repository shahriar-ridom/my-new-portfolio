import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireAuth, getAuthError } from '@/lib/middleware';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check authentication
  if (!requireAuth(request)) {
    return getAuthError();
  }

  try {
    const { id } = params;

    await prisma.project.delete({
      where: { id },
    });
    revalidatePath('/');
    revalidatePath('/projects');

    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check authentication
  if (!requireAuth(request)) {
    return getAuthError();
  }

  try {
    const { id } = params;
    const body = await request.json();
    const { title, description, imageUrl, liveUrl, githubUrl, tags } = body;

    const project = await prisma.project.update({
      where: { id },
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

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}
