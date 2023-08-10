import React from 'react'
import { useBoolean } from 'usehooks-ts'
import DashboardNav from './DashboardNav'
import Sidebar from './SideBar'

interface Props {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    const { value, toggle, setTrue, setFalse } = useBoolean(false)

    function openSidebar() {
        setTrue()
        document && document.body.classList.add("modal-open")
    }

    function closeSidebar() {
        setFalse()
        document && document.body.classList.remove("modal-open")
    }

    return (
        <div className='flex overflow-hidden lg:overflow-visible'>
            <Sidebar
                opened={value}
                closeSidebar={closeSidebar}
            />
            <div className='grow lg:ml-[200px]'>
                <DashboardNav openSidebar={openSidebar} />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout