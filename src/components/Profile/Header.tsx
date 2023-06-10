import Link from 'next/link'
import { MdEdit } from 'react-icons/md'
import Container from '../common/Container'
import UserAvatar from '../common/UserAvatar'
import HeaderSocialIcon from './HeaderIcons'


const Header = () => {
    return (
        <header className='py-8 bg-profile-gradient'>
            <Container className='space-y-10'>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-8 items-center relative'>
                    <Link
                        href="/profile/edit"
                        className='text-sm text-primary-800 absolute -top-6 lg:top-0 right-0 bg-black/10  py-1 rounded-md px-2 flex items-center' >
                        <MdEdit className='mr-2' />
                        Edit Profile
                    </Link>

                    <UserAvatar
                        name='Cypher Moon'
                        id="123"
                        imageUrl=''
                        className='w-[185px] h-[185px]' />

                    <div className='text-center lg:text-left'>
                        <h3 className='text-3xl text-primary-900 mb-3 relative inline-block'>
                            Cypher Moon
                        </h3>
                        <div className='flex space-x-5 lg:space-x-4 justify-center lg:justify-start items-center text-primary-700 mb-5'>
                            <HeaderSocialIcon iconUrl='/social_icons/instagram.svg' mainUrl='#' name='instagram' />
                            <HeaderSocialIcon iconUrl='/social_icons/tiktok.svg' mainUrl='#' name='tiktok' />
                            <HeaderSocialIcon iconUrl='/social_icons/twitter.svg' mainUrl='#' name='twitter' />
                            <HeaderSocialIcon iconUrl='/social_icons/youtube.svg' mainUrl='#' name='youtube' />
                            <HeaderSocialIcon iconUrl='/social_icons/spotify.svg' mainUrl='#' name='spotify' />
                            <HeaderSocialIcon iconUrl='/social_icons/facebook.svg' mainUrl='#' name='facebook' />
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