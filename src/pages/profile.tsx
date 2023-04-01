import ActionSection from '@/components/Profile/ActionSection'
import Footer from '@/components/Profile/Footer'
import Header from '@/components/Profile/Header'
import ProfileLinkList from '@/components/Profile/ProfileLinkList'
import Logo from '@/components/common/Logo'
import React from 'react'

const Profile = () => {
    return (
        <main className=''>
            <Header />
            <ActionSection />
            <ProfileLinkList />
            <Footer />
        </main>
    )
}

export default Profile