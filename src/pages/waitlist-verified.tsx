import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const WaitlistVerified = () => {
    return (
        <main className='bg-primary min-h-screen grid place-items-center py-5'>
            <section className='text-center space-y-10 flex flex-col items-center w-full max-w-4xl'>

                <h1 className='text-5xl lg:text-7xl text-primary-800 font-medium'>Thank you for joining our waitlist</h1>
                <p className='text-primary-600 text-base'>
                    Thank you for your interest in our product/service. {"We're"} excited to have you aboard. You will be notified whenever there is an update. Meanwhile, you can read more about us by clicking the button below
                </p>

                <Button text="Read About Us" href='/about' />
            </section>

            <footer className='text-center self-end'>
                <Link href="/">
                    <Logo className='text-accent text-base' />
                </Link>
                <div className='flex space-x-2 mt-2 justify-center'>
                    <FaTwitter className='text-accent hover:scale-x-110 cursor-pointer transition-transform' />
                    <FaLinkedin className='text-accent hover:scale-x-110 cursor-pointer transition-transform' />
                </div>
            </footer>
        </main>
    )
}

export default WaitlistVerified