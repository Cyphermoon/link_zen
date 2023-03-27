import Image from 'next/image'
import React from 'react'
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Container from '../common/Container'



const Header = () => {
    return (
        <header className='py-8 profile-gradient'>
            <Container className='space-y-10'>
                <div className='flex space-x-8 items-center'>
                    <figure>
                        <Image
                            src="https://randomuser.me/api/portraits/men/20.jpg"
                            className='rounded-full'
                            alt='John image'
                            width={150}
                            height={150} />
                    </figure>
                    <div>
                        <h3 className='text-4xl text-primary-900 mb-3'>Walter Stone</h3>
                        <div className='flex space-x-4 items-center text-primary-700 text-lg mb-5'>
                            <FaTwitter />
                            <AiFillInstagram />
                            <BsYoutube />
                            <FaTiktok />
                            <BsSpotify />
                        </div>
                        <p className='text-primary-700 lg:w-11/12 text-md'>
                            Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque sollicitudin morbi nec in porttitor aliquam porttitor proin.
                        </p>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder='Search for a link'
                    className='bg-primary-50 text-primary-800 px-4 py-3 rounded-2xl w-full outline-none focus:ring-2 focus:ring-primary-400 focus:bg-primary' />

            </Container>

        </header>
    )
}

export default Header