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
        className={`text-primary-900 font-medium lg:font-semibold leading-9 lg:leading-10 mb-6
                ${headerClassName}`}
      >
        <span className="underneath_line">LinkZen: </span> Your Ticket to a
        <span className="underneath_line mx-2">Organized</span> Digital Life
      </h1>

      <Btn
        label="Join the Waitlist"
        className="bg-accent text-white text-md rounded-lg w-1/2 py-3 px-4"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default HeroText