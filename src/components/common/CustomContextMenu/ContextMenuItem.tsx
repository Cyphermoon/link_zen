import * as ContextMenu from "@radix-ui/react-context-menu"
import { IconType } from "react-icons"


interface Props extends ContextMenu.ContextMenuItemProps {
    title: string;
    Icon: IconType;
    children?: React.ReactNode;
    handleClick?: () => void;
    className?: string;
    isDanger?: boolean
}


const ContextMenuItem = ({ children, Icon, title, handleClick, className, isDanger, ...props }: Props) => {
    return (
        <ContextMenu.Item
            onClick={() => handleClick && handleClick()}
            className={`flex space-x-2 p-2 items-center cursor-pointer text-sm text-primary-800 rdx-highlighted:bg-accent-200 rounded-md  hover:text-white ${className} ${isDanger ? "flex items-center space-x-3 text-red-500 rdx-highlighted:text-white rdx-highlighted:bg-red-500" : ""}`}
            {...props}>
            {!children &&
                <>
                    {Icon && <Icon />} <span>{title}</span>
                </>}

            {children && children}
        </ContextMenu.Item >
    )

}

export default ContextMenuItem