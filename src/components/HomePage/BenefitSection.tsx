import { useTiltEffect } from '@/hooks/index.hook'
import Image from 'next/image'
import Container from '../common/Container'

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
    <section className="profile-gradient py-14 mt-[0]">
      <Container className="space-y-24 lg:space-y-40">
        <Benefit
          title="Efficient link management"
          description=" Say goodbye to cluttered bookmarks and disorganized tabs, and hello to a streamlined and efficient approach to link management. In addition to storing and organizing links, our user-friendly dashboard also allows you to organize your related links into folders for quick and easy access."
          imageUrl="/images/dashboard_page_preview.png"
          width={600}
          height={400}
        />

        <Benefit
          title="Showcase your digital world"
          description="Your digital world is an extension of who you are, and with LinkZen's Profile Pages, you can create a stunning digital representation of yourself. Showcase your digital world with a personalized profile page that captures your personality, highlights and your favorite resources. LinkZen also provide you with a unique url that you can share to your other social media platforms. So why wait? Start building your unique online identity today with LinkZen's Profile Pages."
          imageUrl="/images/profile_page_preview.png"
          reverse={true}
          width={486}
          height={378}
        />
      </Container>
    </section>
  );
};

const Benefit = ({
  title,
  description,
  imageUrl,
  reverse,
  alt = "Product preview",
  width = 600,
  height = 400,
}: BenefitProps) => {
  const { tiltCard, removeTiltEffect } = useTiltEffect();

  return (
    <div
      className={`flex flex-col justify-between ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center space-y-8 lg:space-y-0 text-primary-800`}
      style={{ perspective: "800px" }}
    >
      <div className="space-y-4 w-full md:text-center lg:text-left lg:w-5/12">
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
      </div>

      <figure
        onMouseMove={tiltCard}
        onMouseOut={removeTiltEffect}
        className={`grow flex justify-center ${reverse ? "lg:justify-start" : "lg:justify-end "
          }`}
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          className="object-contain drop-shadow-xl md:drop-shadow-2xl"
        />
      </figure>
    </div>
  );
};

export default BenefitSection;
