import React from 'react'
import { useBoolean } from 'usehooks-ts'
import DashboardNav from './DashboardNav'
import Sidebar from './SideBar'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    const { value, toggle } = useBoolean(false)

    return (
        <div className='flex overflow-hidden lg:overflow-visible'>
            <Sidebar
                opened={value}
                toggle={toggle}
            />
            <div className='grow'>
                <DashboardNav toggleNav={toggle} />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout