import { useWaitListContext } from '@/context/WaitlistProvider';
import React from 'react';
import { Btn } from '../common/Button'


interface Props {
  className?: string;
  headerClassName?: string;
}

const HeroText = ({ className, headerClassName }: Props) => {

  const { openWaitList } = useWaitListContext()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openWaitList()
  };
  return (
    <div
      className={`flex flex-col text-center justify-center items-center ${className}`}
    >
      <h1
        className={`text-primary-900 font-medium lg:font-semibold lg:leading-10 mb-6
                ${headerClassName}`}
      >
        Organise and share your links with ease
      </h1>

      <Btn
        label="Join the Waitlist"
        className="bg-accent text-white text-md rounded-lg py-3 px-4 lg:w-1/2"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default HeroText