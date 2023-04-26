import Logo from '@/components/common/Logo'
import { SocialIcon } from '@/components/common/SocialIcon'
import AppConfig from '@/constants/app.constant'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const WaitlistVerified = () => {
    return (
        <main className='bg-primary min-h-screen grid place-items-center relative py-5 px-2'>
            <section className='text-center space-y-7 lg:space-y-10 flex flex-col items-center w-full max-w-4xl -mt-10'>

                <h1 className='text-4xl lg:text-7xl text-primary-800 font-medium'>Thank you for joining our waitlist</h1>
                <p className='text-primary-600 text-sm lg:text-base'>
                    Thank you for your interest in our product/service. {"We're"} excited to have you aboard. You will be notified whenever there is an update. While you are at it, {"don't"} forget to follow us on our social media
                </p>

                <div className='space-y-3 mt-15'>
                    <h4 className='text-accent text-2xl normal-case'>Follow us on social media</h4>

                    <div className='flex font-medium space-x-2 mt-2 justify-center text-lg'>
                        <SocialIcon Icon={FaTwitter} title='Twitter' href={`${AppConfig.twitterUrl}`} className={`text-accent hover:scale-125 cursor-pointer transition-transform w-6 h-auto`} />

                        <SocialIcon Icon={FaLinkedin} title='Linkedin' href={`${AppConfig.linkedinUrl}`} className={`text-accent hover:scale-125 cursor-pointer transition-transform w-6 h-auto`} />
                    </div>
                </div>
            </section>

            <footer className='text-center absolute left-1/2 -translate-x-1/2 bottom-5'>
                <Logo className='text-accent-400 test-base lg:text-xl' />
            </footer>
        </main>
    )
}

export default WaitlistVerified