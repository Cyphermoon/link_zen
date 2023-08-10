import React from 'react'
import { FiPlus } from 'react-icons/fi'

interface Props {
    headerText: string
    children: React.ReactNode
    handleClick?: () => void
}

const SidebarSection = ({ headerText, handleClick, children }: Props) => {
    return (
        <div>
            <div className='flex items-center justify-between px-4 mb-1'>
                <h3 className={`text-[15px] lg:text-sm font-semibold`}>{headerText}</h3>
                {handleClick &&
                    <div
                        onClick={handleClick}
                        className='bg-black/10 p-0.5 rounded-md cursor-pointer'>
                        <FiPlus className='text-gray-800 text-xl lg:text-lg rounded-md' />

                    </div>}
            </div>
            {children}
        </div>
    )
}

export default SidebarSection