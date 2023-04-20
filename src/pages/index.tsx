import { Accordion } from '@/components/HomePage/Accordion/Accordion';
import BenefitSection from '@/components/HomePage/BenefitSection';
import CTASection from '@/components/HomePage/CTASection';
import Features from '@/components/HomePage/Features/Features';
import Footer from '@/components/HomePage/Footer';
import Header from '@/components/HomePage/Header';
import WaitListModal from '@/components/HomePage/modal/Waitlist';
import PageHead from '@/components/common/PageHead';
import WaitListLayout from '@/components/layout/WaitListLayout';
import { useWaitListContext } from '@/context/WaitlistProvider';

export default function Home() {


  return (
    <WaitListLayout>
      <div className='bg-primary w-screen space-y-28'>
        <PageHead title='Organice - Home' />
        <Header />
        <BenefitSection />
        <Features />
        <Accordion />
        <div className='bg-accent'>
          <CTASection />
          <Footer />
        </div>
      </div>
    </WaitListLayout>
  )
}
