import React from 'react'

interface Props {
    icon: React.ReactNode
    name: string
    handleClick: () => void
    className?: string
}

const AuthOption = ({ icon, name, className, handleClick }: Props) => {
    return (
        <button className={`flex w-full justify-center items-center text-white text-base hover:opacity-80 shadow-md transition-opacity space-x-3 rounded-xl  py-2 ${className}`}>
            {icon}
            <span >Continue with {name}</span>
        </button>
    )
}

export default AuthOption