import React from 'react'
import Container from '../common/Container'
import Button from '../common/Button'
import { useWaitListContext } from '@/context/WaitlistProvider'

const CTASection = () => {
    const { openWaitList } = useWaitListContext()

    const handleWaitlistClicked = () => {
        openWaitList()
    }

    return (
        <section className='bg-accent text-white pt-5 lg:pt-10  pb-10 lg:pb-10'>
            <Container className='flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-5 lg:space-y-0' >
                <h2 className='font-semibold lg:font-bold text-4xl lg:text-5xl lg:leading-tight w-full lg:w-6/12'>
                    Get organised with your links today
                </h2>
                <Button type='button' handleClick={handleWaitlistClicked} inverse text="Join the Waitlist" />
            </Container>
        </section>
    )
}

export default CTASection