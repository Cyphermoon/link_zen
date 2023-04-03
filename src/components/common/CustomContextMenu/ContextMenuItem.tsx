import * as ContextMenu from "@radix-ui/react-context-menu"

const ContextMenuItem = ({ title, children }: ContextMenuItemProps) => {
    return (
        <ContextMenu.Item className='flex space-x-2 p-2 items-center cursor-pointer text-sm text-primary-800 hover:bg-accent-200  hover:text-white'>
            {children}
            <span>{title}</span>
        </ContextMenu.Item>
    )

}

export default ContextMenuItem