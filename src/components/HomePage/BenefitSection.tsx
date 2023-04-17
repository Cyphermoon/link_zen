import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import DashBoardPreview from "../../images/dashboard_page_preview.png"
import { useTiltEffect } from '@/hooks/index.hook'

interface BenefitProps {
    title: string,
    description: string,
    imageUrl: string,
    alt?: string
    reverse?: boolean
    width?: number
    height?: number
}

const BenefitSection = () => {
    return (
        <section className='profile-gradient py-14'>
            <Container className='space-y-24 lg:space-y-40'>
                <Benefit
                    title='Put related links in a folder'
                    description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim rem deleniti dolores debitis voluptatum quam velit quas distinctio dolore?'
                    imageUrl='/images/dashboard_page_preview.png'
                    width={600}
                    height={400} />

                <Benefit
                    title='Build a profile page'
                    description=' Showcase essential links on your profile  and share with the entire world'
                    imageUrl='/images/profile_page_preview.png'
                    reverse={true}
                    width={486}
                    height={378} />
            </Container>
        </section>
    )
}

const Benefit = ({ title, description, imageUrl, reverse, alt = "Product preview", width = 600, height = 400 }: BenefitProps) => {

    const { tiltCard, removeTiltEffect } = useTiltEffect()

    return (
        <div className={`flex flex-col justify-between ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center space-y-8 lg:space-y-0 text-primary-800`}
            style={{ perspective: "800px" }}>
            <div className='space-y-4 w-full lg:w-5/12'>
                <h3 className='text-3xl'>{title}</h3>
                <p>{description}</p>
            </div>

            <figure onMouseMove={tiltCard} className={`grow flex justify-center ${reverse ? "lg:justify-start" : "lg:justify-end "}`}>
                <Image src={imageUrl} alt={alt} width={width} height={height} className='object-contain drop-shadow-2xl' />
            </figure>
        </div>
    )
}

export default BenefitSection