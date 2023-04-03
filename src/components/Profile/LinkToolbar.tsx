import * as Toolbar from "@radix-ui/react-toolbar"
import { RiDeleteBin6Line, RiEditBoxLine, RiShareLine } from "react-icons/ri"

const LinkToolbar = () => {
    return (
        <Toolbar.Root tabIndex={-1} className='flex items-center justify-center p-0 w-max bg-primary-200 absolute right-4 top-2 z-10 opacity-0 group-hover:animate-in group-hover:slide-in-from-right-0 group-hover:opacity-100'>
            <Toolbar.ToggleGroup type='single'>
                <ToolBarItem value='delete'>
                    <RiDeleteBin6Line />
                </ToolBarItem>

                <ToolBarItem value='edit'>
                    <RiEditBoxLine />
                </ToolBarItem>

                <ToolBarItem value='share'>
                    <RiShareLine />
                </ToolBarItem>

            </Toolbar.ToggleGroup>
        </Toolbar.Root>
    )
}

export default LinkToolbar


const ToolBarItem = ({ value, children }: ToolBarItemProps) => {

    return (
        <Toolbar.ToggleItem
            tabIndex={-1}
            className='py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md'
            title={value}
            value={value}>
            {children}
        </Toolbar.ToggleItem>
    )

}
