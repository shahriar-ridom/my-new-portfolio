import { NextRequest } from 'next/server';
import { verifyToken } from './auth';

export function requireAuth(request: NextRequest): boolean {
  const token = request.cookies.get('admin-token')?.value;
  return token ? verifyToken(token) : false;
}

export function getAuthError() {
  return new Response(
    JSON.stringify({ error: 'Unauthorized' }),
    {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
