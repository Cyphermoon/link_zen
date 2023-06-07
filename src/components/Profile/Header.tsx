import { AiFillInstagram } from 'react-icons/ai'
import { BsSpotify, BsYoutube } from 'react-icons/bs'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import Container from '../common/Container'
import UserAvatar from '../common/UserAvatar'




const Header = () => {
    return (
        <header className='py-8 bg-profile-gradient'>
            <Container className='space-y-10'>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-8 items-center'>
                    <UserAvatar
                        name='Walter Stone'
                        imageUrl=''
                        className='w-[185px] h-[185px]' />

                    <div className='text-center lg:text-left'>
                        <h3 className='text-3xl text-primary-900 mb-3'>Walter Stone</h3>
                        <div className='flex space-x-4 justify-center lg:justify-start items-center text-primary-700 text-lg mb-5'>
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