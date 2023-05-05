import React from 'react'
import Container from '../common/Container'
import Logo from '../common/Logo'

const Footer = () => {
    return (
        <footer>
            <Container className="w-full flex justify-center py-5">
                <Logo className='text-accent font-black text-xl text-center' />
            </Container>
        </footer>
    )
}

export default Footer