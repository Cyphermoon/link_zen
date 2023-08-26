import * as ContextMenu from "@radix-ui/react-context-menu"
import React from 'react'

interface Props {
    children: React.ReactNode,
    contextChildren: React.ReactNode
    className?: string
}

const CustomContextMenu = ({ children, contextChildren, className }: Props) => {
    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger>
                {children}
            </ContextMenu.Trigger>
            <ContextMenu.Content className={`rounded-lg relative z-[500] py-2 shadow-lg drop-shadow-sm border min-w-[130px] bg-primary flex flex-col lg:px-0.5 mb-1 ${className}`}>
                {contextChildren}
            </ContextMenu.Content>
        </ContextMenu.Root >
    )
}

export default CustomContextMenu