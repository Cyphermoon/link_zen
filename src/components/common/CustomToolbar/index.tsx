import * as Toolbar from "@radix-ui/react-toolbar"


interface Props extends Toolbar.ToolbarProps {
    type?: 'single' | 'multiple'
    children: React.ReactNode
}


const CustomToolbar = ({ type = "single", className, children }: Props) => {
    return (
        <Toolbar.Root tabIndex={-1} className={`${className}`}>
            <Toolbar.ToggleGroup type={type}>
                {children}
            </Toolbar.ToggleGroup>
        </Toolbar.Root>
    )
}

export default CustomToolbar