import Banner from '@/components/banner/banner';
import ContactsSection from '@/components/HomePage/ContactsSection/ContactsSection';
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';
export const metadata: Metadata = seoData.contacts;
export default function Page(){
  return (
    <>
      <Banner title={'Контакты'} />
      <ContactsSection/>
    </>
  );
}
