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
            className={`w-3.5 h-3.5 px-2 rounded-full`}>
        </span>
    )
}

export default LinkColorTag