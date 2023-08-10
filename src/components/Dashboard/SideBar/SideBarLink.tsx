import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"

interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    dropdownItems?: React.ReactNode
    disableMobileDropDown?: boolean
}

const SidebarLink = ({ href, children, dropdownItems, className, disableMobileDropDown, ...props }: SidebarLinkProps) => {
    return (
        <Link href={href} className={`text-gray-700 text-sm ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 group select-none lg:select-text relative ${className}`} {...props}>

            {dropdownItems &&
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className={`outline-none absolute top-1/2 -translate-y-1/2 right-2  ${disableMobileDropDown ? "hidden lg:block" : "block"}`}>
                        <div className={`text-xl transition-opacity opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:hover:bg-black/10 px-1`}>
                            <BsThreeDots />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content
                        align="start"
                        side='right'
                        sideOffset={3}
                        className='bg-white rounded-xl shadow-lg z-40 drop-shadow-sm border min-w-[150px] py-2.5 px-0.5'>
                        <>
                            {dropdownItems}
                        </>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            }
            {children}
        </Link>

    )
}

export default SidebarLink