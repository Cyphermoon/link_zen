import { Button } from '@radix-ui/react-toolbar'
import React from 'react'
import Container from '../common/Container'

const ActionSection = () => {
    return (
        <section className='py-6'>
            <Container>
                <button
                    className='rounded-md px-4 py-2 text-lg capitalize bg-accent text-white hover:bg-white hover:text-accent hover:ring-2 hover:ring-accent transition-colors duration-200 ease-out'>
                    new
                </button>
                <div>

                </div>
            </Container>
        </section>
    )
}

export default ActionSection