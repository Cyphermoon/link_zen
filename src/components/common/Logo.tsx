import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <Link href="/" className={`font-bold uppercase ${className} m-0 p-0`}>LinkZen</Link>
    )
}

export default Logo