import React from 'react'

interface Props {
    color: string
    name: string
}

const LinkColorTag = ({ color, name }: Props) => {
    return (
        <span
            style={{
                backgroundColor: color
            }}
            title={`${name} color tag`}
            className={`min-w-[14px] h-[14px] rounded-full`}>
        </span>
    )
}

export default LinkColorTag