import Logo from '@/components/common/Logo'
import { useModalManager } from '@/components/modals/ModalContext'
import { AddFieldEditorModalArg } from '@/components/modals/type'
import clsx from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import { ItemContextMenu } from '../Menus'
import ItemDropdownMenu from '../Menus/ItemDropdownMenu'
import SidebarLink from './SideBarLink'
import SidebarSection from './SidebarSection'



interface Props {
    opened: boolean
    closeSidebar: () => void
}

interface CountLayoutProps {
    text: string;
    number: number;
}

const Sidebar = ({ opened, closeSidebar }: Props) => {

    const { addModal } = useModalManager()

    const handleFolderCreate = () => {
        const folderObj: AddFieldEditorModalArg = {
            type: "field-editor",
            formTitle: "Create New Folder",
            initialValue: "",
            fieldId: "folder",
            labelName: "Folder Name",
            name: "folder",
            placeholder: "Enter Folder name you want to create",
        }

        addModal(folderObj)
            .then((result) => {
                console.log(result)
            })
    }

    const handleTagCreate = () => {
        const tagObj: AddFieldEditorModalArg = {
            type: "field-editor",
            formTitle: "Create New Tag",
            initialValue: "",
            fieldId: "tag",
            labelName: "Tag Name",
            name: "tag",
            placeholder: "Enter tag name you want to create",
        }

        addModal(tagObj)
            .then((result) => {
                console.log(result)
            })
    }

    const SIDEBAR_CLASS = clsx("bg-dashboard-opaque lg:bg-dashboard-transparent fixed z-[2] top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen space-y-8 transition duration-500 lg:translate-x-0 lg:pointer-events-auto lg:opacity-100 py-5 overflow-visible hide-scrollbar", {
        "opacity-100 pointer-events-auto translate-x-0": opened,
        "pointer-events-none opacity-0 -translate-x-full": !opened
    })


    return (
        <div className='isolate z-[60]'>
            <div
                className={`lg:hidden w-screen h-screen bg-black/20 fixed top-0 left-0 transition duration-300 ${opened ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} />

            <section className={SIDEBAR_CLASS}>
                <div className={`flex items-center justify-between px-4`}>
                    <Logo className='text-accent text-xl font-semibold' />
                    <RxCross1 className='text-gray-800 text-xl lg:hidden' onClick={closeSidebar} />
                </div>

                <SidebarSection headerText='Generated'>
                    <ul>
                        <li>
                            <SidebarLink href='#' >
                                Root
                            </SidebarLink>
                        </li>
                        <li>
                            <SidebarLink href='#' >
                                Frequently Visited
                            </SidebarLink>
                        </li>
                        <li>
                            <SidebarLink href='#' >
                                Unused
                            </SidebarLink>
                        </li>
                    </ul>
                </SidebarSection>

                <SidebarSection headerText='Folders' handleClick={handleFolderCreate}>
                    <ul>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink href="#">Coding tools</SidebarLink>
                            </ItemContextMenu>
                        </li>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink href="#">Books to read</SidebarLink>
                            </ItemContextMenu>
                        </li>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink
                                    href="#"
                                    dropdownItems={<ItemDropdownMenu />}>
                                    Design Sites
                                </SidebarLink>
                            </ItemContextMenu>
                        </li>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink
                                    href="#"
                                    dropdownItems={<ItemDropdownMenu />}>
                                    Best Spotify Playlist
                                </SidebarLink>
                            </ItemContextMenu>
                        </li>
                    </ul>

                </SidebarSection>


                {/* <SidebarSection headerText='Tags' handleClick={() => 1}>
                <ul>
                    <li>
                        <SidebarLink href='#'>Music </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href='#'>Books to read</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href='#'>Design Sites</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href='#'>Best Spotify Playlist</SidebarLink>
                    </li>
                </ul>

            </SidebarSection> */}

                <SidebarSection headerText="Tags" handleClick={handleTagCreate}>
                    <ul>
                        <li>
                            <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />} disableMobileDropDown>
                                <CountLayout text="life" number={1} />
                            </SidebarLink>
                        </li>
                        <li>
                            <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />} disableMobileDropDown>
                                <CountLayout text="game" number={2} />
                            </SidebarLink>
                        </li>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />} disableMobileDropDown>
                                    <CountLayout text="movie" number={3} />
                                </SidebarLink>
                            </ItemContextMenu>
                        </li>
                    </ul>
                </SidebarSection>

            </section>
        </div>
    )
}

export default Sidebar


const CountLayout = ({ text, number }: CountLayoutProps) => {
    return (
        <div className='flex items-center justify-between pr-1.5'>
            <span className='text-sm'>{text}</span>
            <span className='group-hover:lg:hidden'>{number}</span>
        </div>
    );
};



