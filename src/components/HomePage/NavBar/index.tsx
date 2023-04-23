import { useWaitListContext } from '@/context/WaitlistProvider';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from '../../common/Button';
import Container from '../../common/Container';
import Logo from '../../common/Logo';
import NavItem from './NavItem';

const navLinks: NavItem[] = [
  {
    href: "/#features",
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

interface navbarProps {
  inverse: boolean;
}

const NavBar = ({ inverse }: navbarProps) => {
  const [navOpened, setNavOpened] = useState<boolean | undefined>(undefined);
  const { openWaitList } = useWaitListContext()
  const router = useRouter()


  const bg = inverse ? "bg-primary" : "bg-accent";
  const linkColor = inverse ? "text-subdue" : "text-primary";
  const btnColor = inverse ? "bg-accent" : "bg-primary";
  const btnTextColor = inverse ? "text-primary" : "text-accent";

  const getTabIndex = () => {
    // disable tab key when nav is closed
    return navOpened === undefined || navOpened ? 0 : -1;
  };

  const handleWaitListClicked = () => {
    openWaitList()
  }

  const handleHamburgerClicked = () => {
    setNavOpened(!navOpened);
  };



  return (
    <nav className='' >
      <Container className='flex items-center justify-between'>
        <Logo className={`${linkColor}`} />

        <div
          className={`
                    fixed flex ${bg}
                    left-0  lg:animate-none flex-col items-center z-20 lg:z-auto justify-center lg:flex lg:flex-row lg:justify-between lg:static space-y-4 lg:grow lg:space-y-0 top-0 w-screen lg:h-auto lg:w-auto h-screen
                    ${navOpened === undefined && "hidden"}  
                    ${navOpened
              ? "animate-in slide-in-from-left-full duration-500"
              : navOpened != undefined && "animate-moveOut"
            } 
                    `}
        >
          <ul className="flex lg:space-x-8 space-y-4 lg:space-y-0 mx-auto flex-col lg:flex-row">
            {navLinks.map(({ text, href }, idx) => (
              <NavItem
                color={linkColor}
                key={`nav-links-${idx}`}
                active={router.asPath === href}
                href={href}
                text={text}
                tabIndex={getTabIndex()}
              />
            ))}
          </ul>


          <Button
            type='button'
            text="Join the Waitlist"
            tabIndex={getTabIndex()}
            handleClick={handleWaitListClicked}
            inverse={!inverse} />
        </div>



        <button className={`lg:hidden font-bold text-2xl z-30 ${navOpened ? "fixed top-5 right-2" : "static"} ${!inverse ? "text-primary" : "text-primary-800"}`} onClick={handleHamburgerClicked}>
          {
            navOpened ?
              <FaTimes className={`animate-in spin-in-180 fade-in-0 duration-500`} /> :
              <GiHamburgerMenu className={`animate-in fade-in duration-1000`} />
          }
        </button>
      </Container >
    </nav >
  )
}

export default NavBar;
