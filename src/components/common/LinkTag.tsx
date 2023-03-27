import React from 'react'

interface Props {
    title: string
    className?: string
}

const LinkTag = ({ title, className }: Props) => {
    return (
        <span
            className={`bg-primary-200 rounded-full py-1 px-2 text-xs text-primary-700  ${className}`}>
            {title}
        </span>
    )
}

export default LinkTag