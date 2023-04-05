import React from 'react'
import Button from '../common/Button'


interface Props {
  className?: string;
  headerClassName?: string;
  onModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroText = ({ className, headerClassName, onModalOpen }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onModalOpen(true);
  };
  return (
    <div
      className={`flex flex-col text-center justify-center items-center ${className}`}
    >
      <h1
        className={`text-primary-900 font-medium lg:font-semibold leading-9 lg:leading-10 mb-6
                ${headerClassName}`}
      >
        <span className="underneath_line">Organise</span> and Share Your
        <span className="underneath_line mx-2">Links</span> Nicely
      </h1>

      <button
        type="button"
        onClick={(e) => handleClick(e)}
        className="bg-accent text-white text-md rounded-lg w-1/2 py-3 px-4"
      >
        Join the Waitlist
      </button>
    </div>
  );
};

export default HeroText