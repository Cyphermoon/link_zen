import React from 'react'
import Logo from './Logo'

const SimpleBanner = () => {
    return (
        <header className='bg-accent flex justify-center py-3'>
            <Logo className='text-primary-50' />
        </header>
    )
}

export default SimpleBanner