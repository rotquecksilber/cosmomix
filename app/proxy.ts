import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const csp = [
        "default-src 'self'",
        `script-src 'self' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru 'nonce-${nonce}'`,
        `style-src 'self' 'unsafe-inline' 'nonce-${nonce}'`,
        "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://ssl.gstatic.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru",
        "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://mc.yandex.ru https://mc.yandex.com https://yandexmetrica.com",
        "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
        "frame-ancestors 'none'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "manifest-src 'self'",
        "upgrade-insecure-requests",
    ].join('; ');

    const pathname = request.nextUrl.pathname.toLowerCase();

    // Блокировка нежелательных URL
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

    const response = NextResponse.next();
    response.headers.set('Content-Security-Policy', csp);
    response.headers.set('x-nonce', nonce);

    return response;
}

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico|api/).*)',
};
