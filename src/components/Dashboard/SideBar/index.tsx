import Logo from '@/components/common/Logo'
import clsx from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import { FolderContextMenu } from '../ContextMenus'
import SidebarLink from './SideBarLink'
import SidebarSection from './SidebarSection'

//TODO: create a component for sidebar links with tags
//TODO: create a dropdown for sidebar option


interface Props {
    opened: boolean
    toggle: () => void
}

interface CountLayoutProps {
    text: string;
    number: number;
}

const Sidebar = ({ opened, toggle }: Props) => {

    const SIDEBAR_CLASS = clsx("bg-dashboard-opaque lg:bg-dashboard-transparent fixed isolate lg:static z-20 top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen space-y-8 lg:before:hidden before:fixed before:bg-black/20 before:w-screen before:h-screen before:top-0 before:left-full transition-all duration-500 lg:translate-x-0 lg:pointer-events-auto lg:opacity-100 py-5 overflow-y-auto", {
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
                                <CountLayout text="life" number={1} />
                            }
                        />
                    </li>
                    <li>
                        <FolderContextMenu>
                            <SidebarLink
                                href='#'
                                content={
                                    <CountLayout text="game" number={2} />
                                }
                            />
                        </FolderContextMenu>
                    </li>
                    <li>
                        <SidebarLink
                            href='#'
                            content={
                                <CountLayout text="movie" number={3} />
                            }
                        />
                    </li>
                </ul>
            </SidebarSection>
        </section>
    )
}


export default Sidebar

const CountLayout = ({ text, number }: CountLayoutProps) => {
    return (
        <div className='flex items-center justify-between pr-1.5'>
            <span>{text}</span>
            <span className='group-hover:hidden'>{number}</span>
        </div>
    );
};



