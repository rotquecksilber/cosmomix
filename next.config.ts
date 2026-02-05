import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), payment=()',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            // script-src: для Google + Yandex Метрики
                            "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru",

                            // style-src: без unsafe-inline (если стили ломаются — добавь временно 'unsafe-inline')
                            "style-src 'self'",

                            // img-src: пиксели и информеры от обеих аналитик
                            "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://ssl.gstatic.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru",

                            // connect-src: отправка событий (самое важное для аналитики)
                            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://mc.yandex.ru https://mc.yandex.com https://yandexmetrica.com",

                            "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
                            "frame-ancestors 'none'",
                            "form-action 'self'",
                            "base-uri 'self'",
                            "object-src 'none'",
                            "manifest-src 'self'",
                            "upgrade-insecure-requests",
                        ].join('; '),
                    },
                ],
            },
        ];
    },
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        dangerouslyAllowSVG: false,
    },
};

export default nextConfig;
