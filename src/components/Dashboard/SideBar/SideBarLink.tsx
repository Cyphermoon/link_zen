import CustomDropdown from '@/components/common/CustomDropdown'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { ItemContextMenu } from '../Menus'
import ItemDropdownMenu from '../Menus/ItemDropdownMenu'

interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    withDropdownItems?: boolean
    withContextMenu?: boolean
    handleRename?: () => void
    handleDelete?: () => void
}

const SidebarLink = ({ href, children, withDropdownItems = true, withContextMenu = true, className, handleDelete, handleRename, ...props }: SidebarLinkProps) => {


    return (
        <div className={`ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full group relative ${className}`}>
            {
                withDropdownItems ?

                    <ItemContextMenu
                        handleRename={handleRename}
                        handleDelete={handleDelete}>
                        <Link className='text-sm text-gray-700  ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 group select-none lg:select-text' href={href} {...props}>
                            {children}
                        </Link>
                    </ItemContextMenu>
                    :
                    <Link className='text-sm text-gray-700  ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 group select-none lg:select-text' href={href} {...props}>
                        {children}
                    </Link>
            }

            {withDropdownItems &&
                <CustomDropdown
                    withPortal={false}
                    trigger={
                        <button className={`text-xl text-gray-500 lg:text-lg transition-opacity opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:hover:bg-black/10 px-1 outline-none absolute top-1/2 -translate-y-1/2 right-3 lg:right-4 z-[40]`}>
                            <BsThreeDots />
                        </button>
                    }>
                    <ItemDropdownMenu
                        handleRename={handleRename}
                        handleDelete={handleDelete} />

                </CustomDropdown>
            }
        </div>
    )
}

export default SidebarLink