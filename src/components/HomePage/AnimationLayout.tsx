import React from 'react'
import Container from '../common/Container'
import AnimationLink from './AnimationLink'
import HeroText from './HeroText'

const AnimationLayout = () => {
  return (
    <div className="block mt-14">
      <Container className="max-w-5xl text-center flex flex-col items-center px-2 space-y-12 ">
        <HeroText headerClassName="text-[2rem] min-[510px]:text-[2.8rem] leading-tight sm:leading-none sm:text-6xl " />
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
