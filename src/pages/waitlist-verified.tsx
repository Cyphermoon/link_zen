import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const WaitlistVerified = () => {
    return (
        <main className='bg-primary min-h-screen grid place-items-center relative py-5 px-2'>
            <section className='text-center space-y-7 lg:space-y-10 flex flex-col items-center w-full max-w-4xl -mt-7'>

                <h1 className='text-4xl lg:text-7xl text-primary-800 font-medium'>Thank you for joining our waitlist</h1>
                <p className='text-primary-600 text-sm lg:text-base'>
                    Thank you for your interest in our product/service. {"We're"} excited to have you aboard. You will be notified whenever there is an update. Meanwhile, you can read more about us by clicking the button below
                </p>

                <Button text="Read About Us" href='/about' />
            </section>

            <footer className='text-center absolute left-1/2 -translate-x-1/2 bottom-5'>
                <Link href="/">
                    <Logo className='text-accent-400 test-base lg:text-xl' />
                </Link>
                <div className='flex space-x-2 mt-2 justify-center text-xl'>
                    <FaTwitter className='text-accent hover:scale-125 cursor-pointer transition-transform' />
                    <FaLinkedin className='text-accent hover:scale-125 cursor-pointer transition-transform' />
                </div>
            </footer>
        </main>
    )
}

export default WaitlistVerified