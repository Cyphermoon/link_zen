import * as ContextMenu from '@radix-ui/react-context-menu';
import Image from 'next/image';
import { useRef } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { RiDeleteBin6Line, RiEditBoxLine, RiShareLine } from 'react-icons/ri';
import { TbCopy } from 'react-icons/tb';
import { useClickAnyWhere } from 'usehooks-ts';
import CustomContextMenu from '../common/CustomContextMenu';
import ContextMenuItem from '../common/CustomContextMenu/ContextMenuItem';
import ProfileLinkToolBar from './ProfileLinkToolBar';

interface Props {
    title: string
    id: number
    description: string
    imageUrl: string
    descOpened?: boolean
    handleDescChanged: (id: number) => void
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
        <CustomContextMenu contextChildren={
            <>
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
            </>
        }>
            <div tabIndex={1} ref={linkRef} className='rounded-2xl flex flex-col shadow-sm border-2 border-b border-gray-100 profile-link relative'>

                <figure className='px-4 py-4 cursor-pointer relative hover:before:opacity-20 mb-4 group'>
                    <ProfileLinkToolBar />

                    <Image src={imageUrl} alt={title} width={500} height={20} className="object-contain" />
                </figure>

                <div className='px-4 py-2'>
                    <div className='flex justify-between items-center text-md font-medium'>
                        <h4 className='capitalize text-xl'>{title}</h4>

                        <BsChevronUp
                            onClick={() => handleDescChanged(id)}
                            className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
                    </div>

                    <div className={`text-primary-800 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom ${descOpened ? "scale-y-100 overflow-scroll" : "h-0 scale-y-0 overflow-hidden"} description`}>
                        <BsChevronDown
                            onClick={() => handleDescChanged(id)}
                            className="self-center text-xl text-white cursor-pointer transition-transform hover:scale-105" />

                        <p className={`text-left transition-opacity duration-200 ${descOpened ? "opacity-100" : "opacity-0"}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </CustomContextMenu>
    )

}

export default ProfileLink
