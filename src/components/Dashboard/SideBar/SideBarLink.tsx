import DropdownMenuItem from '@/components/common/DropdownMenuItem'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { IoLogOutOutline } from "react-icons/io5"

interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    content: React.ReactNode
}

const SidebarLink = ({ href, content, className, ...props }: SidebarLinkProps) => {
    return (
        <Link href={href} className={`text-gray-700 text-xs ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 backdrop-blur-sm group relative ${className}`} {...props}>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger className='outline-none absolute top-1/2 -translate-y-1/2 right-2'>
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
                        <DropdownMenu.Group className='block lg:hidden' >
                            <DropdownMenuItem className='bg-button-gradient text-sm capitalize text-center !text-gray-800 px-4 py-1.5 transition rdx-highlighted:scale-95 ease-linear duration-100 block rounded-md w-full'>
                                install app
                            </DropdownMenuItem>

                            <DropdownMenu.Separator className='h-[1px] bg-primary-200 my-1' />
                        </DropdownMenu.Group>


                        <DropdownMenu.Group>
                            <DropdownMenuItem>
                                Share Profile
                            </DropdownMenuItem>

                            <DropdownMenuItem className='block lg:hidden'>
                                Visit Profile
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                Account Settings
                            </DropdownMenuItem>

                            <DropdownMenu.Separator className='h-[1px] bg-primary-200 my-1' />

                            <DropdownMenuItem className='flex items-center space-x-3 text-red-500 rdx-highlighted:text-white rdx-highlighted:bg-red-500 '>
                                <span>Logout</span> <IoLogOutOutline />
                            </DropdownMenuItem>

                        </DropdownMenu.Group>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>


            {content}
        </Link>

    )
}

export default SidebarLink