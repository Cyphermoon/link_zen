import * as Toolbar from '@radix-ui/react-toolbar';
import * as ContextMenu from '@radix-ui/react-context-menu';
import Image from 'next/image';
import React, { useRef } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { RiDeleteBin6Line, RiEditBoxLine, RiShareBoxFill, RiShareLine } from 'react-icons/ri'
import { TbCopy } from 'react-icons/tb'
import { useBoolean, useClickAnyWhere } from 'usehooks-ts'

interface Props {
    title: string
    id: number
    description: string
    imageUrl: string
    descOpened?: boolean
    handleDescChanged: (id: number) => void
}

interface ToolBarItemProps {
    value: string,
    children: React.ReactNode
}

interface ContextMenuItemProps {
    title: string,
    children: React.ReactNode
}

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



const ContextMenuItem = ({ title, children }: ContextMenuItemProps) => {
    return (
        <ContextMenu.Item className='flex space-x-2 p-2 items-center cursor-pointer text-sm text-primary-800 hover:bg-accent-200  hover:text-white'>
            {children}
            <span>{title}</span>
        </ContextMenu.Item>
    )

}

const ProfileLink = ({ title, description, imageUrl, descOpened, handleDescChanged, id, }: Props) => {
    const linkRef = useRef<HTMLDivElement>(null)

    useClickAnyWhere((e) => {
        if (!descOpened) return
        if (linkRef.current && !linkRef.current.contains(e.target as Node)) {
            handleDescChanged(id)
        }
    })

    return (
        <ContextMenu.Root>
            <ContextMenu.Trigger>
                <div tabIndex={1} ref={linkRef} className='rounded-2xl flex flex-col shadow-sm border-2 border-b border-gray-100 profile-link relative'>

                    <figure className='px-4 py-4 cursor-pointer relative hover:before:opacity-20 mb-4 group'>
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

                        <Image src={imageUrl} alt={title} width={500} height={20} className="object-contain" />
                    </figure>

                    <div className='px-4 py-2'>
                        <div className='flex justify-between items-center text-md font-medium'>
                            <h4 className='capitalize text-xl'>{title}</h4>

                            <BsChevronUp
                                onClick={() => handleDescChanged(id)}
                                className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
                        </div>

                        <div className={`text-primary-800 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom 
                    ${descOpened ? "scale-y-100 overflow-scroll" : "h-0 scale-y-0 overflow-hidden"} description`}>
                            <BsChevronDown
                                onClick={() => handleDescChanged(id)}
                                className="self-center text-xl text-white cursor-pointer transition-transform hover:scale-105" />

                            <p className={`text-left transition-opacity duration-200 ${descOpened ? "opacity-100" : "opacity-0"}`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
                <ContextMenu.Content className='rounded-lg py-1 min-w-[130px]  bg-primary flex flex-col'>
                    <ContextMenuItem title='Share'>
                        <RiShareLine />
                    </ContextMenuItem>
                    <ContextMenuItem title='Copy'>
                        <TbCopy />
                    </ContextMenuItem>
                    <ContextMenu.Separator className='h-[1px] my-2 bg-primary-300' />
                    <ContextMenuItem title='Delete'>
                        <RiDeleteBin6Line />
                    </ContextMenuItem>
                    <ContextMenuItem title='Edit'>
                        <RiEditBoxLine />
                    </ContextMenuItem>
                </ContextMenu.Content>
            </ContextMenu.Portal>
        </ContextMenu.Root>
    )
}

export default ProfileLink