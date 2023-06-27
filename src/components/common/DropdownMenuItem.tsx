import { forwardRef, Ref } from "react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


interface Props extends DropdownMenu.DropdownMenuItemProps {
    children: React.ReactNode
    className?: string
}


const DropdownMenuItem = forwardRef(({ children, className, ...props }: Props, ref: Ref<HTMLDivElement>) => {
    return (
        <DropdownMenu.Item
            ref={ref}
            className={`text-sm text-primary-800 px-3 py-1 rdx-highlighted:bg-accent rdx-highlighted:text-white outline-none border-none rounded-md cursor-pointer capitalize ${className}`}
            {...props}>
            {children}
        </DropdownMenu.Item>
    )
})

DropdownMenuItem.displayName = "DropDownItem"


export default DropdownMenuItem
