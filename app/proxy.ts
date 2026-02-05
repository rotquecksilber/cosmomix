import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname.toLowerCase();

    // Блокируем подозрительные URL
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
            statusText: 'Gone',
            headers: {
                'X-Robots-Tag': 'noindex, nofollow, nosnippet',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico|api/).*)',
};
