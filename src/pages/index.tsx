import Header from '@/components/HomePage/Header';
import PageHead from '@/components/common/PageHead';


export default function Home() {
  return (
    <div className='bg-primary h-screen w-screen'>
      <PageHead title='Organice - Home' />
      <Header />
    </div>
  )
}
