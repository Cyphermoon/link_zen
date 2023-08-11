import { getUrlDomain } from '@/utils/link'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import LinkTag from '../common/LinkTag'

interface Props {
    className?: string
    imageUrl: string
    folderName: string
    url: string
    dateCreated: string
    title: string
}


const AnimationLayout = ({ className, imageUrl, folderName, url, dateCreated, title }: Props) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean | undefined>(undefined)
    const rootComp = useRef<HTMLDivElement>(null)
    const t1 = useRef<GSAPTimeline>()
    const dropDownRef = useRef<HTMLDivElement>(null)
    const chevronRef = useRef<HTMLDivElement>(null)


    const styleDropDown = useCallback((dropDownRef: RefObject<HTMLDivElement>, isDropDownOpen: boolean) => {
        if (isDropDownOpen === undefined) {
            return
        }
        else if (isDropDownOpen === true) {
            dropDownRef.current && (dropDownRef.current.style.height = "60px");
        }

        else if (isDropDownOpen === false) {
            dropDownRef.current && (dropDownRef.current.style.height = "0");
        }
    }, [])


    const styleChevron = useCallback((chevronRef: RefObject<HTMLDivElement>, isDropDownOpen: boolean) => {
        if (isDropDownOpen === undefined) {
            return
        }
        else if (isDropDownOpen === true) {
            chevronRef.current && (chevronRef.current.style.transform = "rotate(-180deg)");
        }

        else if (isDropDownOpen === false) {
            chevronRef.current && (chevronRef.current.style.transform = "rotate(0deg)");
        }
    }, [])


    useEffect(() => {
        const ctx = gsap.context(() => {
            t1.current = gsap.timeline({
                defaults: {
                    ease: "power3.inOut",
                    duration: 1.75
                }
            })
                .to('[data-animate="fade-in"]', {
                    scale: "1",
                    opacity: "1",
                    duration: 2,
                })
                .to('[data-animate="rotate-chevron"]', {
                    rotate: -180,
                }, "<50%")
                .to('[data-animate="dropdown"]', {
                    height: "60px",
                }, "<20%")
                .from('[data-animate="links-stagger"] > *', {
                    stagger: .5,
                    translateX: -40,
                    duration: 1.2,
                    opacity: 0,
                }, "<10%")
                .to('[data-animate="slide-in"]', {
                    left: 0,
                    opacity: 1,
                    onComplete() {
                        dropDownRef.current?.setAttribute("data-animate", "none")
                        chevronRef.current?.setAttribute("data-animate", "none")
                        setIsDropDownOpen(true)
                    }
                }, ">-50%")
        }, rootComp)
        return () => {
            ctx.revert()
        }
    }, [])


    useEffect(() => {
        if (isDropDownOpen === undefined) return

        styleDropDown(dropDownRef, isDropDownOpen)
        styleChevron(chevronRef, isDropDownOpen)
    }, [isDropDownOpen, styleDropDown, styleChevron])

    return (
        <div ref={rootComp}  >
            <div data-animate="fade-in" className={`border-2 border-gray-200  p-3 rounded-2xl bg-primary shadow-sm flex flex-col items-start space-y-6 opacity-40 scale-50 ${className} relative overflow-hidden`}>
                <span data-animate="slide-in" className='bg-orange-500 text-primary relative -left-80 opacity-0 text-xs px-1 lg:px-2 rounded-2xl lowercase'>
                    {folderName}
                </span>

                <figure className='preview-link-img relative'>
                    <Image src={imageUrl} width={237} height={123} alt="Preview Image" className='rounded-lg object-contain' />
                </figure>

                <div className='space-y-4 w-full'>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-md text-gray-600'>{title}</h5>
                        <div ref={chevronRef} data-animate="rotate-chevron"
                            className={`${(isDropDownOpen !== undefined) ? "transition-transform duration-300" : ""}`}
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                            <BsChevronDown />
                        </div>

                    </div>
                    <div
                        data-animate="dropdown"
                        ref={dropDownRef}
                        className={`overflow-hidden h-0 space-y-3  ${(isDropDownOpen !== undefined) ? "transition-height duration-300" : ""}`}>
                        <p className='text-sm text-primary-700 text-left'>
                            This is a twitter social media link
                        </p>
                        <div className={`flex overflow-hidden items-center space-x-2 `} data-animate="links-stagger">
                            <LinkTag title='twitter' className='opacity-full' />
                            <LinkTag title='life' className='opacity-full' />
                            <LinkTag title='social media' className='opacity-full' />
                        </div>
                    </div>
                </div>

                <div className='flex w-full justify-between items-center'>
                    <Link href={url} className='text-sm text-gray-700 underline'>
                        {getUrlDomain(url)}
                    </Link>
                    <span className='text-sm text-gray-700'>{dateCreated}</span>
                </div>
            </div >
        </div>

    )
}

export default AnimationLayout