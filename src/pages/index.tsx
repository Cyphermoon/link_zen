import Header from '@/components/HomePage/Header';
import PageHead from '@/components/common/PageHead';
import Features from '@/components/HomePage/Features/Features';
import { Accordion } from '@/components/HomePage/Accordion/Accordion';
import Footer from '@/components/HomePage/Footer';
import BenefitSection from '@/components/HomePage/BenefitSection';
import CTASection from '@/components/HomePage/CTASection';

export default function Home() {
  return (
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
  )
}
