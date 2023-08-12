import { useModalManager } from "@/components/modals/ModalContext";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { forwardRef, Ref } from "react";

interface Props extends DropdownMenu.DropdownMenuItemProps {
    title?: string;
    Icon?: React.ComponentType<any>;
    children?: React.ReactNode;
    className?: string;
    isDanger?: boolean
    confirmationMessage?: (value?: string | number) => string
    handler?: () => void
}

const DropdownMenuItem = forwardRef(
    (
        { title, Icon, isDanger, children, className, confirmationMessage, handler, ...props }: Props,
        ref: Ref<HTMLDivElement>
    ) => {

        const { addModal } = useModalManager()

        async function handleClick() {
            if (confirmationMessage && await addModal({ title: confirmationMessage(), type: "confirm" })) {
                handler && handler()
            }
        }

        return (
            <DropdownMenu.Item
                ref={ref}
                className={`text-base lg:text-sm text-primary-700 px-3 py-1 rdx-highlighted:bg-accent rdx-highlighted:text-white outline-none border-none rounded-md cursor-pointer capitalize flex items-center space-x-2 ${className} ${isDanger ? "flex items-center space-x-3 text-red-500 rdx-highlighted:text-white rdx-highlighted:bg-red-500" : ""}`}
                onClick={handleClick}
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
