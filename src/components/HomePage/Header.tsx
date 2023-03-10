import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import Container from '../Container'
import Logo from '../Logo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

interface NavItemProps {
  text: string
  href: string
  type?: "link" | "button"
}

const NavItem = ({ text, href, type = "link" }: NavItemProps) => {
  if (type === "button") {
    return <Button text={text} href={href} />
  }

  return <Link href={href} className='text-subdue text-base'>{text}</Link>

}

const Header = () => {
  const [navOpened, setNavOpened] = useState<boolean>(false)

  return (
    <header className='py-4'>
      <nav >
        <Container className='flex items-center justify-between relative'>
          <Logo />
          <div className={`absolute bg-primary  ${navOpened ? "flex animate-in slide-in-from-left-full duration-500" : "animate-out slide-out-to-right-full fade-out duration-1000 fill-mode-forwards hidden"} lg:animate-none flex-col items-center justify-center lg:flex left-0 lg:flex-row lg:justify-between lg:static space-y-4 lg:grow lg:space-y-0 top-0 w-screen lg:h-auto lg:w-auto h-screen `}>
            <ul className='flex lg:space-x-8 space-y-4 lg:space-y-0 mx-auto flex-col lg:flex-row'>
              <NavItem href='#' text='Features' />
              <NavItem href='#' text='About Us' />
              <NavItem href='#' text='Contact' />
            </ul>
            <Button href='#' text="Get Started" />
          </div>
          <button className='lg:hidden font-bold text-xl z-30' onClick={() => setNavOpened(!navOpened)}>
            {
              navOpened ?
                <FaTimes className={`animate-in spin-in-180 fade-in-0 duration-500`} /> :
                <GiHamburgerMenu className={`animate-in fade-in duration-1000`} />
            }
          </button>
        </Container>
      </nav>
    </header >
  )
}

export default Header