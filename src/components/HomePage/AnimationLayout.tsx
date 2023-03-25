import React from 'react'
import Container from '../common/Container'
import HeroText from './HeroText'

const AnimationLayout = () => {
    return (
        <div className='grow block'>
            <Container className='relative h-full max-w-5xl text-center flex flex-col justify-center items-center px-2'>
                <HeroText headerClassName='text-4xl leading-tight' />
            </Container>
        </div>
    )
}

export default AnimationLayout