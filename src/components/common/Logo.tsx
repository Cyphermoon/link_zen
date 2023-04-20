import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <h5 className={`font-bold uppercase ${className}`}><Link href="/">Organice</Link></h5>
    )
}

export default Logo