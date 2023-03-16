import gsap from 'gsap'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../common/Button'
import Container from '../common/Container'
import Logo from '../common/Logo'

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
  const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined)

  const animateIn = (id: string) => {
    gsap.to(id, {
      translateX: "0",
      backgroundColor: "red",
    })
  }

  const handleHamburgerClicked = () => {
    setNavOpened(!navOpened)
    if (navOpened) {
    }
    else {
      animateIn("#nav_body")
    }
  }

  return (
    <header className='py-4'>
      <nav >
        <Container className='flex items-center justify-between relative'>
          <Logo />
          <div id='nav_body' className={`absolute bg-primary ${navOpened === undefined && "hidden"}  ${navOpened ? "flex animate-in slide-in-from-left-full duration-500" : navOpened != undefined && "animate-out duration-1000 fill-mode-forwards slide-out-to-right-full origin-right"} lg:animate-none flex-col items-center justify-center lg:flex left-0 lg:flex-row lg:justify-between lg:static space-y-4 lg:grow lg:space-y-0 top-0 w-screen lg:h-auto lg:w-auto h-screen `}>
            <ul className='flex lg:space-x-8 space-y-4 lg:space-y-0 mx-auto flex-col lg:flex-row'>
              <NavItem href='#' text='Features' />
              <NavItem href='#' text='About Us' />
              <NavItem href='#' text='Contact' />
            </ul>
            <Button href='#' text="Get Started" />
          </div>
          <button className='lg:hidden font-bold text-xl z-30' onClick={handleHamburgerClicked}>
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