import Link from 'next/link'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../../common/Button'
import Container from '../../common/Container'
import Logo from '../../common/Logo'
import NavItem from './NavItem'
import { useWaitListContext } from '@/context/WaitlistProvider'


const navLinks: NavItem[] = [
    {
        href: "/features",
        text: "Features",
    },
    {
        href: "/about",
        text: "About Us",
    },
    {
        href: "/contact",
        text: "Contact",
    },
];


const NavBar = () => {
    const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined)
    const { openWaitList } = useWaitListContext()

    const getTabIndex = () => {
        // disable tab key when nav is closed
        return (navOpened === undefined) || navOpened ? 0 : -1
    }

    const handleHamburgerClicked = () => {
        setNavOpened(!navOpened)
    }

    const handleWaitListClicked = () => {
        openWaitList()
    }


    return (
        <nav className='mb-10' >
            <Container className='flex items-center justify-between'>
                <Logo />

                <div
                    className={`
                    fixed flex bg-primary 
                    left-0  lg:animate-none flex-col items-center z-20 lg:z-auto justify-center lg:flex lg:flex-row lg:justify-between lg:static space-y-4 lg:grow lg:space-y-0 top-0 w-screen lg:h-auto lg:w-auto h-screen
                    ${navOpened === undefined && "hidden"}  
                    ${navOpened ? "animate-in slide-in-from-left-full duration-500" : navOpened != undefined && "animate-moveOut"} 
                    `}>
                    <ul className='flex lg:space-x-8 space-y-4 lg:space-y-0 mx-auto flex-col lg:flex-row' >
                        {navLinks.map(({ text, href }, idx) => (
                            <NavItem key={`nav-links-${idx}`} href={href} text={text} tabIndex={getTabIndex()} />
                        ))}
                    </ul>

                    <Button type='button' text="Join the Waitlist" tabIndex={getTabIndex()} handleClick={handleWaitListClicked} />
                </div>

                <button className={`lg:hidden font-bold text-xl z-30 ${navOpened ? "fixed top-5 right-10" : "static"}`} onClick={handleHamburgerClicked}>
                    {
                        navOpened ?
                            <FaTimes className={`animate-in spin-in-180 fade-in-0 duration-500`} /> :
                            <GiHamburgerMenu className={`animate-in fade-in duration-1000`} />
                    }
                </button>
            </Container>
        </nav>
    )
}

export default NavBar
