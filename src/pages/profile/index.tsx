import ActionSection from '@/components/Profile/ActionSection'
import Footer from '@/components/Profile/Footer'
import Header from '@/components/Profile/Header'
import ProfileLinkList from '@/components/Profile/ProfileLinkList'
import PageHead from '@/components/common/PageHead'
import AppConfig from '@/constants/app.constant'

const Profile = () => {
    return (
        <main className='space-y-12'>
            <PageHead title={`${AppConfig.name} - Profile`} />
            <Header />
            <ActionSection />
            <ProfileLinkList />
            <Footer />
        </main>
    )
}

export default Profile