import CustomContextMenu from '@/components/common/CustomContextMenu'
import ContextMenuItem from '@/components/common/CustomContextMenu/ContextMenuItem'
import React from 'react'
import { BiRename } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

interface Props {
    children: React.ReactNode
    handleRename?: () => void
    handleDelete?: () => void
}

const ItemContextMenu = ({ children, handleRename, handleDelete }: Props) => {
    return (
        <CustomContextMenu
            className='bg-white'
            contextChildren={
                <>
                    {handleRename && <ContextMenuItem title='Rename' Icon={BiRename} onClick={handleRename} />}
                    {handleDelete && <ContextMenuItem title='Delete' Icon={RiDeleteBinLine} isDanger onClick={handleDelete} />}
                </>
            }>
            {children}
        </CustomContextMenu>
    )
}

export default ItemContextMenu