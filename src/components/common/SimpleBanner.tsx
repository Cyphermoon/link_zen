import React from 'react'
import BackArrow from './BackArrow'
import Container from './Container'
import Logo from './Logo'

interface Props {
    withBackArrow?: boolean
}

const SimpleBanner = ({ withBackArrow }: Props) => {
    return (
        <header className='bg-accent py-3'>
            <Container className='flex items-center'>
                {withBackArrow && <BackArrow className='text-primary-50' />}
                <Logo className='text-primary-50 grow text-center' />
            </Container>
        </header>
    )
}

export default SimpleBanner