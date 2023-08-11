import LinkTag from "@/components/common/LinkTag";
import React from "react";
import LinkColorTag from "./LinkColorTag"; // Adjust the import path as needed


interface ColorTag {
    color: string;
    name: string;
}

interface RegularTag {
    name: string;
}

interface Props {
    colorTag?: ColorTag;
    regularTags: RegularTag[];
}

const Tags = ({ colorTag, regularTags }: Props) => {
    return (
        <div className='flex w-full items-center space-x-2 overflow-x-scroll hide-scrollbar'>
            {colorTag && <LinkColorTag color={colorTag.color} name={colorTag.name} />}
            {regularTags.map((tag, index) => (
                <LinkTag key={index} title={tag.name} />
            ))}
        </div>
    );
};

export default Tags;
