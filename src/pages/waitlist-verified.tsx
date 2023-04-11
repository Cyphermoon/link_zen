import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const WaitlistVerified = () => {
    return (
        <main className='bg-primary min-h-screen grid place-items-center py-10'>
            <section className='text-center space-y-10 flex flex-col items-center w-full max-w-4xl'>

                <h1 className='text-5xl lg:text-7xl text-primary-800 font-medium animate-pulse'>Thank you for joining our waitlist</h1>
                <p className='text-primary-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero assumenda tempore numquam eaque pariatur inventore repellat itaque non nobis illum commodi, alias maxime quaerat nisi quae asperiores ratione. Deleniti?</p>

                <Button text="Read About Us" href='/about' />
            </section>

            <footer className='text-center self-end'>
                <Logo className='text-accent text-base' />
                <div className='flex space-x-5 justify-center'>
                    <FaTwitter className='text-accent' />
                    <FaLinkedin className='text-accent' />
                </div>
            </footer>
        </main>
    )
}

export default WaitlistVerified