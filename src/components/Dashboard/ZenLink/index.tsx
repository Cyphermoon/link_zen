import CustomDropdown from '@/components/common/CustomDropdown'
import { ViewTypes } from '@/components/common/ViewMode/type'
import { useModalManager } from '@/components/modals/ModalContext'
import { AddSocialShareModalArg } from '@/components/modals/type'
import { LINK_TITLE_LENGTH } from '@/constants/link.constant'
import { useCloseLinkOnClickOutside } from '@/hooks/link.hook'
import { deleteMessage, handleConfirmationOrAction, truncateText } from '@/utils'
import clsx from 'clsx'
import Image from 'next/image'
import { forwardRef, Ref, useRef } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useWindowSize } from 'usehooks-ts'
import { ImageState } from '../type'
import Excerpt from './Excerpt'
import FullDescription from './FullDescription'
import { handleCopy } from './menuHandlers.util'
import PreviewImage from './PreviewImage'
import Tags from './Tags'
import Toolbar from './Toolbar'
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
    setImage: (imageState: ImageState) => void
    view: ViewTypes
}


const ZenLink = ({
    className = "", imageUrl, descOpened, description, id, handleDescChanged, url, dateCreated, title, idx, tags, colorTag, setImage, view
}: Props) => {
    const { addModal } = useModalManager()
    const linkRef = useRef<HTMLDivElement>(null)
    const { width } = useWindowSize();


    useCloseLinkOnClickOutside(descOpened, id, handleDescChanged, linkRef.current)

    function handleDelete() {
        const confirmation = deleteMessage(url)

        const deleteLink = () => 1

        handleConfirmationOrAction({
            ...confirmation,
            dialog: addModal
        }, deleteLink)
    }

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

    function getDescriptionLength() {
        let descLength = 35

        if (width > 1024 && view === "list") {
            descLength = 135
        }

        else if (width < 640 && view === "list") {
            descLength = 30
        }

        return descLength
    }

    const containerClassName = clsx(
        "rounded-2xl overflow-hidden bg-primary w-full group relative",
        {
            "border-2 border-gray-200 p-3 lg:pt-0  shadow-sm lg:max-w-[280px] isolate": view === "grid",
            "h-[200px] lg:h-[200px]": view === "list"
        }
    )

    const linkInfoClassName = clsx(
        "flex",
        {
            "flex-col items-start justify-between space-y-4 ": view === "grid",
            "flex-row h-full items-center": view === "list",
        }
    )

    return (
        <div
            ref={linkRef}
            className={`${containerClassName} ${className}`}
        >
            {/* Toolbar */}
            <div className='static lg:absolute top-3 right-3 flex items-center justify-end w-full z-10'>
                <Toolbar handleDelete={handleDelete} viewImage={viewImage} handleShare={handleShare} linkUrl={url} />

                {/* mobile Dropdown */}
                {
                    view === "grid" &&
                    <CustomDropdown
                        trigger={
                            <button
                                title='See options'
                                className='text-primary-700 block lg:hidden'>
                                <BsThreeDotsVertical className='text-xl' />
                            </button>
                        }>
                        <ZenLinkDropdownOptions
                            viewImage={viewImage}
                            handleCopy={handleCopy}
                            handleShare={handleShare}
                            handleDelete={handleDelete}
                            url={url} />

                    </CustomDropdown>
                }
            </div>

            <div className={linkInfoClassName} >
                <PreviewImage imageUrl={imageUrl} view={view} alt={`${title} preview image`} />

                <div className={`space-y-4 lg:grow ${view === "list" ? "static lg:relative py-3 px-2 lg:px-4 w-2/3 lg:w-auto flex flex-col justify-between h-full" : "w-full"} `}>
                    {/* Title Section */}
                    <div className='flex justify-between'>
                        <h5 className={`text-gray-800 font-normal ${view === "list" ? "text-[16px]" : "text-[17px]"}`}>
                            {truncateText(title, LINK_TITLE_LENGTH)}
                        </h5>

                        {
                            view == "list" &&
                            <CustomDropdown
                                trigger={
                                    <button
                                        title='See options'
                                        className='text-primary-700 block lg:hidden'>
                                        <BsThreeDotsVertical className='text-xl' />
                                    </button>
                                }>
                                <ZenLinkDropdownOptions
                                    viewImage={viewImage}
                                    handleCopy={handleCopy}
                                    handleShare={handleShare}
                                    handleDelete={handleDelete}
                                    url={url} />

                            </CustomDropdown>
                        }
                    </div>

                    <Excerpt
                        id={id}
                        description={description}
                        descOpened={descOpened}
                        handleDescChanged={handleDescChanged}
                        descLength={getDescriptionLength()} />

                    <Tags colorTag={colorTag} regularTags={tags} />

                    {/* Meta Data */}
                    <div className='flex w-full justify-between items-center'>
                        <UrlDomain url={url} />
                        <span className='text-gray-700 text-xs'>{dateCreated}</span>
                    </div>

                    <FullDescription
                        id={id}
                        description={description}
                        descOpened={descOpened}
                        handleDescChanged={handleDescChanged}
                        url={url} />
                </div>
            </ div>
        </div >
    )
}

export default ZenLink


const MobileDropdownTrigger = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
    return (
        <button
            ref={ref}
            title='See options'
            className='text-primary-700 block lg:hidden'>
            <BsThreeDotsVertical className='text-xl' />
        </button>
    )
})

MobileDropdownTrigger.displayName = "MobileDropdownTrigger"



