import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: Props) => {
    return (
        <div className={`container px-4 md:px-2 lg:px-9 ${className}`}>{children}</div>
    )
}

export default Container