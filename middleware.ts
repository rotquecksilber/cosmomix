import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase();

  if (
    pathname.startsWith('/casino') ||
        pathname.startsWith('/casinest') ||
        pathname.startsWith('/casinoet') ||
        pathname.startsWith('/virtuals') ||
        pathname.includes('%20') ||
        pathname.includes(' ')
  ) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow, nosnippet',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

