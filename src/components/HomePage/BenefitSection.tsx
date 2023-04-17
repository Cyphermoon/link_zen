import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'

interface BenefitProps {
    title: string,
    description: string,
    imageUrl: string,
    alt?: string
    reverse?: boolean
}

const BenefitSection = () => {
    return (
        <section className='profile-gradient py-10'>
            <Container>
                <Benefit
                    title='Organise you links in folder'
                    description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim rem deleniti dolores debitis voluptatum quam velit quas distinctio dolore?'
                    imageUrl='/images/i' />

                <Benefit
                    title='Organise you links in folder'
                    description=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim rem deleniti dolores debitis voluptatum quam velit quas distinctio dolore?'
                    imageUrl='/images/i'
                    reverse={true} />
            </Container>
        </section>
    )
}

const Benefit = ({ title, description, imageUrl, reverse, alt = "Product preview" }: BenefitProps) => {
    return (
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center text-center lg:text-left space-y-8 lg:space-y-0`}>
            <div className='space-y-4'>
                <h3 className='text-3xl'>{title}</h3>
                <p>{description}</p>
            </div>

            <figure>
                <Image src={imageUrl} alt={alt} width={419} height={500} />
            </figure>
        </div>
    )
}

export default BenefitSection