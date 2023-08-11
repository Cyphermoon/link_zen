import { ToolbarButton, ToolbarButtonProps } from "@radix-ui/react-toolbar";
import React from "react";
import { IconType } from "react-icons";

interface Props extends ToolbarButtonProps {
    value: string;
    Icon: IconType
    className?: string;
}

const CustomToolbarButton = ({ value, Icon, className, ...props }: Props) => {
    return (
        <ToolbarButton
            className={`py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md ${className}`}
            title={value}
            value={value}
            {...props}
        >
            {Icon && <Icon />}
        </ToolbarButton>
    );
};


export default CustomToolbarButton;
