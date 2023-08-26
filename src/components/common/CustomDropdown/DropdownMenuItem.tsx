import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { forwardRef, Ref } from "react";
import { getListItemClass } from '../classNames';

interface Props extends DropdownMenu.DropdownMenuItemProps {
    title?: string;
    Icon?: React.ComponentType<any>;
    children?: React.ReactNode;
    className?: string;
    isDanger?: boolean
}

const DropdownMenuItem = forwardRef(
    (
        { title, Icon, isDanger, children, className, ...props }: Props,
        ref: Ref<HTMLDivElement>
    ) => {


        return (
            <DropdownMenu.Item
                ref={ref}
                className={`${getListItemClass(isDanger ?? false)} ${className}`}
                {...props}
            >
                {title && Icon && (
                    <>
                        <Icon /> <span>{title}</span>
                    </>
                )}

                {children && children}
            </DropdownMenu.Item>
        );
    }
);

DropdownMenuItem.displayName = "DropdownMenuItem";

export default DropdownMenuItem;
