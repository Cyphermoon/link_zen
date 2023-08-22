import Container from '@/components/common/Container';
import Pagination from '@/components/common/Pagination';
import ActionSection from '@/components/Dashboard/ActionSection';
import DashboardLayout from '@/components/Dashboard/layout';
import LinkImagesSlider from '@/components/Dashboard/LinkImagesSlider';
import ShareSocials from '@/components/Dashboard/ShareSocials';
import ZenLink from '@/components/Dashboard/ZenLink';
import RootLayout from '@/components/layout/RootLayout';
import AppConfig from '@/constants/app.constant';
import { useActiveLink } from '@/hooks/link.hook';
import React, { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';

const dummyData = [
    {
        id: "item-1",
        url: "https://example.com/1",
        title: "Title 1",
        dateCreated: "28/02/2005",
        imageUrl: "https://picsum.photos/id/239/200/300",
        description: "Description for item 1",
        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "tag1" },
            { name: "life" },
            { name: "social media" },
        ],
    },
    {
        id: "item-2",
        url: "https://example.com/2",
        title: "Title 2",
        dateCreated: "29/02/2005",
        imageUrl: "https://picsum.photos/id/20/200/300",
        description: "Description for item 2",
        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "tag2" },
            { name: "nature" },
            { name: "outdoors" },
        ],
    },
    {
        id: "item-3",
        url: "https://example.com/3",
        title: "Title 3",
        dateCreated: "01/03/2005",
        imageUrl: "https://picsum.photos/id/50/200/300",
        description: "Description for item 3",
        colorTag: { color: "#0000ff", name: "Blue" },
        tags: [
            { name: "tag3" },
            { name: "technology" },
            { name: "gadgets" },
        ],
    },
    // Add more data items here...
    {
        key: 4,
        id: "item-4",
        url: "https://example.com/4",
        title: "Title 4",
        dateCreated: "02/03/2005",
        imageUrl: "https://picsum.photos/id/521/200/300",
        description: "Description for item 4",
        colorTag: { color: "#ffa500", name: "Orange" },
        tags: [
            { name: "tag4" },
            { name: "food" },
            { name: "recipes" },
        ],
    },
    {
        id: "item-5",
        descOpened: false,
        url: "https://example.com/5",
        title: "Title 5",
        dateCreated: "03/03/2005",
        imageUrl: "https://picsum.photos/id/233/200/300",
        description: "Description for item 5",
        colorTag: { color: "#800080", name: "Purple" },
        tags: [
            { name: "tag5" },
            { name: "travel" },
            { name: "adventure" },
        ],
    },
    {
        id: "item-6",
        url: "https://example.com/6",
        title: "Title 6",
        dateCreated: "04/03/2005",
        imageUrl: "https://picsum.photos/id/14/200/300",
        description: "Description for item 6",
        colorTag: { color: "#008000", name: "Green" },
        tags: [
            { name: "tag6" },
            { name: "fitness" },
            { name: "health" },
        ],
    },
    {
        id: "item-7",
        url: "https://example.com/7",
        title: "Title 7",
        dateCreated: "05/03/2005",
        imageUrl: "https://picsum.photos/id/87/200/300",
        description: "Description for item 7",
        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "tag7" },
            { name: "movies" },
            { name: "entertainment" },
        ],
    },
    {
        id: "item-8",
        url: "https://example.com/8",
        title: "Title 8",
        dateCreated: "06/03/2005",
        imageUrl: "https://picsum.photos/id/48/200/300",
        description: "Description for item 8",
        colorTag: { color: "#0000ff", name: "Blue" },
        tags: [
            { name: "tag8" },
            { name: "music" },
            { name: "arts" },
        ],
    },
    {
        id: "item-9",
        url: "https://example.com/9",
        title: "Title 9",
        dateCreated: "07/03/2005",
        imageUrl: "https://picsum.photos/id/341/200/300",
        description: "Description for item 9",
        colorTag: { color: "#ffa500", name: "Orange" },
        tags: [
            { name: "tag9" },
            { name: "fashion" },
            { name: "style" },
        ],
    },
    {
        id: "item-10",
        url: "https://example.com/10",
        title: "Title 10",
        dateCreated: "08/03/2005",
        imageUrl: "https://picsum.photos/id/79/200/300",
        description: "Description for item 10",
        colorTag: { color: "#800080", name: "Purple" },
        tags: [
            { name: "tag10" },
            { name: "books" },
            { name: "reading" },
        ],
    },
];



const UserDashBoard: React.FC = () => {
    const { activeLink, handleActiveLink } = useActiveLink("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [image, setImage] = useState<ImageState>({
        idx: -1,
        visible: false,
        title: ""
    });

    const images = dummyData.map((data) => ({ id: data.id, src: data.imageUrl, title: data.title }));

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
                        {
                            dummyData.map((data, idx) => (
                                <ZenLink
                                    key={data.id}
                                    idx={idx}
                                    descOpened={data.id === activeLink}
                                    setImage={setImage}
                                    handleDescChanged={handleActiveLink}
                                    {...data}
                                />
                            ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        pageCount={20}
                    />
                    <ShareSocials />
                </Container>
                <LinkImagesSlider images={images} image={image} setImage={setImage} />
            </DashboardLayout>
        </RootLayout>
    );
};

export default UserDashBoard;
