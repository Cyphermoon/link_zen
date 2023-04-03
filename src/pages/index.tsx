import Header from '@/components/HomePage/Header';
import PageHead from '@/components/common/PageHead';
import Features from '@/components/HomePage/Features/Features';
import AppConfig from '@/constants/app.constant';

export default function Home() {
  return (
    <div className='bg-primary w-screen'>
      <PageHead title={`${AppConfig.name} - Home`} />
      <Header />
      <Features />
    </div>
  )
}
