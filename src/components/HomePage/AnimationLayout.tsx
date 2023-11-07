import React from "react";
import Container from "../common/Container";
import AnimationLink from "./AnimationLink";
import HeroText from "./HeroText";

const AnimationLayout = () => {
  return (
    <div className="block mt-14">
      <Container className="max-w-5xl text-center flex flex-col items-center px-2 space-y-12 ">
        <HeroText headerClassName="text-7xl leading-tight" />
        {/* text-[2rem] min-[510px]:text-[2.8rem] leading-tight sm:leading-none text-7xl */}
        {/* mobile hero animation */}
        {/* <AnimationLink
          title="Twitter"
          folderName="social media"
          dateCreated="22/03/23"
          url="https://twitter.com/moon_cypher"
          imageUrl="/asset/twitter-preview.svg"
          className=""
        /> */}
      </Container>
    </div>
  );
};

export default AnimationLayout;
