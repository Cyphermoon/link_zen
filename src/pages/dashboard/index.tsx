import Container from '@/components/common/Container';
import Pagination from '@/components/common/Pagination';
import ActionSection from '@/components/Dashboard/ActionSection';
import DashboardLayout from '@/components/Dashboard/layout';
import LinkImagesSlider from '@/components/Dashboard/LinkImagesSlider';
import { ImageState } from '@/components/Dashboard/type';
import ZenLinkList from '@/components/Dashboard/ZenLinkList';
import RootLayout from '@/components/layout/RootLayout';
import AppConfig from '@/constants/app.constant';
import { useActiveLink } from '@/hooks/link.hook';
import React, { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';

const dummyData = [
    {
        id: "item-1",
        url: "https://example.com/1",
        title: "Exploring the Outdoors",
        dateCreated: "28/02/2005",
        imageUrl: "https://picsum.photos/id/239/200/300",
        description: "Step into a world of exhilarating outdoor escapades where the wonders of nature unfold before your eyes. Our immersive articles transport you to rugged terrains, serene wilderness, and awe-inspiring landscapes waiting to be explored. Whether you're an avid hiker, a passionate camper, or simply seeking solace amidst nature's embrace, our guides offer insights into the best trails, camping hacks, and wildlife encounters. Discover the thrill of conquering mountain peaks, forging through dense forests, and gazing up at star-studded skies as you share unforgettable moments with fellow adventurers.",
        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "outdoors" },
            { name: "adventure" },
            { name: "nature" },
        ],
    },
    {
        id: "item-2",
        url: "https://example.com/2",
        title: "Home Cooking Delights",
        dateCreated: "29/02/2005",
        imageUrl: "https://picsum.photos/id/20/200/300",
        description: "Indulge your senses in the art of home cooking, where every dish becomes a masterpiece and every meal a celebration of flavors. Our culinary journey takes you on a gastronomic exploration of global cuisines, from the comfort of your own kitchen. Whether you're a seasoned chef or a novice in the culinary world, our extensive collection of recipes caters to all skill levels and tastes. Unearth the secrets of perfectly seared steaks, aromatic curries, and decadent desserts as you embark on a voyage of taste and creativity. With our step-by-step guides and expert tips, you'll elevate your cooking skills and savor the joy of crafting exceptional dishes for yourself and your loved ones.         vors. Our culinary journey takes you on a gastronomic exploration of global cuisines, from the comfort of your own kitchen. Whether you're a seasoned chef or a novice in the culinary world, our extensive collection of recipes caters to all skill levels and tastes. Unearth the secrets of perfectly seared steaks, aromatic curries, and decadent desserts as you embark on a voyage of taste and creativity. With our step-by-step guides and expert tips, you'll elevate your cooking skills and savor the joy of crafting exceptional dishes for yourself and your loved one",

        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "cooking" },
            { name: "food" },
            { name: "recipes" },
        ],
    },
    {
        id: "item-3",
        url: "https://example.com/3",
        title: "Tech Innovations",
        dateCreated: "01/03/2005",
        imageUrl: "https://picsum.photos/id/50/200/300",
        description: "Stay updated on the latest tech innovations and breakthroughs.",
        colorTag: { color: "#0000ff", name: "Blue" },
        tags: [
            { name: "technology" },
            { name: "innovation" },
            { name: "gadgets" },
        ],
    },
    // ... (existing items)
    {
        id: "item-7",
        url: "https://example.com/7",
        title: "Entertainment Picks",
        dateCreated: "05/03/2005",
        imageUrl: "https://picsum.photos/id/87/200/300",
        description: "Explore the world of movies, music, and entertainment.",
        colorTag: { color: "#ff0000", name: "Red" },
        tags: [
            { name: "movies" },
            { name: "music" },
            { name: "entertainment" },
        ],
    },
    {
        id: "item-8",
        url: "https://example.com/8",
        title: "Art and Culture",
        dateCreated: "06/03/2005",
        imageUrl: "https://picsum.photos/id/48/200/300",
        description: "Dive into the realm of art, music, and cultural exploration.",
        colorTag: { color: "#0000ff", name: "Blue" },
        tags: [
            { name: "art" },
            { name: "culture" },
            { name: "music" },
        ],
    },
    {
        id: "item-9",
        url: "https://example.com/9",
        title: "Fashion and Style Trends",
        dateCreated: "07/03/2005",
        imageUrl: "https://picsum.photos/id/341/200/300",
        description: "Discover the latest fashion trends and showcase your unique style.",
        colorTag: { color: "#ffa500", name: "Orange" },
        tags: [
            { name: "fashion" },
            { name: "style" },
            { name: "trends" },
        ],
    },
    {
        id: "item-10",
        url: "https://example.com/10",
        title: "Literary Escapes",
        dateCreated: "08/03/2005",
        imageUrl: "https://picsum.photos/id/79/200/300",
        description: "Immerse yourself in captivating books and literary journeys.",
        colorTag: { color: "#800080", name: "Purple" },
        tags: [
            { name: "books" },
            { name: "literature" },
            { name: "reading" },
        ],
    },

    {
        id: "item-11",
        url: "https://example.com/11",
        title: "New Tech Gadgets",
        dateCreated: "09/03/2005",
        imageUrl: "https://picsum.photos/id/112/200/300",
        description: "Discover the latest and coolest tech gadgets.",
        colorTag: { color: "#ffa500", name: "Orange" },
        tags: [
            { name: "tech" },
            { name: "gadgets" },
            { name: "electronics" },
        ],
    },
    {
        id: "item-12",
        url: "https://example.com/12",
        title: "Discovering Art and Culture",
        dateCreated: "12/03/2005",
        imageUrl: "https://picsum.photos/id/412/200/300",
        description: "Uncover the beauty of art and the richness of cultural heritage.",
        colorTag: { color: "#0000ff", name: "Blue" },
        tags: [
            { name: "art" },
            { name: "culture" },
            { name: "heritage" },
        ],
    },
    {
        id: "item-13",
        url: "https://example.com/13",
        title: "Capturing Moments Through Photography",
        dateCreated: "13/03/2005",
        imageUrl: "https://picsum.photos/id/513/200/300",
        description: "Explore the world of photography and learn to capture stunning moments.",
        colorTag: { color: "#ffa500", name: "Orange" },
        tags: [
            { name: "photography" },
            { name: "art" },
            { name: "creative" },
        ],
    },
    {
        id: "item-14",
        url: "https://example.com/14",
        title: "Mindful Living and Wellness",
        dateCreated: "14/03/2005",
        imageUrl: "https://picsum.photos/id/614/200/300",
        description: "Embrace mindfulness and wellness practices for a balanced and fulfilling life.",
        colorTag: { color: "#008000", name: "Green" },
        tags: [
            { name: "wellness" },
            { name: "mindfulness" },
            { name: "health" },
        ],
    },
    {
        id: "item-15",
        url: "https://example.com/15",
        title: "Exploring World Cuisine",
        dateCreated: "15/03/2005",
        imageUrl: "https://picsum.photos/id/715/200/300",
        description: "Embark on a culinary journey with diverse and delectable dishes from around the world.",
        colorTag: { color: "#800080", name: "Purple" },
        tags: [
            { name: "food" },
            { name: "cuisine" },
            { name: "travel" },
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
                    <ZenLinkList
                        zenLinks={dummyData}
                        setImage={setImage}
                        activeLink={activeLink}
                        handleDescChanged={handleActiveLink} />

                    <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        pageCount={20}
                    />
                </Container>
                <LinkImagesSlider images={images} image={image} setImage={setImage} />
            </DashboardLayout>
        </RootLayout>
    );
};

export default UserDashBoard;
