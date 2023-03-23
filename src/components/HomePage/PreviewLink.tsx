import React from 'react'

interface Props {
    className?: string
}


const PreviewLink = ({ className }: Props) => {
    return (
        <div className={`w-[95px] h-[95px] md:w-[120px] md:h-[120px] lg:w-44 lg:h-40 z-10 absolute rounded-2xl bg-primary shadow-lg ${className}`}></div>
    )
}

export default PreviewLink