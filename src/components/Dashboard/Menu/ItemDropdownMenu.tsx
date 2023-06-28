import DropdownMenuItem from '@/components/common/DropdownMenuItem'
import React from 'react'
import { BiRename } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

const ItemDropdownMenu = () => {
    return (
        <>
            <DropdownMenuItem title="Rename" Icon={BiRename} />
            <DropdownMenuItem
                isDanger
                title="Delete"
                Icon={RiDeleteBinLine}
            />
        </>
    )
}

export default ItemDropdownMenu