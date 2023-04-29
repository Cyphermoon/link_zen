import Image from "next/image";
import Container from "../common/Container";
import HeroText from "./HeroText";
import PreviewLink from "./PreviewLink";


interface SpiderLegProps {
  className?: string;
  imageUrl: string;
  alt?: string;
}

const SpiderLeg = ({
  imageUrl,
  className = "",
  alt = "spider leg",
}: SpiderLegProps) => {
  return (
    <figure className={`${className} md:h-[322px]`}>
      <Image
        src={imageUrl}
        className={`filter-dark md:filter-light object-contain`}
        alt={alt}
        width={230}
        height={23}
      />
    </figure>
  );
};

const SpiderLayout = () => {
  return (
    <div className="grow hidden md:block md:px-3 lg:px-0 mt-4 lg:mt-8">
      <Container className="relative h-full max-w-5xl text-center flex flex-col justify-center items-center">
        <PreviewLink
          title="Twitter"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://twitter.com/moon_cypher"
          imageUrl="/asset/twitter-preview.svg"
          className="top-[8%] md:top-0 left-2 md:left-0"
        />
        <PreviewLink
          title="GitHub"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://github.com/Cyphermoon"
          imageUrl="/asset/github-preview.svg"
          className="top-[8%] md:top-0 right-2 md:right-0"
        />
        <PreviewLink
          title="Instagram"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://instagram.com/heisblaq_"
          imageUrl="/asset/Instagram-preview.svg"
          className="bottom-[8%] md:bottom-0 left-2 md:left-0"
        />
        <PreviewLink
          title="Linkedin"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://www.linkedin.com/in/oluwaseun-fashina-7b6b01232/"
          imageUrl="/asset/linkedin-preview.svg"
          className="bottom-[8%] md:bottom-0 right-2 md:right-0"
        />

        <div className="grid grid-cols-7 gap-4 max-w-4xl px-5 md:px-0">
          <SpiderLeg
            className="col-start-1 col-end-3"
            imageUrl="/asset/left-upper-leg.svg"
          />

          <HeroText
            className="col-start-3 col-end-6 row-start-1 row-end-3"
            headerClassName="text-2xl md:text-4xl w-[20ch]"
          />

          <SpiderLeg
            imageUrl="/asset/right-upper-leg.svg"
            className="col-start-6 col-end-8"
            alt="right leg"
          />

          <SpiderLeg
            imageUrl="/asset/left-bottom-leg.svg"
            className="col-start-1 col-end-3"
            alt="left lower leg"
          />

          <SpiderLeg
            imageUrl="/asset/right-bottom-leg.svg"
            className="col-start-6 col-end-8"
            alt="right lower leg"
          />
        </div>
      </Container>
    </div>
  );
};

export default SpiderLayout;
