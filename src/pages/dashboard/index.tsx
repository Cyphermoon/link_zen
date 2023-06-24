import Container from '@/components/common/Container'
import UserAvatar from '@/components/common/UserAvatar'
import SearchBar from '@/components/Dashboard/Searchbar'
import Sidebar from '@/components/Dashboard/SideBar'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import Link from 'next/link'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useBoolean } from 'usehooks-ts'

//TODO:  create a dropdown for profile


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

                            <UserAvatar
                                name='Cypher Moon'
                                id="123"
                                imageUrl=''
                                className='w-[43px] h-[43px] border-2 border-primary-300 bg-gray-200 p-0.5 cursor-pointer' />
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


export default UserDashBoard