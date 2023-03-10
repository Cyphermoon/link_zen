import Head from 'next/head'
import * as Popover from '@radix-ui/react-popover';
import Header from '@/components/HomePage/Header';
import PageHead from '@/components/PageHead';


export default function Home() {
  return (
    <div className='bg-primary h-screen'>
      <PageHead title='Organice - Home' />
      <Header />
    </div>
  )
}
