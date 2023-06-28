import CustomContextMenu from '@/components/common/CustomContextMenu'
import ContextMenuItem from '@/components/common/CustomContextMenu/ContextMenuItem'
import React from 'react'
import { BiRename } from 'react-icons/bi'
import { RiDeleteBinLine, RiShareLine } from 'react-icons/ri'

interface Props {
    children: React.ReactNode
}

const ItemContextMenu = ({ children }: Props) => {
    return (
        <CustomContextMenu
            className='bg-white'
            contextChildren={
                <>
                    <ContextMenuItem title='Rename' Icon={BiRename} />
                    <ContextMenuItem title='Delete' Icon={RiDeleteBinLine} className='text-red-500 rdx-highlighted:bg-red-500 rdx-highlighted:text-white' />
                </>
            }>
            {children}
        </CustomContextMenu>
    )
}

export default ItemContextMenu