// app/[...slug]/page.tsx
export default function BlockedPage({ params }: { params: any }) {
  const pathname = '/' + (params.slug?.join('/') ?? '');

  // Список запрещённых папок и SEO-спам URL
  const blockedPrefixes = [
    '/casino',
    '/casinest',
    '/casinoet',
    '/virtuals',
  ];

  const isBlocked =
        blockedPrefixes.some(prefix => pathname.startsWith(prefix)) ||
        pathname.includes('%20') ||
        pathname.includes(' ');

  if (isBlocked) {
    // Отдаём только статус 410 и пустое тело
    return new Response(null, { status: 410 });
  }

  // Всё остальное можно пробросить как 404, чтобы не ломать site routing
  return new Response(null, { status: 404 });
}
