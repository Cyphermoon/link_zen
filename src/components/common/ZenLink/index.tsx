import { getUrlDomain } from '@/utils/link.utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { BsChevronDown } from 'react-icons/bs'
import LinkTag from '../LinkTag'

interface Props {
    className?: string
    imageUrl: string
    folderName: string
    url: string
    dateCreated: string
    title: string
}

{/* this component is not functional yet */ }

const ZenLink = ({ className, imageUrl, folderName, url, dateCreated, title }: Props) => {
    return (
        <div className={`
            border-2 border-gray-200  p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-4 
            ${className} preview-link`}>
            <span className='bg-orange-500 text-primary text-xs px-1 lg:px-2 rounded-2xl lowercase'>{folderName}</span>
            <figure className='preview-link-img relative'>
                <Image src={imageUrl} width={237} height={123} alt="Preview Image" className='rounded-lg object-contain' />
            </figure>

            <Accordion.Root type='single' defaultValue='description' className='w-full' collapsible>
                <Accordion.Item value='description' className='group' >
                    <Accordion.Header>
                        <Accordion.Trigger className='w-full flex justify-between items-center cursor-pointer'>
                            <h5 className='text-md text-gray-600 font-medium'>{title}</h5>
                            <BsChevronDown className='transition-transform duration-300 group-rdx-state-open:rotate-180' />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className='space-y-3 
                        rdx-state-open:animate-in rdx-state-open:duration-200 rdx-state-open:slide-in-from-top
                        rdx-state-closed:animate-out rdx-state-closed:slide-out-to-top'>
                        <p className='text-xs text-primary-800 font-normal text-left mt-3'>
                            This is a twitter social media link
                        </p>
                        <div className='flex items-center space-x-2'>
                            <LinkTag title='twitter' />
                            <LinkTag title='life' />
                            <LinkTag title='social media' />
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                {/* <div className='flex justify-between w-full '>
                    <h5 className='text-md text-gray-600'>{title}</h5>
                </div>

                <div className='flex items-center space-x-2'>
                    <LinkTag title='twitter' />
                    <LinkTag title='life' />
                    <LinkTag title='social media' />
                </div> */}
            </Accordion.Root>

            <div className='flex w-full justify-between items-center'>
                <Link href={url} className='text-sm text-gray-700 underline'>
                    {getUrlDomain(url)}
                </Link>
                <span className='text-sm text-gray-700'>{dateCreated}</span>
            </div>
        </div >
    )
}

export default ZenLink