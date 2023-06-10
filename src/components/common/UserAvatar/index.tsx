import React, { useMemo } from 'react'
import { createAvatar } from '@dicebear/core'
import { pixelArt } from '@dicebear/collection'
import * as Avatar from '@radix-ui/react-avatar';
import Image from 'next/image';

interface Props {
    imageUrl?: string
    name: string
    className?: string
    id: IdType
}

const UserAvatar = ({ imageUrl, name, className, id }: Props) => {

    const avatar = useMemo(() => {
        return createAvatar(pixelArt, {
            glassesProbability: 100,
            mouth: ["happy03", "happy09", "happy12"],
            hair: ["long12", "long06", "long14"],
            hairColor: ["D9CDF2"],
            glasses: ["dark01", "dark02", "dark03", "dark05", "dark06", "light01", "light02", "light03"],
            clothing: ["variant01", "variant02", "variant03"],
            glassesColor: ["202020", "888888"],
            clothingColor: ["000000", "555555"],
            accessories: ["variant01", "variant02", "variant03"],
            accessoriesProbability: 50,
            size: 20,
            seed: `${name}-${id}`
        }).toDataUriSync()
    }, [name, id])

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