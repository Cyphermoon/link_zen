import { useWaitListContext } from "@/context/WaitlistProvider";

import React from "react";
import Btn from "../common/Button";
import {
  pfDisplay,
  poppins,
  urbanist,
  dmSans,
  roboto,
  nunito,
  opensans,
  lato,
  quicksand,
  worksans,
  spectral,
  karla,
  raleway,
  montserrat,
} from "font";

interface Props {
  className?: string;
  headerClassName?: string;
}

const HeroText = ({ className, headerClassName }: Props) => {
  const { openWaitList } = useWaitListContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openWaitList();
  };
  return (
    <div
      className={`flex flex-col text-center justify-center items-center ${className}`}
    >
      <h1
        className={`text-primary-900 font-extrabold lg:font-semibold lg:leading-10 mb-6
                ${headerClassName} ${raleway.className}`}
      >
        <span className="text-accent">All</span> about you,{" "}
        <span className="text-accent">one</span> click away
      </h1>
      <p className={`text-center ${montserrat.className} font-medium mb-3`}>
        Step into a new digital era. Get more eyes to see what you do and who
        you truly are. Achieve your biggest dream with linkzen!
      </p>

      <Btn
        className="bg-accent text-white text-md rounded-lg py-3 px-4 w-full lg:w-1/2 mb-6"
        handleClick={(e) => handleClick(e)}
      >
        Join the Waitlist
      </Btn>

      <img
        src="/images/hero_banner.png"
        alt="hero banner"
        className="md:hidden"
      />
    </div>
  );
};

export default HeroText;
