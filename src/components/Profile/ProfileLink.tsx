import Image from 'next/image'
import React, { useRef } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useBoolean, useClickAnyWhere } from 'usehooks-ts'

interface Props {
    title: string
    id: number
    description: string
    imageUrl: string
    descOpened?: boolean
    handleDescChanged: (id: number) => void
}

const ProfileLink = ({ title, description, imageUrl, descOpened, handleDescChanged, id, }: Props) => {

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-screen h-screen opacity-5 bg-black ${descOpened ? "block" : "hidden"} z-10`}
                onClick={() => handleDescChanged(id)} />

            <div className={`rounded-2xl px-4 py-5 shadow-sm space-y-4 border-2 border-b border-gray-100 profile-link relative ${descOpened ? "z-50" : ""}`}>
                <figure>
                    <Image src={imageUrl} alt={title} width={500} height={20} className="object-contain" />
                </figure>

                <div className='space-y-3'>
                    <div className='flex justify-between items-center text-md font-medium'>
                        <h4 className='capitalize text-xl'>{title}</h4>

                        <BsChevronUp
                            onClick={() => handleDescChanged(id)}
                            className={`transition-transform duration-700 ${descOpened ? "-rotate-180" : "rotate-0"} cursor-pointer`} />
                    </div>

                    <div className={`text-primary-800 text-sm flex flex-col space-y-6 transition-transform duration-500 origin-bottom 
                    ${descOpened ? "scale-y-100 overflow-scroll" : "h-0 scale-y-0 overflow-hidden"} description`}>
                        <BsChevronDown
                            onClick={() => handleDescChanged(id)}
                            className="self-center text-base text-white cursor-pointer transition-transform hover:scale-105" />

                        <p className={`w-full text-left transition-opacity duration-200 rounded-3xl 
                            ${descOpened ? "opacity-100" : "opacity-0"}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfileLink