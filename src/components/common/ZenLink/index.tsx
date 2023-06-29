import { LINK_TITLE_LENGTH } from '@/constants/link.constant'
import { useCloseLinkOnClickOutside } from '@/hooks/link.hook'
import { truncateText } from '@/utils'
import { getUrlDomain } from '@/utils/link.utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { BsChevronDown, BsChevronUp, BsThreeDotsVertical } from 'react-icons/bs'
import { RiDeleteBin6Line, RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri'
import CustomToolbar from '../CustomToolbar'
import CustomToolbarButton from '../CustomToolbar/ToolBarItem'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import LinkTag from '../LinkTag'
import DropdownMenuItem from '../DropdownMenuItem'
import { BiRename } from 'react-icons/bi'
import { ToolbarButton } from '@radix-ui/react-toolbar'
import { FiShare } from 'react-icons/fi'
import { FaCopy, FaEdit } from 'react-icons/fa'

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


const ZenLink = ({ className, imageUrl, descOpened, description, id, handleDescChanged, url, dateCreated, title }: Props) => {
    const linkRef = useRef<HTMLDivElement>(null)
    useCloseLinkOnClickOutside(descOpened, id, handleDescChanged, linkRef.current)

    return (
        <div
            ref={linkRef}
            className={`
            border-2 border-gray-200  p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-4 w-fit ${className} relative overflow-hidden group`
            }>
            <div className='flex items-center justify-between w-full'>
                <span className='bg-orange-500 text-primary w-3 h-3 rounded-full' />

                <CustomToolbar className='hidden lg:flex items-center justify-center p-0 w-max bg-primary-600 shadow-lg opacity-0 group-hover:animate-in group-hover:slide-in-from-right-full group-hover:opacity-100 rounded-lg overflow-clip text-white relative'>
                    <CustomToolbarButton value='delete'>
                        <RiDeleteBin6Line />
                    </CustomToolbarButton>

                    <CustomToolbarButton value='edit'>
                        <RiEditBoxLine />
                    </CustomToolbarButton>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger className='py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md'>
                            <ToolbarButton asChild value='more options'>
                                <BsThreeDotsVertical />
                            </ToolbarButton>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                align="start"
                                side='right'
                                sideOffset={3}
                                className='bg-white backdrop-blur-lg rounded-xl shadow-lg min-w-[150px] z-40 py-2.5 px-0.5'>
                                <>
                                    <DropdownMenuItem title="Edit" Icon={FaEdit} />
                                    <DropdownMenuItem title="Share" Icon={FiShare} />
                                    <DropdownMenuItem title="Copy" Icon={FaCopy} />
                                    <DropdownMenuItem isDanger title="Delete" Icon={RiDeleteBinLine} />
                                </>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </CustomToolbar>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className='text-primary-700 block lg:hidden'>
                        <button title='See options'>
                            <BsThreeDotsVertical className='text-lg' />
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
                                <DropdownMenuItem isDanger title="Delete" Icon={RiDeleteBinLine} />
                            </>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>

            <figure className='preview-link-img relative group'>
                <Image src={imageUrl} width={237} height={123} alt="Preview Image" className='rounded-lg object-contain' />
            </figure>

            <div className='flex justify-between w-full text-md text-gray-600'>
                <h5 className=''>
                    {truncateText(title, LINK_TITLE_LENGTH)}
                </h5>

                <BsChevronUp
                    onClick={() => handleDescChanged(id)}
                    className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
            </div>

            <div className='flex items-center space-x-2'>
                <LinkTag title='twitter' />
                <LinkTag title='life' />
                <LinkTag title='social media' />
            </div>

            <div className='flex w-full justify-between items-center'>
                <Link href={url} className='text-sm text-gray-700 underline'>
                    {getUrlDomain(url)}
                </Link>
                <span className='text-sm text-gray-700'>{dateCreated}</span>
            </div>

            {/* description */}
            <div className={`text-primary-800 bg-primary z-10 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom px-3 ${descOpened ? "scale-y-100 overflow-scroll" : "scale-y-0 overflow-hidden"} absolute inset-0 !m-0 `}>
                <BsChevronDown
                    onClick={() => handleDescChanged(id)}
                    className="self-center text-xl cursor-pointer transition-transform hover:scale-105" />

                <p className={`text-left text-sm transition-opacity duration-200 ${descOpened ? "opacity-100" : "opacity-0"}`}>
                    {description}
                </p>
            </div>
        </div >
    )
}

export default ZenLink