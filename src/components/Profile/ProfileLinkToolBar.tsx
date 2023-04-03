import { RiDeleteBin6Line, RiEditBoxLine, RiShareLine } from "react-icons/ri"
import CustomToolbar from "../common/CustomToolbar"
import ToolBarItem from "../common/CustomToolbar/ToolBarItem"


const ProfileLinkToolBar = () => {
    return (
        <CustomToolbar>
            <ToolBarItem value='delete'>
                <RiDeleteBin6Line />
            </ToolBarItem>

            <ToolBarItem value='edit'>
                <RiEditBoxLine />
            </ToolBarItem>

            <ToolBarItem value='share'>
                <RiShareLine />
            </ToolBarItem>

        </CustomToolbar>
    )
}

export default ProfileLinkToolBar


