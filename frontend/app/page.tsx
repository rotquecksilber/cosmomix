



import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import ConnectSection from '@/components/HomePage/ConnectSection/ConnectSection';
import StatsSection from '@/components/HomePage/StatsSection/StatsSection';
import ReasonsSection from '@/components/HomePage/ReasonsSection/ReasonsSection';
import StagesSection from '@/components/HomePage/StagesSection/StagesSection';
import Reasons2Section from '@/components/HomePage/Reasons2Section/Reasons2Section';
import BlogSection from '@/components/HomePage/BlogSection/BlogSection';
import PartnersSection from '@/components/HomePage/PartnersSection/PartnersSection';
import TeamSection from '@/components/HomePage/TeamSection/TeamSection';
import FAQSection from '@/components/HomePage/FAQSection/FAQSection';
import ContactsSection from '@/components/HomePage/ContactsSection/ContactsSection';

export default function Home() {

  return (
    <>

      {/* Hero / Introductory Banner Section */}
      <BannerSection/>

      {/* CTA Section: Contact / Collaboration */}
      <ConnectSection/>

      {/* Stats / Metrics Section */}
      <StatsSection/>

      {/*Production*/}
      <ReasonsSection/>


      {/*Stages*/}
      <StagesSection/>

      <PartnersSection/>

      {/*Reasons*/}
      <Reasons2Section/>

      <BlogSection/>

      <TeamSection/>
      <FAQSection/>
      <ContactsSection/>

    </>
  );
}
