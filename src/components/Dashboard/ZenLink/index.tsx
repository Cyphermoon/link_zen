import CustomDropdown from '@/components/common/CustomDropdown'
import { LINK_TITLE_LENGTH } from '@/constants/link.constant'
import { useCloseLinkOnClickOutside } from '@/hooks/link.hook'
import { truncateText } from '@/utils'
import Image from 'next/image'
import { useRef } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiViewfinderCircle } from 'react-icons/hi2'
import DropdownMenuItem from '../../common/CustomDropdown/DropdownMenuItem'
import Excerpt from './Excerpt'
import FullDescription from './FullDescription'
import ZenLinkDropdownOptions from './menuOptions.constant'
import Tags from './Tags'
import Toolbar from './Toolbar'
import UrlDomain from './UrlDomain'


interface Props {
    className?: string
    id: number
    imageUrl: string
    description: string
    url: string
    dateCreated: string
    title: string
    descOpened: boolean
    colorTag: { color: string, name: string }
    tags: { name: string }[]
    handleDescChanged: (id: number) => void
    setImage: React.Dispatch<React.SetStateAction<{ idx: number, visible: boolean, title: string }>>
}


const ZenLink = ({ className, imageUrl, descOpened, description, id, handleDescChanged, url, dateCreated, title, tags, colorTag, setImage }: Props) => {

    const linkRef = useRef<HTMLDivElement>(null)
    useCloseLinkOnClickOutside(descOpened, id, handleDescChanged, linkRef.current)

    function viewImage() {
        setImage({ idx: 0, visible: true, title })
    }


    return (
        <div
            ref={linkRef}
            className={`
            border-2 border-gray-200 p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-4 w-fit ${className} relative overflow-hidden group w-full lg:max-w-[280px] isolate
            `}
        >
            <div className='static lg:absolute top-3 right-3 flex items-center justify-end w-full z-10'>
                <Toolbar viewImage={viewImage} linkUrl={url} />

                {/* mobile Dropdown */}
                <CustomDropdown
                    trigger={
                        <button title='See options' className='text-primary-700 block lg:hidden'>
                            <BsThreeDotsVertical className='text-xl' />
                        </button>
                    }>
                    <DropdownMenuItem Icon={HiViewfinderCircle} title='view image' handler={viewImage} />
                    {renderDropdownMenuItems(ZenLinkDropdownOptions, url)}
                </CustomDropdown>
            </div>

            {/* image preview */}
            <figure className='preview-link-img w-full h-40 rounded-lg overflow-clip relative group mt-7'>
                <Image src={imageUrl} alt="Preview Image" fill={true} className="object-cover" />
            </figure>

            {/* Title Section */}
            <h5 className='text-[17px] text-gray-800 font-normal'>
                {truncateText(title, LINK_TITLE_LENGTH)}
            </h5>

            <Excerpt id={id} description={description} descOpened={descOpened} handleDescChanged={handleDescChanged} />

            <Tags colorTag={colorTag} regularTags={tags} />

            {/* Meta Data */}
            <div className='flex w-full justify-between items-center'>
                <UrlDomain url={url} />
                <span className='text-gray-700 text-xs'>{dateCreated}</span>
            </div>

            <FullDescription id={id} description={description} descOpened={descOpened} handleDescChanged={handleDescChanged} url={url} />
        </div >
    )
}

export default ZenLink


export function renderDropdownMenuItems(options: ZenLinkDropdownOptionProps[], linkName?: string) {
    return options.map((option, index) => {
        const confirmation = option.confirmation?.(linkName);
        return (
            <DropdownMenuItem
                key={index}
                {...option}
                confirmation={confirmation}
            />
        );
    });
}


