import Link from 'next/link'
import clsx from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import SidebarLink from './SideBarLink'
import Logo from '@/components/common/Logo'
import SidebarSection from './SidebarSection'


interface Props {
    opened: boolean
    toggle: () => void
}

const Sidebar = ({ opened, toggle }: Props) => {

    const SIDEBAR_CLASS = clsx("dashboard-gradient fixed isolate lg:static z-20 top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen space-y-8 lg:before:hidden before:fixed before:bg-black/20 before:w-screen before:h-screen before:top-0 before:left-full transition-all duration-500 lg:translate-x-0 lg:pointer-events-auto lg:opacity-100 py-5 overflow-y-auto", {
        "opacity-100 pointer-events-auto translate-x-0": opened,
        "pointer-events-none opacity-0 -translate-x-full": !opened
    })


    return (
        <section className={SIDEBAR_CLASS}>
            <div className={`flex items-center justify-between px-4`}>
                <Logo className='text-accent text-xl font-semibold' />
                <RxCross1 className='text-gray-800 text-lg lg:hidden' onClick={toggle} />
            </div>

            <SidebarSection headerText='Generated'>
                <ul>
                    <li>
                        <SidebarLink href='#' content='Root' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Frequently Visited' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Unused' />
                    </li>
                </ul>
            </SidebarSection>

            <SidebarSection headerText='Folders' handleClick={() => 1}>
                <ul>
                    <li>
                        <SidebarLink href='#' content='Coding tools' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Books to read' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Design Sites' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Best Spotify Playlist' />
                    </li>
                </ul>
            </SidebarSection>

            <SidebarSection headerText='Color Tags' handleClick={() => 1}>
                <ul>
                    <li>
                        <SidebarLink href='#' content='Coding tools' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Books to read' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Design Sites' />
                    </li>
                    <li>
                        <SidebarLink href='#' content='Best Spotify Playlist' />
                    </li>
                </ul>
            </SidebarSection>

            <SidebarSection headerText='Tags' handleClick={() => 1}>
                <ul>
                    <li>
                        <SidebarLink
                            href='#'
                            content={
                                <div className='flex items-center justify-between pr-1.5'>
                                    <span>life</span>
                                    <span>1</span>
                                </div>
                            } />
                    </li>
                    <li>
                        <SidebarLink
                            href='#'
                            content={
                                <div className='flex items-center justify-between pr-1.5'>
                                    <span>game</span>
                                    <span>2</span>
                                </div>
                            } />
                    </li>
                    <li>
                        <SidebarLink
                            href='#'
                            content={
                                <div className='flex items-center justify-between pr-1.5'>
                                    <span>movie</span>
                                    <span>3</span>
                                </div>
                            } />
                    </li>
                </ul>
            </SidebarSection>
        </section>
    )
}


export default Sidebar

