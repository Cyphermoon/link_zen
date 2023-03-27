import { getUrlDomain } from '@/utils/link.utils'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
import React from 'react'

interface Props {
    className?: string
    imageUrl: string
    folderName: string
    url: string
    dateCreated: string
    title: string
}



const PreviewLink = ({ className, imageUrl, folderName, url, dateCreated, title }: Props) => {


    return (
        <div className={`w-[110px] h-[110px]  md:w-[160px] md:h-[150px] border-2 border-gray-200 lg:w-44 lg:h-auto p-3 z-10 absolute rounded-2xl bg-primary shadow-lg flex flex-col items-start space-y-2 lg:space-y-3 ${className} preview-link`}>
            <span className='bg-orange-500 text-primary text-[8px] lg:text-xxs px-1 lg:px-2 rounded-2xl lowercase'>
                {folderName}
            </span>

            <figure className='preview-link-img relative'>
                <Image src={imageUrl} width={237} height={123} alt="Preview Image" className='rounded-lg object-contain' />
            </figure>

            <div className='hidden lg:flex justify-between w-full '>
                <h5 className='text-xs text-gray-600'>{title}</h5>
                <BsChevronDown />
            </div>

            <div className='flex w-full justify-between items-center'>
                <Link href={url} className='text-[7px] lg:text-xxs text-gray-700 underline'>
                    {getUrlDomain(url)}
                </Link>
                <span className='text-[7px] hidden lg:inline-block lg:text-xxs text-gray-700'>
                    {dateCreated}
                </span>
            </div>
        </div >
    )
}

export default PreviewLink