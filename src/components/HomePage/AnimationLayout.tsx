import React from 'react'
import Container from '../common/Container'
import AnimationLink from './AnimationLink'
import HeroText from './HeroText'

const AnimationLayout = () => {
    return (
        <div className='grow block'>
            <Container className='relative h-full max-w-5xl text-center flex flex-col justify-center items-center px-2 space-y-12 '>
                <HeroText headerClassName='text-4xl leading-tight' />
                <AnimationLink
                    title='Twitter'
                    folderName='social media'
                    dateCreated='22/03/23'
                    url='https://twitter.com/moon_cypher'
                    imageUrl='/asset/twitter-preview.svg'
                    className='' />
            </Container>
        </div>
    )
}

export default AnimationLayout