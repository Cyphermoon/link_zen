import ActionSection from '@/components/Profile/ActionSection'
import Footer from '@/components/Profile/Footer'
import Header from '@/components/Profile/Header'
import ProfileLinkList from '@/components/Profile/ProfileLinkList'

const Profile = () => {
    return (
        <main className='space-y-12'>
            <Header />
            <ActionSection />
            <ProfileLinkList />
            <Footer />
        </main>
    )
}

export default Profile