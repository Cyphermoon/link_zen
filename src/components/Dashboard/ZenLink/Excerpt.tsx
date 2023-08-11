import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { truncateText } from "@/utils"; // Adjust the path to your utility function if needed

interface Props {
    id: number;
    description: string;
    descOpened: boolean;
    handleDescChanged: (id: number) => void;
}

const Excerpt = ({ id, description, descOpened, handleDescChanged }: Props) => {
    return (
        <div
            onClick={() => handleDescChanged(id)}
            className='bg-primary-200 rounded-lg py-3 px-2.5 flex items-center w-full cursor-pointer'
        >
            <p className='grow text-xs'>
                {truncateText(description, 35)}
            </p>
            <BsChevronUp className={`transition-transform text-xs duration-700 ${descOpened ? "-rotate-180" : "rotate-0"}`} />
        </div>
    );
};

export default Excerpt;
