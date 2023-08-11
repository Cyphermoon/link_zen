import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import React from 'react'

interface Props {
    children: React.ReactNode,
    trigger: React.ReactNode,
}

const CustomDropdown = ({ children, trigger }: Props) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild >
                {trigger}
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align="start"
                    side='right'
                    sideOffset={3}
                    className='bg-white rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 px-0.5'>
                    <>
                        {children}
                    </>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default CustomDropdown