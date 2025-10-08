
import type {Metadata} from 'next';
import {seoData} from '@/lib/seo';
import ContractProductionPage from '@/app/capability/capability';

export const metadata: Metadata = seoData.capability;
export default function Capability() {
  return (
    <>

      <ContractProductionPage/>
    </>
  );
}
