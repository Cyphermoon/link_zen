import Header from '@/components/HomePage/Header';
import PageHead from '@/components/common/PageHead';
import Features from '@/components/HomePage/Features/Features';

export default function Home() {
  return (
    <div className='bg-primary w-screen'>
      <PageHead title='Organice - Home' />
      <Header />
      <Features/>
    </div>
  )
}
