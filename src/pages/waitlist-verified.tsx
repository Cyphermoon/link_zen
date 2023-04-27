import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'
import { SocialIcon } from '@/components/common/SocialIcon'
import AppConfig from '@/constants/app.constant'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const WaitlistVerified = () => {
    return (
        <div className='bg-primary min-h-screen py-5'>
            <Container >
                <nav className='mb-20'>
                    <Logo className='text-accent-400 test-base lg:text-xl' />
                </nav>

                <main className='grid justify-center relative'>
                    <section className='text-center flex flex-col items-center w-full max-w-4xl'>
                        <div className=' space-y-5 mb-20'>
                            <h1 className='text-4xl lg:text-7xl text-primary-800 font-medium'>Thank you for joining our waitlist</h1>
                            <p className='text-primary-600 text-sm lg:text-base'>
                                Thank you for your interest in our product/service. {"We're"} excited to have you aboard. You will be notified whenever there is an update. While you are at it, {"don't"} forget to follow us on our social media
                            </p>
                        </div>

                        <div className='space-y-12 mt-15 bg-accent max-w-xl w-11/12 rounded-2xl pt-4 pb-6' >
                            <h4 className='text-primary text-2xl normal-case'>Follow us on social media</h4>

                            <div className='flex font-medium justify-around'>
                                <SocialIcon
                                    Icon={FaTwitter}
                                    title='Twitter'
                                    href={`${AppConfig.twitterUrl}`}
                                    className={`text-primary hover:scale-125 cursor-pointer transition-transform w-16 lg:w-20 h-auto`} />

                                <SocialIcon
                                    Icon={FaLinkedin}
                                    title='Linkedin'
                                    href={`${AppConfig.linkedinUrl}`}
                                    className={`text-primary hover:scale-125 cursor-pointer transition-transform w-16 lg:w-20 h-auto`} />
                            </div>
                        </div>
                    </section>
                </main >
            </Container>
        </div>

    )
}

export default WaitlistVerified