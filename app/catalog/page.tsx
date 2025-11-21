import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';
import CatalogPage from './catalog';

export const metadata: Metadata = seoData.catalog;

export default function Catalog() {

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Каталог косметических продуктов COSMOMIX',
    url: 'https://cosmo-mix.ru/catalog',
    description:
            'Каталог декоративной и уходовой косметики: продукты для губ, глаз, лица, а также продукты в разработке.',
    mainEntity: [
      {
        '@type': 'Product',
        name: 'Блеск для губ',
        category: 'Жидкие продукты для губ',
      },
      {
        '@type': 'Product',
        name: 'Масло для губ',
        category: 'Жидкие продукты для губ',
      },
    ],
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://cosmo-mix.ru',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Каталог продукции',
        item: 'https://cosmo-mix.ru/catalog',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD для страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* JSON-LD для хлебных крошек */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <CatalogPage />
    </>
  );
}
