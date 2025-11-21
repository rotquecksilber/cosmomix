import ContractProductionPage from './capability';
import type { Metadata } from 'next';
import { seoData } from '@/lib/seo';

export const metadata: Metadata = seoData.capability;

export default function Capability() {

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COSMOMIX',
    url: 'https://cosmo-mix.ru',
    logo: 'https://cosmo-mix.ru/logo.svg',
    department: [
      {
        '@type': 'Organization',
        name: 'Лаборатория Cosmomix',
        description: 'Разработка всех видов декоративной косметики, тестирование формул, подбор оттенков.'
      },
      {
        '@type': 'Organization',
        name: 'Контрактное производство Cosmomix',
        description: 'Все этапы производства декоративной косметики, фасовка, упаковка, сопровождение заказов.'
      }
    ]
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: 'https://cosmo-mix.ru'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Наши возможности',
        item: 'https://cosmo-mix.ru/capability'
      }
    ]
  };

  return (
    <>
      {/* JSON-LD — только так, через dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <ContractProductionPage />
    </>
  );
}
