// app/[...slug]/page.tsx
export default async function BlockedPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const pathname = '/' + (resolvedParams.slug?.join('/') ?? '');

  const blockedPrefixes = ['/casino', '/casinest', '/casinoet', '/virtuals'];

  const isBlocked =
        blockedPrefixes.some(prefix => pathname.startsWith(prefix)) ||
        pathname.includes('%20') ||
        pathname.includes(' ');

  if (isBlocked) {
    // Возвращаем 410 для заблокированных URL
    return new Response(null, {
      status: 410,
      headers: { 'X-Robots-Tag': 'noindex, nofollow, nosnippet' },
    });
  }

  // Всё остальное можно отдавать как 404
  return new Response(null, { status: 404 });
}
