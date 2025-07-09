import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireAuth, getAuthError } from '@/lib/middleware';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate';

export async function GET() {
  try {
    const profile = await prisma.myDetails.findFirst();
    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
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
    const {
      name,
      title,
      subtitle,
      about,
      email,
      address,
      imageUrl,
      githubUrl,
      linkedinUrl,
      twitterUrl
    } = body;

    // Check if profile exists
    const existingProfile = await prisma.myDetails.findFirst();

    let profile;
    if (existingProfile) {
      // Update existing profile
      profile = await prisma.myDetails.update({
        where: { id: existingProfile.id },
        data: {
          name,
          title,
          subtitle,
          about,
          email,
          address,
          imageUrl,
          githubUrl,
          linkedinUrl,
          twitterUrl,
        },
      });
      revalidatePath('/');
    } else {
      // Create new profile
      profile = await prisma.myDetails.create({
        data: {
          name,
          title,
          subtitle,
          about,
          email,
          address,
          imageUrl,
          githubUrl,
          linkedinUrl,
          twitterUrl,
        },
      });
      revalidatePath('/');
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
