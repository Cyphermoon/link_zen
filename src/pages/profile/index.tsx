import RootLayout from '@/components/layout/RootLayout'
import ActionSection from '@/components/Profile/ActionSection'
import Footer from '@/components/Profile/Footer'
import Header from '@/components/Profile/Header'
import ProfileLinkList from '@/components/Profile/ProfileLinkList'
import AppConfig from '@/constants/app.constant'

const Profile = () => {
    return (
        <RootLayout metadata={{
            title: `${AppConfig.name} - Profile`
        }}>
            <div className='space-y-12'>
                <Header />
                <ActionSection />
                <ProfileLinkList />
                <Footer />
            </div>
        </RootLayout>
    )
}

export default Profile