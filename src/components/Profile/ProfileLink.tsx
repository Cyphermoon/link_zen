import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { RiDeleteBin6Line, RiEditBoxLine, RiShareLine } from 'react-icons/ri';
import { TbCopy } from 'react-icons/tb';
import { useClickAnyWhere } from 'usehooks-ts';

// Import individual components from '@radix-ui/react-context-menu'
import { ContextMenuSeparator } from '@radix-ui/react-context-menu';

import { truncateText } from '@/utils';
import { getUrlDomain } from '@/utils/link.utils';
import CustomContextMenu from '../common/CustomContextMenu';
import ContextMenuItem from '../common/CustomContextMenu/ContextMenuItem';
import ProfileLinkToolBar from './ProfileLinkToolBar';
import { LINK_TITLE_LENGTH } from '@/constants/link.constant';


// Props interface for ProfileLink component
interface Props {
    title: string
    id: number
    description: string
    url: string
    imageUrl: string
    descOpened?: boolean
    handleDescChanged: (id: number) => void
}


const ProfileLink = ({ title, description, imageUrl, descOpened, handleDescChanged, id, url }: Props) => {
    const linkRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useClickAnyWhere((e) => {
        // opens another link's description modal when it is clicked
        if (!descOpened) return
        if (linkRef.current && !linkRef.current.contains(e.target as Node)) {
            handleDescChanged(id)
        }
    })

    const handleImageContainerClicked = (e: React.MouseEvent<HTMLElement>) => {
        // route to url if target matches the container element
        if (e.target === e.currentTarget) {
            router.push(url)
        }
    }

    const handleShareClicked = () => { console.log("share clicked") }
    const handleCopyClicked = () => { }
    const handleDeleteClicked = () => { }
    const handleEditClicked = () => { }


    return (
        <CustomContextMenu contextChildren={
            <>
                <ContextMenuItem handleClick={handleShareClicked} title="Share" Icon={RiShareLine} />

                <ContextMenuItem handleClick={handleCopyClicked} title="Copy" Icon={TbCopy} />

                <ContextMenuSeparator className="h-[1px] my-2 bg-primary-300" />

                <ContextMenuItem handleClick={handleDeleteClicked} title="Delete" Icon={RiDeleteBin6Line} />

                <ContextMenuItem handleClick={handleEditClicked} title="Edit" Icon={RiEditBoxLine} />
            </>
        }>
            <div tabIndex={1} ref={linkRef} className='rounded-2xl flex flex-col shadow-sm border-2 border-b border-gray-100 profile-link relative'>
                {/* Link Image */}
                <figure onClick={handleImageContainerClicked} className='px-4 py-4 cursor-pointer relative hover:before:opacity-20 mb-4 group'>
                    <ProfileLinkToolBar />

                    <Link href={url}>
                        <Image src={imageUrl} alt={title} width={500} tabIndex={-1} height={20} className="object-contain" />
                    </Link>
                </figure>

                {/* Title section */}
                <div className='px-4 py-2'>
                    <div>
                        <div className='flex justify-between items-center text-md font-medium'>
                            <h4 className='capitalize text-lg font-medium'>
                                {truncateText(title, LINK_TITLE_LENGTH)}
                            </h4>

                            <BsChevronUp
                                onClick={() => handleDescChanged(id)}
                                className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
                        </div>
                        <Link href={url} className={`underline text-xs text-primary-600 font-thin transition-opacity`}>
                            {url ? getUrlDomain(url) : ""}
                        </Link>
                    </div>

                    {/*Description */}
                    <div className={`text-white bg-primary-800 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom ${descOpened ? "scale-y-100 overflow-scroll" : "h-0 scale-y-0 overflow-hidden"} description`}>
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