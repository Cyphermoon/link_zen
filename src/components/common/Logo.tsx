import React from 'react'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <h5 className={`font-bold uppercase ${className}`}>Organice</h5>
    )
}

export default Logo