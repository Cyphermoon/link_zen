import Container from '@/components/common/Container'
import UserAvatar from '@/components/common/UserAvatar'
import SearchBar from '@/components/Dashboard/Searchbar'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import clsx from 'clsx'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useBoolean } from 'usehooks-ts'

const UserDashBoard = () => {
    const [searchValue, setSearchValue] = useState("")
    const { value, toggle } = useBoolean(false)

    const DASHBOARD_CLASS = clsx("bg-red-300 fixed isolate lg:static z-20 top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen lg:before:hidden before:fixed before:bg-black/20 before:w-screen before:h-screen before:top-0 before:left-full transition-all duration-500 lg:translate-x-0 lg:opacity-100", {
        "opacity-100 pointer-events-auto translate-x-0": value,
        "pointer-events-none opacity-0 -translate-x-full": !value
    })

    return (
        <RootLayout
            metadata={{
                title: `${AppConfig.name} - Dashboard`
            }}>
            <div className='flex'>
                <section className={DASHBOARD_CLASS}>

                </section>
                <Container className='py-4 grow'>
                    <nav className='flex justify-between items-center'>
                        <RxHamburgerMenu className={`text-3xl lg:hidden ${value ? "relative z-30" : ""}`} onClick={toggle} />

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