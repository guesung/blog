import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const theme = request.cookies.get('theme')?.value;

  const response = NextResponse.next();
  if (!theme) response.cookies.set('theme', 'dark');

  return response;
}
