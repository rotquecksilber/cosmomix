import Banner from '@/components/banner/banner';
import ContactsSection from '@/components/HomePage/ContactsSection/ContactsSection';
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';
import Script from 'next/script';
export const metadata: Metadata = seoData.contacts;
export default function Page(){
  return (
    <>
      <Script type="application/ld+json" id="breadcrumbs-contacts-schema" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Главная',
              'item': 'https://cosmo-mix.ru'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Контакты',
              'item': 'https://cosmo-mix.ru/contacts'
            }
          ]
        })}
      </Script>

      <Banner title={'Контакты'} />
      <ContactsSection/>
    </>
  );
}
