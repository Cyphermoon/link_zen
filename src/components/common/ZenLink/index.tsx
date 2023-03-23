import React from 'react'


interface Props {
    className?: string
}

const ZenLink = ({ className }: Props) => {
    return (
        <div className={`w-1/4 h-1/6  lg:w-52 lg:h-52 absolute rounded-2xl bg-slate-400 shadow-lg ${className}`}></div>
    )
}

export default ZenLink