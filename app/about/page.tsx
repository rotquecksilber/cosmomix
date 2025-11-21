import AboutPage from './about';
import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';

export const metadata: Metadata = seoData.about;

export default function About() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COSMOMIX',
    url: 'https://cosmo-mix.ru',
    logo: 'https://cosmo-mix.ru/logo.svg',
    founder: [
      {
        '@type': 'Person',
        name: 'Семёнова Дарья',
        jobTitle: 'Основатель COSMOMIX',
      },
      {
        '@type': 'Person',
        name: 'Богданова Любовь',
        jobTitle: 'Старший технолог',
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
        name: 'О COSMOMIX',
        item: 'https://cosmo-mix.ru/about',
      },
    ],
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <AboutPage />
    </>
  );
}
