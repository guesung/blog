import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  return response;
}
