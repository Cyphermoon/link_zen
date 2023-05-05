import React, { useMemo } from 'react'
import { createAvatar } from '@dicebear/core'
import { pixelArt } from '@dicebear/collection'
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';

interface Props {
    imageUrl?: string
    name: string
    className?: string
}

const UserAvatar = ({ imageUrl, name, className }: Props) => {

    const avatar = useMemo(() => {
        return createAvatar(pixelArt, {
            glassesProbability: 100,
            hair: ["long12"],
            hairColor: ["D9CDF2"],
            glasses: ["dark01", "dark02", "dark03"],
            clothing: ["variant01", "variant02", "variant03"],
            glassesColor: ["202020", "888888"],
            clothingColor: ["000000", "555555"],
            size: 20,
            seed: name
        }).toDataUriSync()
    }, [name])

    return (
        <Avatar.Root className={`inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${className}`}>
            {
                imageUrl ?
                    <Avatar.AvatarImage
                        className='h-full w-full rounded-[inherit] object-cover'
                        src={imageUrl}
                        alt={name}
                    /> :
                    <Avatar.Fallback>
                        <Image src={avatar} alt={name} width={200} height={200} className="rounded-[inherit] object-cover" />
                    </Avatar.Fallback>
            }


        </Avatar.Root>
    )
}

export default UserAvatar