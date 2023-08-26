
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'

interface Props {
    children: React.ReactNode,
    trigger: React.ReactNode,
    withPortal?: boolean
}

const CustomDropdown = ({ children, trigger, withPortal = true }: Props) => {

    const PortalComponent = withPortal ? DropdownMenuPortal : React.Fragment

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                {trigger}
            </DropdownMenuTrigger>

            <PortalComponent >
                <DropdownMenuContent
                    align="start"
                    side='right'
                    sideOffset={3}
                    className='bg-white rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 lg:px-0.5 border'>
                    <>
                        {children}
                    </>
                </DropdownMenuContent>
            </PortalComponent>
        </DropdownMenu>
    )
}

export default CustomDropdown