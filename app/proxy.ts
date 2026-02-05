// app/proxy.ts   ← новый файл (удали старый middleware.ts после копирования)

import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
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
            statusText: 'Gone',                 // опционально, но красиво
            headers: {
                'X-Robots-Tag': 'noindex, nofollow, nosnippet',
                // Рекомендую добавить, чтобы не кэшировалось в CDN/браузере
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',   // можно оставить как есть
    // Или более точный (исключаем статику и API, если не нужно проверять их)
    // matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
