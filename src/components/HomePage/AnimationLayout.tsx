import React from "react";
import Container from "../common/Container";
import AnimationLink from "./AnimationLink";
import HeroText from "./HeroText";
import { sharedWaitlistProps } from "./SpiderLayout";

const AnimationLayout = ({ openModal }: sharedWaitlistProps) => {
  return (
    <div className="grow block mt-10">
      <Container className="relative h-full max-w-5xl text-center flex flex-col justify-center items-center px-2 space-y-12 ">
        <HeroText
          onModalOpen={openModal}
          headerClassName="text-4xl leading-tight"
        />
        <AnimationLink
          title="Twitter"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://twitter.com/moon_cypher"
          imageUrl="/asset/twitter-preview.svg"
          className=""
        />
      </Container>
    </div>
  );
};

export default AnimationLayout;
