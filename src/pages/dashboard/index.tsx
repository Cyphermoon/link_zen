import Container from '@/components/common/Container'
import DashboardNav from '@/components/Dashboard/DashboardNav'
import Sidebar from '@/components/Dashboard/SideBar'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import { useState } from 'react'
import { useBoolean } from 'usehooks-ts'


const UserDashBoard = () => {
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
                    <DashboardNav toggleNav={toggle} />

                    <div>
                        <h1>Content Appears here</h1>
                    </div>
                </Container>
            </div>

        </RootLayout>
    )
}


export default UserDashBoard