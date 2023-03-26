import { getUrlDomain } from '@/utils/link.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkTag from '../common/LinkTag'
import * as Accordion from '@radix-ui/react-accordion'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    className?: string
    imageUrl: string
    folderName: string
    url: string
    dateCreated: string
    title: string
}


const AnimationLayout = ({ className, imageUrl, folderName, url, dateCreated, title }: Props) => {
    return (
        <div className={`
            border-2 border-gray-200  p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-6
            ${className} preview-link`}>
            <span className='bg-orange-500 text-primary text-xs px-1 lg:px-2 rounded-2xl lowercase'>{folderName}
            </span>

            <figure className='preview-link-img relative'>
                <Image src={imageUrl} width={237} height={123} alt="Preview Image" className='rounded-lg object-contain' />
            </figure>

            <div className='space-y-4 w-full'>
                <div className='flex justify-between items-center'>
                    <h5 className='text-md text-gray-600'>{title}</h5>
                    <BsChevronDown />
                </div>
                <div className='space-y-3 h-0 overflow-hidden'>
                    <p className='text-sm text-primary-700 text-left'>
                        This is a twitter social media link
                    </p>
                    <div className='flex items-center space-x-2'>
                        <LinkTag title='twitter' />
                        <LinkTag title='life' />
                        <LinkTag title='social media' />
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-between items-center'>
                <Link href={url} className='text-sm text-gray-700 underline'>
                    {getUrlDomain(url)}
                </Link>
                <span className='text-sm text-gray-700'>{dateCreated}</span>
            </div>
        </div >
    )
}

export default AnimationLayout