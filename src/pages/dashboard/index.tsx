import React, { useEffect, useState } from 'react';
import Container from '@/components/common/Container';
import Pagination from '@/components/common/Pagination';
import ZenLink from '@/components/Dashboard/ZenLink';
import ActionSection from '@/components/Dashboard/ActionSection';
import DashboardLayout from '@/components/Dashboard/layout';
import RootLayout from '@/components/layout/RootLayout';
import AppConfig from '@/constants/app.constant';
import { useActiveLink } from '@/hooks/link.hook';
import { useModalManager } from '@/components/modals/ModalContext';
import Btn from '@/components/common/Button';

const generateLinks = (activeLink: number, handleActiveLink: (id: number) => void) => {
    return [...Array(20)].map((_, idx) => (
        <ZenLink
            key={idx}
            id={idx}
            descOpened={idx === activeLink}
            url='https://cyphermoon.vercel.app'
            title='Assuming the title is longer'
            dateCreated='28/02/2005'
            imageUrl='/images/og-image.png'
            description='Your long description here...'
            colorTag={{ color: '#ff0000', name: 'Red' }} // Color tag
            tags={[
                { name: 'twitter' },
                { name: 'life' },
                { name: 'social media' },
            ]} // Regular tags
            handleDescChanged={handleActiveLink}
        />
    ));
};

const UserDashBoard: React.FC = () => {
    const { activeLink, handleActiveLink } = useActiveLink(-1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const links = generateLinks(activeLink, handleActiveLink);


    return (
        <RootLayout
            metadata={{
                title: `${AppConfig.name} - Dashboard`
            }}
        >
            <DashboardLayout>
                <ActionSection />

                <Container className='flex flex-col items-start lg:items-center space-y-8 mb-6'>
                    <div className='grid w-full justify-items-center md:justify-items-start grid-cols-dynamic-193 md:grid-cols-3 xl:grid-cols-4 gap-7'>
                        {links}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        pageCount={20}
                    />
                </Container>
            </DashboardLayout>
        </RootLayout>
    );
};

export default UserDashBoard;
