import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';
import DecorativeCosmeticsPage from './decorative_cosmetics';

export const metadata: Metadata = seoData.decorative_cosmetics;

export default function DecorativeCosmetics() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Декоративная косметика COSMOMIX',
    brand: {
      '@type': 'Organization',
      name: 'COSMOMIX',
      logo: 'https://cosmo-mix.ru/logo.svg',
      url: 'https://cosmo-mix.ru',
    },
    description:
            'Создание декоративной косметики, инновационные формулы, соответствие трендам и высоким стандартам качества.',
    category: ['Помады', 'Блески для губ', 'Пудры', 'Тушь'],
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
        name: 'Декоративная косметика',
        item: 'https://cosmo-mix.ru/decorative_cosmetics',
      },
    ],
  };

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <DecorativeCosmeticsPage />
    </>
  );
}
