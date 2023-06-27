import CustomContextMenu from '@/components/common/CustomContextMenu'
import ContextMenuItem from '@/components/common/CustomContextMenu/ContextMenuItem'
import React from 'react'
import { RiShareLine } from 'react-icons/ri'

interface Props {
    children: React.ReactNode
}

const FolderContextMenu = ({ children }: Props) => {
    return (
        <CustomContextMenu
            className='bg-white'
            contextChildren={
                <>
                    <ContextMenuItem title='Share'>
                        {/* <RiShareLine /> */}
                    </ContextMenuItem>
                </>
            }>
            {children}
        </CustomContextMenu>
    )
}

export default FolderContextMenu