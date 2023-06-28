import DropdownMenuItem from '@/components/common/DropdownMenuItem'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { IoLogOutOutline } from "react-icons/io5"

interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    dropdownItems?: React.ReactNode
}

const SidebarLink = ({ href, children, dropdownItems, className, ...props }: SidebarLinkProps) => {
    return (
        <Link href={href} className={`text-gray-700 text-xs ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 backdrop-blur-sm group relative ${className}`} {...props}>

            {dropdownItems &&
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className='outline-none absolute top-1/2 -translate-y-1/2 right-2 hidden lg:block'>
                        <div className="text-xl transition-opacity opacity-0 group-hover:opacity-100 hover:bg-black/10 px-1">
                            <BsThreeDots />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            align="start"
                            side='right'
                            sideOffset={3}
                            className='bg-white backdrop-blur-lg rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 px-0.5'>
                            <>
                                {dropdownItems}
                            </>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            }
            {children}
        </Link>

    )
}

export default SidebarLink