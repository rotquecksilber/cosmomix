
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';

import DecorativeCosmeticsPage from '@/app/decorative_cosmetics/decorative_cosmetics';

export const metadata: Metadata = seoData.decorative_cosmetics;
export default function DecorativeCosmetics() {
  return (
    <>

      <DecorativeCosmeticsPage/>
    </>
  );
}
