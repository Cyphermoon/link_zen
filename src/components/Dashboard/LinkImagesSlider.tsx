import React, { useState, useEffect } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { GrRotateLeft, GrRotateRight } from 'react-icons/gr';
import { MdDownload } from 'react-icons/md';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { downloadFile, toggleFullScreen } from '@/utils';
import { errorToast } from '@/utils/toast';

type ImageType = {
    id: string
    src: string
    title: string
}

interface LinkImagesSliderProps {
    images: ImageType[];
    image: ImageState
    setImage: (image: ImageState) => void
}

const LinkImagesSlider: React.FC<LinkImagesSliderProps> = ({ images, image, setImage }) => {
    const [fullscreen, setFullScreen] = useState(false);

    function handleFullScreen() {
        let element = document.querySelector(".PhotoView-Portal");
        toggleFullScreen(element, fullscreen);
    }

    function handleDownload() {
        try {
            if (image.idx >= 0 && image.idx < images.length) {
                const url = images[image.idx].src;
                downloadFile(url, image.title);
            }
        } catch (error) {
            errorToast("An error occurred while downloading your file");
        }
    }

    useEffect(() => {
        const listener = () => setFullScreen(Boolean(document.fullscreenElement));

        document.addEventListener("fullscreenchange", listener);

        return () => document.removeEventListener("fullscreenchange", listener);
    }, []);

    return (
        <PhotoSlider
            images={images.map((item) => ({ src: item.src, key: item.id }))}
            visible={image.visible}
            onClose={() => setImage({ ...image, visible: false })}
            index={image.idx}
            onIndexChange={(idx) => {
                const title = images[idx]?.title
                setImage({ ...image, idx, title });
            }}
            overlayRender={(e) => {
                return (
                    <div className='absolute left-0 bottom-0 p-2 w-full min-h-24 text-sm text-slate-300 z-50 bg-black/50'>
                        <h1 className='text-gray-200 text-center text-xl'>{image.title}</h1>
                    </div>
                );
            }}
            toolbarRender={({ onScale, scale, rotate, onRotate }) => {
                return (
                    <>
                        <span className='PhotoView-Slider__toolbarIcon' onClick={() => onScale(scale + 1)}>
                            <AiOutlineZoomIn />
                        </span>

                        <span className='PhotoView-Slider__toolbarIcon' onClick={() => onScale(scale - 1)}>
                            <AiOutlineZoomOut />
                        </span>

                        <span className='PhotoView-Slider__toolbarIcon' onClick={() => onRotate(rotate + 90)}>
                            <GrRotateRight />
                        </span>

                        <span className='PhotoView-Slider__toolbarIcon' onClick={() => onRotate(rotate - 90)}>
                            <GrRotateLeft />
                        </span>

                        <span className='PhotoView-Slider__toolbarIcon' onClick={handleDownload}>
                            <MdDownload />
                        </span>

                        {document.fullscreenEnabled && (
                            <span className='PhotoView-Slider__toolbarIcon' onClick={handleFullScreen}>
                                {fullscreen ? <RxExitFullScreen /> : <RxEnterFullScreen />}
                            </span>
                        )}
                    </>
                );
            }}
        />
    );
};

export default LinkImagesSlider;
