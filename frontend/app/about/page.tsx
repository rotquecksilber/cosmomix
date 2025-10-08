import AboutPage from '@/app/about/about';
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';

export const metadata: Metadata = seoData.about;
export default function About() {
  return (
    <>

      <AboutPage/>
    </>
  );
}
