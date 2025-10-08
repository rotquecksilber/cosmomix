
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';

import CatalogPage from '@/app/catalog/catalog';

export const metadata: Metadata = seoData.catalog;
export default function Catalog() {
  return (
    <>

      <CatalogPage/>
    </>
  );
}
