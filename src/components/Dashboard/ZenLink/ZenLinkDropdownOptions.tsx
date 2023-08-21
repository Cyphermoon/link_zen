import DropdownMenuItem from "@/components/common/CustomDropdown/DropdownMenuItem"
import { FaCopy } from "react-icons/fa"
import { FiShare } from "react-icons/fi"
import { HiViewfinderCircle } from "react-icons/hi2"
import { RiDeleteBinLine } from "react-icons/ri"

interface ZenLinkDropDownProps {
    viewImage: () => void,
    handleCopy: (text: string) => void
    deleteMessage: (url: string) => { title: string, message: string }
    url: string
}

const ZenLinkDropdownOptions = ({ viewImage, handleCopy, deleteMessage, url }: ZenLinkDropDownProps) => {

    return (
        <>
            <DropdownMenuItem Icon={HiViewfinderCircle} title='view image' handler={viewImage} />
            <DropdownMenuItem Icon={FaCopy} title='Copy' handler={() => handleCopy(url)} />
            <DropdownMenuItem Icon={FiShare} title='Share' />
            <DropdownMenuItem Icon={RiDeleteBinLine} title='Delete' isDanger confirmation={deleteMessage(url)} />
        </>
    )

}

export default ZenLinkDropdownOptions