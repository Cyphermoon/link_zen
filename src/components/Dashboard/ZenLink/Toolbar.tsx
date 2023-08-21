import CustomDropdown from "@/components/common/CustomDropdown";
import DropdownMenuItem from "@/components/common/CustomDropdown/DropdownMenuItem";
import CustomToolbar from "@/components/common/CustomToolbar";
import CustomToolbarButton from "@/components/common/CustomToolbar/ToolBarItem";
import { useModalManager } from "@/components/modals/ModalContext";
import { deleteMessage, handleConfirmationOrAction } from "@/utils";
import { ToolbarButton } from "@radix-ui/react-toolbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiViewfinderCircle } from "react-icons/hi2";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import { renderDropdownMenuItems } from ".";
import { handleDelete } from "./menuHandlers.util";
import ZenLinkDropdownOptions from "./menuOptions.constant";

interface Props {
    className?: string
    linkUrl?: string
    viewImage: () => void
}


const Toolbar = ({ linkUrl, viewImage, className = "" }: Props) => {

    const { addModal } = useModalManager()

    function deleteLink() {
        handleConfirmationOrAction({
            ...deleteMessage(linkUrl),
            dialog: addModal
        }, handleDelete)
    }

    return (
        <CustomToolbar
            className={` hidden lg:flex items-center justify-center p-0 w-max bg-primary-600 shadow-lg opacity-0 group-hover:animate-in group-hover:slide-in-from-right-full group-hover:opacity-100 rounded-lg overflow-clip text-white relative ${className}`
            }>
            <CustomToolbarButton value='delete' Icon={RiDeleteBin6Line} handleClick={deleteLink} />
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
                <DropdownMenuItem Icon={HiViewfinderCircle} title='view image' handler={viewImage} />
                {renderDropdownMenuItems(ZenLinkDropdownOptions, linkUrl)}
            </CustomDropdown>

        </CustomToolbar>
    )
}

export default Toolbar