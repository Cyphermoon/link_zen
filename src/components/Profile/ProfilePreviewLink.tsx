import { ContextMenuSeparator } from '@radix-ui/react-context-menu';
import Image from 'next/image';
import { useRef } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { RiEditBoxLine, RiShareLine } from 'react-icons/ri';
import { TbCopy } from 'react-icons/tb';
import { useBoolean } from 'usehooks-ts';


import CustomContextMenu from '../common/CustomContextMenu';
import ContextMenuItem from '../common/CustomContextMenu/ContextMenuItem';
import ProfileLinkToolBar from './ProfileLinkToolBar';

import { LINK_TITLE_LENGTH } from '@/constants/link.constant';
import { truncateText } from '@/utils';
import { getUrlDomain } from '@/utils/link.utils';


interface Props {
    title: string
    description: string
    imageUrl: string
    url: string
}


const ProfilePreviewLink = ({ title, description, imageUrl, url }: Props) => {
    const { value: descOpened, setTrue, setFalse } = useBoolean()
    const linkRef = useRef<HTMLDivElement>(null)

    const handleShareClicked = () => { }
    const handleCopyClicked = () => { }
    const handleEditClicked = () => { }


    return (
        <CustomContextMenu contextChildren={
            <>
                <ContextMenuItem handleClick={handleShareClicked} title='Share'>
                    <RiShareLine />
                </ContextMenuItem>
                <ContextMenuItem handleClick={handleCopyClicked} title='Copy'>
                    <TbCopy />
                </ContextMenuItem>

                <ContextMenuSeparator className='h-[1px] my-2 bg-primary-300' />

                <ContextMenuItem handleClick={handleEditClicked} title='Edit'>
                    <RiEditBoxLine />
                </ContextMenuItem>
            </>
        }>
            <div tabIndex={1} ref={linkRef} className='rounded-2xl flex flex-col shadow-md border-2 border-b border-gray-100 profile-link relative w-11/12 max-w-xs mx-auto pb-2'>
                {/* link image */}
                <figure className='cursor-pointer overflow-hidden rounded-tl-2xl rounded-tr-2xl w-full h-[300px] relative hover:before:opacity-20 mb-4 group'>
                    <ProfileLinkToolBar />

                    <Image src={imageUrl} alt={title} fill={true} className="object-cover" />
                </figure>

                <div className='px-4'>
                    {/* link's title section */}
                    <div>
                        <div className='flex justify-between items-center text-md font-medium'>
                            <h4 className='capitalize text-lg font-medium'>
                                {truncateText(title, LINK_TITLE_LENGTH)}
                            </h4>

                            <BsChevronUp
                                onClick={() => setTrue()}
                                className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
                        </div>
                        <span className={`underline text-xs transition-opacity opacity-0 ${url ? "opacity-100" : ""}`}>
                            {url ? getUrlDomain(url) : ""}
                        </span>
                    </div>

                    {/* link description section */}
                    <div className={`text-white bg-primary-800 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom ${descOpened ? "scale-y-100 overflow-scroll" : "h-0 scale-y-0 overflow-hidden"} description`}>
                        <BsChevronDown
                            onClick={() => setFalse()}
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

export default ProfilePreviewLink