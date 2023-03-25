import React from 'react'
import Button from '../common/Button'

interface Props {
    className?: string
    headerClassName?: string
}

const HeroText = ({ className, headerClassName }: Props) => {
    return (
        <div className={`flex flex-col text-center justify-center items-center ${className}`}>
            <h1
                className={`text-primary-900 font-medium lg:font-semibold leading-9 lg:leading-10 mb-6
                ${headerClassName}`}>
                <span className='underneath_line'>Organise</span> and Share Your
                <span className='underneath_line mx-2'>Links</span>  Nicely
            </h1>
            <Button text="Get Started" href='#' />
        </div>
    )
}

export default HeroText