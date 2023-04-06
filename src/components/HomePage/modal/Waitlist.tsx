import Overlay from "@/components/common/Overlay";
import React, { useState } from "react";
import { waitlist } from "./type";

const WaitListModal = ({ modalOpened, closeModal }: waitlist) => {
  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  
  return (
    <Overlay
      handleClick={closeModal}
       className={modalOpened === false ? "animate-moveOut" : modalOpened === undefined ? "hidden" : ""}
    >
      <div
        className={`${
          modalOpened && "animate-in slide-in-from-right-full duration-500"} darker-gradient mx-3  z-50 px-3 md:px-16 py-6 absolute rounded-xl`}
        onClick={(e) => handlePropagation(e)}
      >
        <h4 className="text-center text-md font-semibold my-6">
          Join Our Waitlist and Get Notified When Our Site is Ready!
        </h4>
        <form>
          <div className=" w-full text-left py-4 my-3">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              required
              className="outline-none w-full p-3 mt-3 text-md rounded-xl"
              placeholder="Enter your full name"
            />
          </div>
          <div className="text-left my-3">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              required
              className="w-full p-3 mt-3 rounded-xl outline-none"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="button"
            className="bg-accent text-white text-md rounded-lg w-full p-4 my-10"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </Overlay>
  );
};

export default WaitListModal;
