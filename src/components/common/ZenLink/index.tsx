import { LINK_TITLE_LENGTH } from '@/constants/link.constant'
import { useCloseLinkOnClickOutside } from '@/hooks/link.hook'
import { truncateText } from '@/utils'
import { getUrlDomain } from '@/utils/link.utils'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ToolbarButton } from '@radix-ui/react-toolbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { BsChevronUp, BsThreeDotsVertical } from 'react-icons/bs'
import { FaCopy, FaEdit } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { RiDeleteBin6Line, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { RxCross1 } from 'react-icons/rx'
import CustomToolbar from '../CustomToolbar'
import CustomToolbarButton from '../CustomToolbar/ToolBarItem'
import DropdownMenuItem from '../DropdownMenuItem'
import LinkTag from '../LinkTag'
import LinkColorTag from './LinkColorTag'


// TODO refactor the dropdown items
// TODO figure how to properly render the image

interface Props {
    className?: string
    id: number
    imageUrl: string
    description: string
    url: string
    dateCreated: string
    title: string
    descOpened: boolean
    handleDescChanged: (id: number) => void
}

interface UrlDomainProps {
    url: string
    className?: string
}


const ZenLink = ({ className, imageUrl, descOpened, description, id, handleDescChanged, url, dateCreated, title }: Props) => {

    const linkRef = useRef<HTMLDivElement>(null)
    useCloseLinkOnClickOutside(descOpened, id, handleDescChanged, linkRef.current)

    return (
        <div
            ref={linkRef}
            className={`
            border-2 border-gray-200 p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-4 w-fit ${className} relative overflow-hidden group w-full lg:max-w-[280px] isolate
            `}
        >
            <div className='static lg:absolute top-3 right-3 flex items-center justify-end w-full z-10'>
                <CustomToolbar className='hidden lg:flex items-center justify-center p-0 w-max bg-primary-600 shadow-lg opacity-0 group-hover:animate-in group-hover:slide-in-from-right-full group-hover:opacity-100 rounded-lg overflow-clip text-white relative'>
                    <CustomToolbarButton value='delete'>
                        <RiDeleteBin6Line />
                    </CustomToolbarButton>

                    <CustomToolbarButton value='edit'>
                        <RiEditBoxLine />
                    </CustomToolbarButton>

                    <DropdownMenu.Root>
                        <ToolbarButton asChild value='more options'>
                            <DropdownMenu.Trigger className='py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md'>
                                <BsThreeDotsVertical />
                            </DropdownMenu.Trigger>
                        </ToolbarButton>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                align="start"
                                side='right'
                                sideOffset={3}
                                className='bg-white backdrop-blur-lg rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 px-0.5'>
                                <>
                                    <DropdownMenuItem title="Edit" Icon={FaEdit} />
                                    <DropdownMenuItem title="Share" Icon={FiShare} />
                                    <DropdownMenuItem title="View Image" Icon={HiViewfinderCircle} />
                                    <DropdownMenuItem isDanger title="Delete" Icon={RiDeleteBinLine} />
                                </>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </CustomToolbar>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild className='text-primary-700 block lg:hidden'>
                        <button title='See options'>
                            <BsThreeDotsVertical className='text-xl' />
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            align="start"
                            side='right'
                            sideOffset={3}
                            className='bg-white rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 px-0.5'>
                            <>
                                <DropdownMenuItem title="Edit" Icon={FaEdit} />
                                <DropdownMenuItem title="Share" Icon={FiShare} />
                                <DropdownMenuItem title="Copy" Icon={FaCopy} />
                                <DropdownMenuItem title="View Image" Icon={HiViewfinderCircle} />
                                <DropdownMenuItem isDanger title="Delete" Icon={RiDeleteBinLine} />
                            </>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>

            <figure className='preview-link-img w-full h-40 rounded-lg overflow-clip relative group mt-7'>
                <Image src={imageUrl} alt="Preview Image" fill={true} className="object-cover" />
            </figure>

            {/* Title Section */}
            <div className='flex justify-between w-full text-[17px] text-gray-800 font-normal'>
                <h5 className=''>
                    {truncateText(title, LINK_TITLE_LENGTH)}
                </h5>
            </div>


            {/* Excerpt  */}
            <div
                onClick={() => handleDescChanged(id)}
                className='bg-primary-200 rounded-lg py-3 px-2.5 flex items-center w-full cursor-pointer'
            >
                <p className='grow text-xs'>
                    {truncateText(description, 35)}
                </p>
                <BsChevronUp
                    className={`transition-transform text-xs duration-700 ${descOpened ? "-rotate-180" : "rotate-0"}`} />
            </div>


            {/* Tags */}
            <div className='flex w-full items-center space-x-2 overflow-x-scroll hide-scrollbar '>
                <LinkColorTag color='#ff0000' name='Red' />
                <LinkTag title='twitter' />
                <LinkTag title='life' />
                <LinkTag title='social media' />
            </div>


            {/* Meta Data */}
            <div className='flex w-full justify-between items-center'>
                <UrlDomain url={url} />
                <span className='text-gray-700 text-xs'>{dateCreated}</span>
            </div>


            {/* description */}
            <div className={`text-primary-800 bg-primary z-10 text-sm flex flex-col justify-between items-center transition-transform duration-500 origin-top px-3 ${descOpened ? "translate-y-0 overflow-scroll" : "translate-y-full overflow-hidden"} hide-scrollbar absolute inset-0 !m-0`}>
                <div className='sticky w-full top-0 bg-primary py-2 px-3'>
                    <RxCross1
                        onClick={() => handleDescChanged(id)}
                        className="self-center text-xl text-red-600 font-bold cursor-pointer mx-auto transition-transform hover:scale-105" />
                </div>


                <p className={`text-left text-sm transition-opacity duration-200 ${descOpened ? "opacity-100" : "opacity-0"}`}>
                    {description}
                </p>


                <div className="sticky w-full bottom-0 flex items-center justify-center bg-primary py-2 px-3">
                    <UrlDomain url={url} className="text-center" />
                </div>

            </div>
        </div >
    )
}

export default ZenLink


const UrlDomain = ({ url, className = "" }: UrlDomainProps) => {
    return (
        <Link href={url} className={`text-gray-700 underline text-xs ${className}`} >
            {getUrlDomain(url)}
        </Link >
    )
}