import Logo from '@/components/common/Logo'
import clsx from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import { useBoolean } from 'usehooks-ts'
import { ItemContextMenu } from '../Menus'
import ItemDropdownMenu from '../Menus/ItemDropdownMenu'
import CreateModal from '../Modals/CreateModal'
import SidebarLink from './SideBarLink'
import SidebarSection from './SidebarSection'


interface Props {
    opened: boolean
    toggle: () => void
}

interface CountLayoutProps {
    text: string;
    number: number;
}

const Sidebar = ({ opened, toggle }: Props) => {
    const { value, setTrue, setFalse } = useBoolean(false)
    const { value: tagModalOpened, setTrue: openTagModal, setFalse: closeTagModal } = useBoolean(false)

    const handleFolderSubmitted = (value: CreateModalProp) => {
        console.log(value.folder)
    }

    const handleTagSubmitted = (value: CreateModalProp) => {
        console.log(value.tag)
    }

    const SIDEBAR_CLASS = clsx("bg-dashboard-opaque lg:bg-dashboard-transparent fixed isolate lg:sticky z-[60] top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen space-y-8 lg:before:hidden before:fixed before:bg-black/20 before:w-screen before:h-screen before:top-0 before:left-full transition-all duration-500 lg:translate-x-0 lg:pointer-events-auto lg:opacity-100 py-5 overflow-y-auto", {
        "opacity-100 pointer-events-auto translate-x-0": opened,
        "pointer-events-none opacity-0 -translate-x-full": !opened
    })


    return (
        <>

            <section className={SIDEBAR_CLASS}>
                <div className={`flex items-center justify-between px-4`}>
                    <Logo className='text-accent text-xl font-semibold' />
                    <RxCross1 className='text-gray-800 text-xl lg:hidden' onClick={toggle} />
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

                <SidebarSection headerText='Folders' handleClick={setTrue}>
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

                <SidebarSection headerText="Tags" handleClick={openTagModal}>
                    <ul>
                        <li>
                            <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />}>
                                <CountLayout text="life" number={1} />
                            </SidebarLink>
                        </li>
                        <li>
                            <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />}>
                                <CountLayout text="game" number={2} />
                            </SidebarLink>
                        </li>
                        <li>
                            <ItemContextMenu>
                                <SidebarLink href="#" dropdownItems={<ItemDropdownMenu />}>
                                    <CountLayout text="movie" number={3} />
                                </SidebarLink>
                            </ItemContextMenu>
                        </li>
                    </ul>
                </SidebarSection>

            </section>
            {/* modals */}
            {
                value &&
                <CreateModal
                    labelName='Folder Name'
                    placeholder='Enter your folder name'
                    id='folder'
                    name='folder'
                    formTitle='Create a New Folder'
                    modalState={value}
                    closeModal={setFalse}
                    initialValue={""}
                    handleSubmit={handleFolderSubmitted}
                />
            }
            {
                tagModalOpened &&
                <CreateModal
                    labelName='Tag Name'
                    placeholder='Enter your tag name'
                    id='tag'
                    name='tag'
                    formTitle='Create a New Tag'
                    modalState={tagModalOpened}
                    closeModal={closeTagModal}
                    initialValue={""}
                    handleSubmit={handleTagSubmitted}
                />
            }
        </>
    )
}

export default Sidebar


const CountLayout = ({ text, number }: CountLayoutProps) => {
    return (
        <div className='flex items-center justify-between pr-1.5'>
            <span>{text}</span>
            <span className='group-hover:lg:hidden'>{number}</span>
        </div>
    );
};



