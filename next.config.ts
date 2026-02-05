import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
    async headers() {
        // DEV: без CSP, чтобы не мешать разработке
        if (isDev) {
            return [];
        }

        // PROD: строгая CSP
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

                            // JS: только свои + аналитика, БЕЗ inline
                            "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru",

                            // CSS: inline разрешены (безопасно, но чинит прод)
                            "style-src 'self' 'unsafe-inline'",

                            // Картинки и пиксели аналитики
                            "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://ssl.gstatic.com https://mc.yandex.ru https://mc.yandex.com https://informer.yandex.ru",

                            // Отправка событий аналитики
                            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://mc.yandex.ru https://mc.yandex.com https://yandexmetrica.com",

                            // Шрифты
                            "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",

                            // Запреты
                            "frame-ancestors 'none'",
                            "form-action 'self'",
                            "base-uri 'self'",
                            "object-src 'none'",
                            "manifest-src 'self'",

                            // Авто-HTTPS
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
