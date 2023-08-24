import CustomDropdown from '@/components/common/CustomDropdown'
import { useModalManager } from '@/components/modals/ModalContext'
import { AddSocialShareModalArg } from '@/components/modals/type'
import { LINK_TITLE_LENGTH } from '@/constants/link.constant'
import { useCloseLinkOnClickOutside } from '@/hooks/link.hook'
import { deleteMessage, truncateText } from '@/utils'
import Image from 'next/image'
import { useRef } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import DropdownMenuItem from '../../common/CustomDropdown/DropdownMenuItem'
import Excerpt from './Excerpt'
import FullDescription from './FullDescription'
import { handleCopy } from './menuHandlers.util'
import Tags from './Tags'
import Toolbar from './Toolbar'
import { ZenLinkDropdownOptionProps } from './type'
import UrlDomain from './UrlDomain'
import ZenLinkDropdownOptions from './ZenLinkDropdownOptions'

interface Props {
    className?: string
    id: string
    imageUrl: string
    description: string
    url: string
    dateCreated: string
    title: string
    descOpened: boolean
    colorTag: { color: string, name: string }
    tags: { name: string }[]
    idx: number
    handleDescChanged: (id: string) => void
    setImage: React.Dispatch<React.SetStateAction<{ idx: number, visible: boolean, title: string }>>
}



const ZenLink = ({
    className, imageUrl, descOpened, description, id, handleDescChanged, url, dateCreated, title, idx, tags, colorTag, setImage
}: Props) => {
    const { addModal } = useModalManager()

    const linkRef = useRef<HTMLDivElement>(null)
    useCloseLinkOnClickOutside(descOpened, id, handleDescChanged, linkRef.current)

    function viewImage() {
        setImage({ idx: idx, visible: true, title })
    }

    function handleShare() {
        const modalObj: AddSocialShareModalArg = {
            type: "social-share",
            title,
            url,
            twitter: {
                hashtags: ["linkzen"],
                related: ["linkzen_", "moon_cypher"]
            }
        }
        addModal(modalObj)
    }

    return (
        <div
            ref={linkRef}
            className={`border-2 border-gray-200 p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start justify-between space-y-4 w-fit ${className} relative overflow-hidden group w-full lg:max-w-[280px] isolate`}
        >
            <div className='static lg:absolute top-3 right-3 flex items-center justify-end w-full z-10'>
                <Toolbar viewImage={viewImage} handleShare={handleShare} linkUrl={url} />

                {/* mobile Dropdown */}
                <CustomDropdown
                    trigger={
                        <button title='See options' className='text-primary-700 block lg:hidden'>
                            <BsThreeDotsVertical className='text-xl' />
                        </button>
                    }>
                    <ZenLinkDropdownOptions
                        viewImage={viewImage}
                        handleCopy={handleCopy}
                        handleShare={handleShare}
                        deleteMessage={deleteMessage}
                        url={url} />

                </CustomDropdown>
            </div>

            {/* image preview */}
            <figure className='preview-link-img w-full h-40 rounded-lg overflow-clip relative group mt-7'>
                <Image
                    src={imageUrl}
                    unoptimized={imageUrl.startsWith('https://picsum.photos/')}
                    alt="Preview Image"
                    fill={true}
                    className="object-cover" />
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


