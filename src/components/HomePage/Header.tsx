import Image from 'next/image'
import NavBar from './NavBar'
import SpiderLayout from './SpiderLayout'


const Header = () => {
  return (
    <header className='py-4 flex flex-col h-screen'>
      <NavBar />
      <SpiderLayout />
    </header >
  )
}

export default Header