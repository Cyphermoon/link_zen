import Container from '@/components/common/Container'
import UserAvatar from '@/components/common/UserAvatar'
import SearchBar from '@/components/Dashboard/Searchbar'
import Sidebar from '@/components/Dashboard/SideBar'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useBoolean } from 'usehooks-ts'


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

                        <UserAvatar
                            name='Cypher Moon'
                            id="123"
                            imageUrl=''
                            className='w-[43px] h-[43px] border-2 border-primary-300 bg-gray-200 p-0.5' />
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