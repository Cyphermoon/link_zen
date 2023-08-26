import Logo from '@/components/common/Logo'
import { useModalManager } from '@/components/modals/ModalContext'
import { AddFieldEditorModalArg } from '@/components/modals/type'
import { deleteMessage, handleConfirmationOrAction } from '@/utils'
import clsx from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import CountLayout from './CountLayout'
import SidebarLink from './SideBarLink'
import SidebarSection from './SidebarSection'


interface Props {
    opened: boolean
    closeSidebar: () => void
}

type ItemType = 'folder' | 'tag';

const folders = [
    { id: 1, name: 'Coding tools' },
    { id: 2, name: 'Topics to read' },
    { id: 3, name: 'Design Sites' },
    { id: 4, name: 'Best Spotify Playlist' },
];

const tags = [
    { id: 1, text: 'life', number: 1 },
    { id: 2, text: 'game', number: 2 },
    { id: 3, text: 'movie', number: 3 },
];


const Sidebar = ({ opened, closeSidebar }: Props) => {

    const { addModal } = useModalManager()

    async function handleCreate(type: ItemType) {
        const isFolder = type === 'folder';
        const typeName = isFolder ? 'Folder' : 'Tag';
        const placeholderText = isFolder ? 'folder' : 'tag';

        const obj: AddFieldEditorModalArg = {
            type: 'field-editor',
            formTitle: `Create New ${typeName}`,
            initialValue: '',
            fieldId: type,
            labelName: `${typeName} Name`,
            name: type,
            placeholder: `Enter ${placeholderText} name you want to create`,
        };

        try {
            const result = await addModal(obj);
            console.log(result);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function handleRename(name: string, type: ItemType) {
        const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

        const obj: AddFieldEditorModalArg = {
            type: 'field-editor',
            formTitle: `Rename ${capitalizedType}`,
            initialValue: name,
            fieldId: `renamed${capitalizedType}`,
            labelName: `${capitalizedType} Name`,
            name: `rename${capitalizedType}`,
            placeholder: `Enter name you want to rename "${name}" to`,
        };

        try {
            const result = await addModal(obj);
            console.log(result);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function handleDelete(name: string, listType: ItemType) {
        const confirmation = deleteMessage(name, listType);

        const deleteLink = () => 1;

        try {
            const confirmationResult = await handleConfirmationOrAction({
                ...confirmation,
                dialog: addModal,
            }, deleteLink);

            console.log(confirmationResult);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }


    const SIDEBAR_CLASS = clsx("bg-dashboard-opaque lg:bg-dashboard-transparent fixed z-[2] top-0 left-0 w-9/12 lg:w-3/12 lg:max-w-[200px] h-screen transition duration-500 lg:translate-x-0 lg:pointer-events-auto lg:opacity-100 overflow-visible hide-scrollbar", {
        "opacity-100 pointer-events-auto translate-x-0": opened,
        "pointer-events-none opacity-0 -translate-x-full": !opened
    })

    return (
        <div className='isolate z-[60]'>
            <div
                className={`lg:hidden w-screen h-screen bg-black/20 fixed top-0 left-0 transition duration-300 ${opened ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} />

            <section className={SIDEBAR_CLASS}>
                <div className='h-screen overflow-y-scroll hide-scrollbar space-y-8 pt-5 pb-8'>
                    <div className={`flex items-center justify-between px-4`}>
                        <Logo className='text-accent text-xl font-semibold' />
                        <RxCross1 className='text-gray-800 text-xl lg:hidden' onClick={closeSidebar} />
                    </div>

                    <SidebarSection headerText='Generated'>
                        <ul>
                            <li>
                                <SidebarLink href='#' withDropdownItems={false} withContextMenu={false} >
                                    Root
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href='#' withDropdownItems={false} withContextMenu={false} >
                                    Frequently Visited
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink href='#' withDropdownItems={false} withContextMenu={false}  >
                                    Unused
                                </SidebarLink>
                            </li>
                        </ul>
                    </SidebarSection>

                    <SidebarSection headerText='Folders' handleClick={() => handleCreate("folder")}>
                        <ul>
                            {folders.map(folder => (
                                <li key={folder.id}>
                                    <SidebarLink
                                        handleDelete={() => handleDelete(folder.name, "folder")}
                                        handleRename={() => handleRename(folder.name, "folder")}
                                        href="#" >
                                        {folder.name}
                                    </SidebarLink>
                                </li>
                            ))}
                        </ul>
                    </SidebarSection>

                    <SidebarSection headerText="Tags" handleClick={() => handleCreate("tag")}>
                        <ul>
                            {tags.map(tag => (
                                <li key={tag.id}>
                                    <SidebarLink
                                        handleDelete={() => handleDelete(tag.text, "tag")}
                                        handleRename={() => handleRename(tag.text, "tag")}
                                        href="#">
                                        <CountLayout text={tag.text} number={tag.number} />
                                    </SidebarLink>
                                </li>
                            ))}
                        </ul>
                    </SidebarSection>
                </div>
            </section>
        </div>
    )
}

export default Sidebar




