import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin-token')?.value;

    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redirect authenticated users away from login page
  if (request.nextUrl.pathname === '/login') {
    const token = request.cookies.get('admin-token')?.value;

    if (token && verifyToken(token)) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
