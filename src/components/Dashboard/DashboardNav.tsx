import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import DropdownMenuItem from '../common/DropdownMenuItem'
import UserAvatar from '../common/UserAvatar'
import SearchBar from './Searchbar'
import { IoLogOutOutline } from 'react-icons/io5'


interface Props {
    toggleNav: () => void

}


const DashboardNav = ({ toggleNav }: Props) => {
    const [searchValue, setSearchValue] = useState("")


    return (
        <nav className='flex justify-between items-center'>
            <RxHamburgerMenu
                className={`text-3xl lg:hidden`}
                onClick={toggleNav} />

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
                            className='bg-white border border-primary-100 rounded-xl shadow-lg min-w-[150px] py-2.5 px-0.5'>
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

                                <DropdownMenuItem isDanger>
                                    <span>Logout</span> <IoLogOutOutline />
                                </DropdownMenuItem>

                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>


            </div>

        </nav>
    )
}

export default DashboardNav