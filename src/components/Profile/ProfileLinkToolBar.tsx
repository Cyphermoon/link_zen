import { RiDeleteBin6Line, RiEditBoxLine, RiShareLine } from "react-icons/ri"
import CustomToolbar from "../common/CustomToolbar"
import CustomToolbarButton from "../common/CustomToolbar/ToolBarItem"


const ProfileLinkToolBar = () => {
    return (
        <CustomToolbar className="hidden lg:flex items-center justify-center p-0 w-max bg-primary-200 absolute right-4 top-2 z-10 opacity-0 group-hover:animate-in group-hover:slide-in-from-right-0 group-hover:opacity-100">
            <CustomToolbarButton value='delete'>
                <RiDeleteBin6Line />
            </CustomToolbarButton>

            <CustomToolbarButton value='edit'>
                <RiEditBoxLine />
            </CustomToolbarButton>

            <CustomToolbarButton value='share'>
                <RiShareLine />
            </CustomToolbarButton>

        </CustomToolbar>
    )
}

export default ProfileLinkToolBar


