import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    iconUrl: string,
    mainUrl: string
    name: string
}



const HeaderIcons = ({ iconUrl, mainUrl, name }: Props) => {
    return (
        <Link href={mainUrl} className="cursor-pointer transition-shadow hover:translate-y-4" >
            <Image src={iconUrl} width={50} height={50} alt={name} />
        </Link>
    )
}

export default HeaderIcons