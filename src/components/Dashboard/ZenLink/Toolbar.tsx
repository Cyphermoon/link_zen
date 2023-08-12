import CustomDropdown from "@/components/common/CustomDropdown";
import DropdownMenuItem from "@/components/common/CustomDropdown/DropdownMenuItem";
import CustomToolbar from "@/components/common/CustomToolbar";
import CustomToolbarButton from "@/components/common/CustomToolbar/ToolBarItem";
import { ToolbarButton } from "@radix-ui/react-toolbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { renderDropdownMenuItems } from ".";
import ZenLinkDropdownOptions from "./menuOptions.constant";

interface Props {
    className?: string
    linkUrl?: string
}


const Toolbar = ({ linkUrl, className = "" }: Props) => {
    return (
        <CustomToolbar
            className={` hidden lg:flex items-center justify-center p-0 w-max bg-primary-600 shadow-lg opacity-0 group-hover:animate-in group-hover:slide-in-from-right-full group-hover:opacity-100 rounded-lg overflow-clip text-white relative ${className}`
            }>
            <CustomToolbarButton value='delete' Icon={RiDeleteBin6Line} />
            <CustomToolbarButton value='edit' Icon={RiEditBoxLine} />


            <CustomDropdown
                trigger={
                    <ToolbarButton
                        value='more options'
                        className='py-1 px-2 h-[28px] hover:bg-accent-200 hover:text-white text-md'
                    >
                        <BsThreeDotsVertical />
                    </ToolbarButton>
                }>
                {renderDropdownMenuItems(ZenLinkDropdownOptions, linkUrl)}
            </CustomDropdown>

        </CustomToolbar>
    )
}

export default Toolbar