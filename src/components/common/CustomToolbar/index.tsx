import * as Toolbar from "@radix-ui/react-toolbar"


interface Props {
    type?: 'single' | 'multiple'
    children: React.ReactNode
}


const CustomToolbar = ({ type = "single", children }: Props) => {
    return (
        <Toolbar.Root tabIndex={-1} className='hidden lg:flex items-center justify-center p-0 w-max bg-primary-200 absolute right-4 top-2 z-10 opacity-0 group-hover:animate-in group-hover:slide-in-from-right-0 group-hover:opacity-100'>
            <Toolbar.ToggleGroup type={type}>
                {children}
            </Toolbar.ToggleGroup>
        </Toolbar.Root>
    )
}

export default CustomToolbar