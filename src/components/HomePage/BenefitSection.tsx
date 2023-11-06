import { useTiltEffect } from "@/hooks/index.hook";
import Image from "next/image";
import Container from "../common/Container";
import { urbanist, pfDisplay, raleway } from "font";

interface BenefitProps {
  title: string;
  description: string;
  imageUrl: string;
  alt?: string;
  reverse?: boolean;
  width?: number;
  height?: number;
  smallText?: string;
}

const benefits: BenefitProps[] = [
  {
    title: "Manage your contents effortlessly",
    description:
      "Store, manage and share your links, files and audio contents with ease. Linkzen becomes your central hub for all your digital contents",
    imageUrl: "/images/dashboard_page_preview.png",
    width: 700,
    height: 400,
    smallText: "manage 🛠️",
  },
  {
    title: "Craft your unique online identity",
    description:
      "Shape your online identity with custiomizable personalized profiles. Share across your social media accounts and showcase your digital contents with tailor-made pages that reflects your unique personality and style",
    imageUrl: "/images/dashboard_page_preview.png",
    width: 700,
    height: 400,
    smallText: "customize ✨",
    reverse: true,
  },
  {
    title: "Monetize your content with ease",
    description:
      "Monetize your content by setting prices for premium access and turn your linkzen into a revenue-generating platform",
    imageUrl: "/images/dashboard_page_preview.png",
    width: 700,
    height: 400,
    smallText: "earn 💰",
  },

  {
    title: "Discover content that suits you",
    description:
      "Explore a world of resources within the LinkZen community. Discover new content, get inspired, and connect with like minded users.",
    imageUrl: "/images/dashboard_page_preview.png",
    width: 700,
    height: 400,
    reverse: true,
    smallText: "explore 🌍",
  },
];

const BenefitSection = () => {
  return (
    <section className="bg-profile-gradient py-14">
      <Container className="space-y-24 lg:space-y-40">
        {benefits.map(
          (
            { title, description, imageUrl, width, height, smallText, reverse },
            idx
          ) => {
            return (
              <Benefit
                key={idx}
                title={title}
                description={description}
                imageUrl={imageUrl}
                width={width}
                height={height}
                smallText={smallText}
                reverse={reverse}
              />
            );
          }
        )}

        {/* <Benefit
          title="Efficient link "
          description="Linkzen provides you with an easy way to store and organize your links. With our user-friendly dashboard you can also create folders to group related links and find what you need faster."
          imageUrl="/images/dashboard_page_preview.png"
          width={600}
          height={400}
        />

        <Benefit
          title="Personalized profile page"
          description="LinkZen gives you a personalized profile page that showcases all your public links in one place. You can share it with anyone, anywhere!"
          imageUrl="/images/profile_page_preview.png"
          reverse={true}
          width={486}
          height={378}
        /> */}
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
  smallText,
}: BenefitProps) => {
  const { tiltCard, removeTiltEffect } = useTiltEffect();

  return (
    <div
      className={`flex flex-col justify-between ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center space-y-8 lg:space-y-0 text-primary-800`}
      style={{ perspective: "800px" }}
    >
      <div className="space-y-4 w-full md:text-center lg:text-left lg:w-5/12">
        <span
          className={`text-xl md:text-2xl font-semibold text-gray-400 ${urbanist.className}`}
        >
          {smallText}
        </span>
        <h3 className={`text-4xl ${pfDisplay.className}`}>{title}</h3>
        <p
          className={`text-xl md:text-2xl text-gray-500 font-medium ${raleway.className}`}
        >
          {description}
        </p>
      </div>

      <figure
        onMouseMove={tiltCard}
        onMouseOut={removeTiltEffect}
        className={`grow flex justify-center ${
          reverse ? "lg:justify-start" : "lg:justify-end "
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
