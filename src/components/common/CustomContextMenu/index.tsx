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
            <ContextMenu.Portal>
                <ContextMenu.Content className={`rounded-lg py-1 z-40 min-w-[130px]  bg-primary flex flex-col ${className}`}>
                    {contextChildren}
                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    )
}

export default CustomContextMenu