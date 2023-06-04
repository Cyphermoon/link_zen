import { Accordion } from '@/components/HomePage/Accordion/Accordion';
import BenefitSection from '@/components/HomePage/BenefitSection';
import CTASection from '@/components/HomePage/CTASection';
import Features from '@/components/HomePage/Features/Features';
import Footer from '@/components/HomePage/Footer';
import Header from '@/components/HomePage/Header';
import PageHead from '@/components/common/PageHead';
import AppConfig from '@/constants/app.constant';
import WaitListWrapper from '@/components/layout/WaitListWrapper';
import RootLayout from '@/components/layout/RootLayout';

export default function Home() {


  return (
    <RootLayout >
      <WaitListWrapper>
        <div className={`bg-primary w-screen space-y-20 lg:space-y-28`}>
          <PageHead
            title={`${AppConfig.name} - Home`}
            description='Linkzen is a platform that enables you to save, organize, and share links of your choice. Additionally, you can create a personalized page to display your important links.' />

          <Header />
          <BenefitSection />
          <Features />
          <Accordion />
          <div className='bg-accent'>
            <CTASection />
            <Footer />
          </div>
        </div>
      </WaitListWrapper>
    </RootLayout>

  )
}
