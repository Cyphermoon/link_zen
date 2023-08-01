import ZenLink from '@/components/common/ZenLink'
import DashboardLayout from '@/components/Dashboard/layout'
import RootLayout from '@/components/layout/RootLayout'
import AppConfig from '@/constants/app.constant'
import { useActiveLink } from '@/hooks/link.hook'



const UserDashBoard = () => {
    const { activeLink, handleActiveLink } = useActiveLink(-1)


    return (
        <RootLayout
            metadata={{
                title: `${AppConfig.name} - Dashboard`
            }}>
            <DashboardLayout>
                <div className='grid justify-items-center md:justify-items-start grid-cols-dynamic-193 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
                    {
                        [...Array(20)].map((link, idx) => {
                            return (
                                <ZenLink
                                    key={idx}
                                    id={idx}
                                    descOpened={idx === activeLink}
                                    url='https://cyphermoon.vercel.app'
                                    title='Assuming the title is longer'
                                    dateCreated='28/02/2005'
                                    imageUrl='/images/og-image.png'
                                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf loremLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam!
                                    lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat magnam quam! asjf lorem'
                                    handleDescChanged={handleActiveLink}
                                />

                            )
                        })
                    }
                </div>
            </DashboardLayout>
        </RootLayout>
    )
}


export default UserDashBoard