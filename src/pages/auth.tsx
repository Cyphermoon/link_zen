import AuthOption from '@/components/Auth/AuthOption'
import Logo from '@/components/common/Logo'
import { FcGoogle } from 'react-icons/fc'
import React from 'react'
import { FaApple, FaLinkedin, FaTwitter } from 'react-icons/fa'
import RootLayout from '@/components/layout/RootLayout'



const Auth = () => {

    const handleGoogleClicked = () => {

    }

    const handleAppleClicked = () => {

    }

    const handleLinkedInClicked = () => {
    }

    const handleTwitterClicked = () => {

    }


    return (
        <RootLayout>
            <div className='bg-primary-50 h-screen grid place-items-center'>
                <section className='w-full bg-primary-50 max-w-lg lg:shadow-xl rounded-2xl py-8 px-4'>
                    <div className='flex flex-col items-center mb-16'>
                        <span className='text-accent text-xs'>Welcome to linkzen</span>
                        <Logo className='text-3xl' />
                    </div>

                    <div className='space-y-9'>
                        <AuthOption
                            icon={<FcGoogle />}
                            name='Google'
                            handleClick={handleGoogleClicked}
                            className='bg-primary !text-black border border-primary-200'
                        />

                        <AuthOption
                            icon={<FaApple />}
                            name='Apple'
                            handleClick={handleAppleClicked}
                            className='bg-apple'
                        />

                        <AuthOption
                            icon={<FaTwitter />}
                            name='Twitter'
                            handleClick={handleTwitterClicked}
                            className='bg-twitter'
                        />

                        <AuthOption
                            icon={<FaLinkedin />}
                            name='LinkedIn'
                            handleClick={handleLinkedInClicked}
                            className='bg-linkedin'
                        />

                    </div>
                </section>
            </div>
        </RootLayout>
    )
}

export default Auth