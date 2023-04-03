import * as Toolbar from "@radix-ui/react-toolbar"

interface Props {
    value: string,
    children: React.ReactNode
}


const ToolBarItem = ({ value, children }: Props) => {

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

export default ToolBarItem