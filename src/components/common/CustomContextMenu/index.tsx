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
            <ContextMenu.Content className={`rounded-lg py-2 z-40 shadow-lg drop-shadow-sm border min-w-[130px] bg-primary flex flex-col px-1 ${className}`}>
                {contextChildren}
            </ContextMenu.Content>
        </ContextMenu.Root>
    )
}

export default CustomContextMenu