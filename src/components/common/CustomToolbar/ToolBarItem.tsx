import { ToolbarButton, ToolbarButtonProps } from "@radix-ui/react-toolbar"


interface Props extends ToolbarButtonProps {
    value: string,
    children: React.ReactNode
}


const CustomToolbarButton = ({ value, children, ...props }: Props) => {

    return (
        <ToolbarButton
            tabIndex={-1}
            className='py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md'
            title={value}
            value={value}
            {...props}>
            {children}
        </ToolbarButton>
    )

}

export default CustomToolbarButton