import Container from '@/components/common/Container';
import Pagination from '@/components/common/Pagination';
import ActionSection from '@/components/Dashboard/ActionSection';
import DashboardLayout from '@/components/Dashboard/layout';
import ZenLink from '@/components/Dashboard/ZenLink';
import RootLayout from '@/components/layout/RootLayout';
import AppConfig from '@/constants/app.constant';
import { useActiveLink } from '@/hooks/link.hook';
import { downloadFile } from '@/utils';
import { errorToast } from '@/utils/toast';
import React, { useEffect, useState } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr';
import { MdDownload } from 'react-icons/md';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const UserDashBoard: React.FC = () => {
    const { activeLink, handleActiveLink } = useActiveLink(-1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [fullscreen, setFullScreen] = useState(false);
    const [image, setImage] = useState({
        idx: -1,
        visible: false,
        title: ""
    });

    const images = [
        "/images/og-image.png",
        "https://picsum.photos/300/300/?blur",
        "https://picsum.photos/seed/picsum/300/300",
        "https://picsum.photos/id/870/300/300?grayscale&blur=2"
    ];

    function toggleFullScreen() {
        if (fullscreen) {
            document.exitFullscreen && document.exitFullscreen()
        } else {
            let element = document.querySelector(".PhotoView-Portal")
            element && element.requestFullscreen()
        }
    }

    function handleDownload() {
        try {
            if (image.idx >= 0 && image.idx < images.length) {
                const url = images[image.idx]
                downloadFile(url, image.title)
            }
        } catch (error) {
            errorToast("An error occurred while downloading your file")
        }
    }

    useEffect(() => {
        const listener = () => setFullScreen(Boolean(document.fullscreenElement))

        document.addEventListener("fullscreenchange", listener)

        return () => document.removeEventListener("fullscreenchange", listener)

    }, [])


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
                            [...Array(20)].map((_, idx) => (
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
                                    setImage={setImage}
                                    handleDescChanged={handleActiveLink}
                                />
                            ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        pageCount={20}
                    />
                </Container>


                <PhotoSlider
                    images={images.map((item, idx) => ({ src: item, key: idx }))}
                    visible={image.visible}
                    onClose={() => setImage({ ...image, visible: false })}
                    index={image.idx}
                    onIndexChange={(idx) => setImage({ ...image, idx })}
                    overlayRender={(e) => {
                        return (
                            <div className='absolute left-0 bottom-0 p-2 w-full min-h-24 text-sm text-slate-300 z-50 bg-black/50'>
                                <h1 className='text-gray-200 text-center text-xl'>Placeholder Title</h1>
                            </div>
                        )
                    }}
                    toolbarRender={({ onScale, scale, rotate, onRotate }) => {
                        return (
                            <>
                                <span className='PhotoView-Slider__toolbarIcon'>
                                    <AiOutlineZoomIn onClick={() => onScale(scale + 1)} />
                                </span>

                                <span className='PhotoView-Slider__toolbarIcon'>
                                    <AiOutlineZoomOut onClick={() => onScale(scale - 1)} />
                                </span>

                                <span className='PhotoView-Slider__toolbarIcon'>
                                    <GrRotateRight onClick={() => onRotate(rotate + 90)} />
                                </span>
                                <span className='PhotoView-Slider__toolbarIcon'>
                                    <GrRotateLeft onClick={() => onRotate(rotate - 90)} />
                                </span>
                                <span className='PhotoView-Slider__toolbarIcon'>
                                    <MdDownload onClick={() => handleDownload()} />
                                </span>
                                {
                                    document.fullscreenEnabled &&
                                    <span className='PhotoView-Slider__toolbarIcon' onClick={toggleFullScreen}>
                                        {fullscreen ? <RxExitFullScreen /> : <RxEnterFullScreen />}
                                    </span>
                                }
                            </>
                        );
                    }}
                />




            </DashboardLayout>
        </RootLayout>
    );
};

export default UserDashBoard;
