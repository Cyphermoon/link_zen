import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type HeaderSocialMedia = "twitter" | "facebook" | "instagram" | "youtube" | "spotify" | "tiktok"

interface Props {
    iconUrl: string,
    mainUrl: string
    name: HeaderSocialMedia
}



const HeaderSocialIcon = ({ iconUrl, mainUrl, name }: Props) => {
    return (
        <Link href={mainUrl} className="cursor-pointer transition hover:opacity-80 hover:scale-95" >
            <Image src={iconUrl} width={19} height={19} alt={name} className="object-fill" />
        </Link>
    )
}

export default HeaderSocialIcon