import * as ContextMenu from "@radix-ui/react-context-menu"
import { IconType } from "react-icons"
import { getListItemClass } from "../classNames";


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
            className={`${getListItemClass(isDanger)} ${className}`}
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