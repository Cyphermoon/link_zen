import React from 'react'
import { useBoolean } from 'usehooks-ts'
import Container from '../common/Container'
import DashboardNav from './DashboardNav'
import Sidebar from './SideBar'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    const { value, toggle } = useBoolean(false)

    return (
        <div className='flex'>
            <Sidebar
                opened={value}
                toggle={toggle}
            />
            <Container className='py-4 grow'>
                <DashboardNav toggleNav={toggle} />
                {children}
            </Container>
        </div>
    )
}

export default DashboardLayout