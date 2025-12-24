import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname.toLowerCase();

  // 1️⃣ Жёстко блокируем казино-папки
  if (
    pathname.startsWith('/casino') ||
        pathname.startsWith('/casinest') ||
        pathname.startsWith('/casinoet') ||
        pathname.startsWith('/virtuals')
  ) {
    return new NextResponse(null, { status: 410 });
  }

  // 2️⃣ Блокируем URL с пробелами (SEO-спам)
  if (pathname.includes('%20') || pathname.includes(' ')) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
