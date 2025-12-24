export default function BlockedPage({ params }: { params: { slug?: string[] } }) {
  const pathname = '/' + (params.slug?.join('/') ?? '');
  const blockedPrefixes = ['/casino', '/casinest', '/casinoet', '/virtuals'];
  const isBlocked =
        blockedPrefixes.some(prefix => pathname.startsWith(prefix)) ||
        pathname.includes('%20') ||
        pathname.includes(' ');

  if (isBlocked) {
    return new Response(null, {
      status: 410,
      headers: { 'X-Robots-Tag': 'noindex, nofollow, nosnippet' },
    });
  }

  return new Response(null, { status: 404 });
}
