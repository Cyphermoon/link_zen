import React from 'react'

interface Props {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <div className="space-y-32 container px-4 md:px-2 lg:px-0">
            {children}
        </div>
    )
}

export default Container