import React from "react";
import { RxCross1 } from "react-icons/rx";
import UrlDomain from "./UrlDomain"; // Make sure to adjust the import path based on your project

interface Props {
    id: number;
    description: string;
    descOpened: boolean;
    handleDescChanged: (id: number) => void;
    url: string;
}

const FullDescription = ({ id, description, descOpened, handleDescChanged, url }: Props) => {
    return (
        <div className={`text-primary-800 bg-primary z-10 text-sm flex flex-col justify-between items-center transition-transform duration-500 origin-top px-3 ${descOpened ? "translate-y-0 overflow-scroll" : "translate-y-full overflow-hidden"} hide-scrollbar absolute inset-0 !m-0`}>
            <div className='sticky w-full top-0 bg-primary py-2 px-3'>
                <RxCross1
                    onClick={() => handleDescChanged(id)}
                    className="self-center text-xl text-red-600 font-bold cursor-pointer mx-auto transition-transform hover:scale-105" />
            </div>
            <p className={`text-left text-sm transition-opacity duration-200 ${descOpened ? "opacity-100" : "opacity-0"}`}>
                {description}
            </p>
            <div className="sticky w-full bottom-0 flex items-center justify-center bg-primary py-2 px-3">
                <UrlDomain url={url} className="text-center" />
            </div>
        </div>
    );
};

export default FullDescription;
