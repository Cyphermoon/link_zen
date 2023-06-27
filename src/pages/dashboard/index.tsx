import Container from '@/components/common/Container'
import UserAvatar from '@/components/common/UserAvatar'
import SearchBar from '@/components/Dashboard/Searchbar'
import Sidebar from '@/components/Dashboard/SideBar'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import Link from 'next/link'
import { forwardRef, Ref, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useBoolean } from 'usehooks-ts'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IoLogOutOutline } from 'react-icons/io5'


//TODO:  create a dropdown for profile

interface DropdownItemProps extends DropdownMenu.DropdownMenuItemProps {
    children: React.ReactNode
    className?: string
}


const UserDashBoard = () => {
    const [searchValue, setSearchValue] = useState("")
    const { value, toggle } = useBoolean(false)



    return (
        <RootLayout
            metadata={{
                title: `${AppConfig.name} - Dashboard`
            }}>
            <div className='flex'>
                <Sidebar
                    opened={value}
                    toggle={toggle}
                />
                <Container className='py-4 grow'>
                    <nav className='flex justify-between items-center'>
                        <RxHamburgerMenu
                            className={`text-3xl lg:hidden`}
                            onClick={toggle} />

                        <SearchBar value={searchValue}
                            handleChange={setSearchValue}
                            placeholder="Search" />

                        <div className='flex items-center space-x-5'>
                            <button className='shadow-sm bg-button-gradient text-sm capitalize rounded-full text-center text-gray-800 px-3.5 py-1.5 transition hover:scale-95 ease-linear duration-100 hidden lg:block'>
                                install app
                            </button>

                            <Link
                                className='shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] text-sm capitalize rounded-full text-center text-gray-800 px-3.5 py-1.5 transition-transform duration-100 hover:scale-95 ease-linear hidden lg:block'
                                href={"/profile"}>
                                visit profile
                            </Link>

                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger className='outline-none'>
                                    <UserAvatar
                                        name='Cypher Moon'
                                        id="123"
                                        imageUrl=''
                                        className='w-[43px] h-[43px] border-2 border-primary-300 bg-gray-200 p-0.5 cursor-pointer' />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content
                                        sideOffset={5}
                                        avoidCollisions
                                        collisionPadding={20}
                                        className='bg-primary rounded-xl shadow-lg min-w-[150px] py-2.5 px-0.5'>
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


                        </div>

                    </nav>
                    <div>
                        <h1>Content Appears here</h1>
                    </div>
                </Container>
            </div>

        </RootLayout>
    )
}

const DropdownMenuItem = forwardRef(({ children, className, ...props }: DropdownItemProps, ref: Ref<HTMLDivElement>) => {
    return (
        <DropdownMenu.Item
            ref={ref}
            className={`text-sm text-primary-800 px-3 py-1 rdx-highlighted:bg-accent rdx-highlighted:text-white outline-none border-none rounded-md cursor-pointer capitalize ${className}`}
            {...props}>
            {children}
        </DropdownMenu.Item>
    )
})

DropdownMenuItem.displayName = "DropDownItem"


export default UserDashBoard