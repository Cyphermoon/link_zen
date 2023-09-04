import React from 'react';
import { ViewTypes } from '@/components/common/ViewMode/type';
import Image from 'next/image';

interface Props {
    view: ViewTypes
    imageUrl: string;
    alt: string
}

const PreviewImage: React.FC<Props> = ({ view, imageUrl, alt }) => {
    return (
        <figure className={`preview-link-img overflow-clip relative group ${view === 'grid' ? 'rounded-lg mt-4 lg:mt-7 w-full h-40' : 'w-1/3 max-w-[144px] h-full'}`}>
            <Image
                src={imageUrl}
                unoptimized={imageUrl.startsWith('https://picsum.photos/')}
                alt={alt}
                fill={true}
                className="object-cover"
            />
        </figure>
    );
}

export default PreviewImage;
