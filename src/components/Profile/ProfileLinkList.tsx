import { useState } from 'react'
import Container from '../common/Container'
import ProfileLink from './ProfileLink'

const ProfileLinkList = () => {
    const [activeLink, setActiveLink] = useState<number>(-1)

    const handleActiveLink = (id: number) => {
        if (activeLink === id) {
            setActiveLink(-1)
            return
        }

        setActiveLink(id)
    }


    return (
        <main >
            <Container className='grid grid-cols-dynamic-250 gap-8'>
                {
                    [...Array(10)].map((link, idx) => {
                        return (
                            <ProfileLink
                                descOpened={idx === activeLink}
                                handleDescChanged={handleActiveLink}
                                id={idx}
                                key={`profile-link-${idx}`}
                                title='Best of Project'
                                description='i have been going on around on which project is should start working on because i just feel like i need to do something to make the world a better place, that was when the thought for this project came along '
                                imageUrl='https://picsum.photos/95/90' />
                        )
                    })
                }
            </Container>

        </main>
    )
}

export default ProfileLinkList