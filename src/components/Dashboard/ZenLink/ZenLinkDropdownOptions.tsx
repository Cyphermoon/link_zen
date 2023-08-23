import DropdownMenuItem from "@/components/common/CustomDropdown/DropdownMenuItem"
import { FaCopy } from "react-icons/fa"
import { FiShare } from "react-icons/fi"
import { HiViewfinderCircle } from "react-icons/hi2"
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri"

interface Props {
    viewImage: () => void,
    handleCopy: (text: string) => void
    deleteMessage: (url: string) => { title: string, message: string }
    handleShare: () => void
    url: string
}

const ZenLinkDropdownOptions = ({ viewImage, handleCopy, deleteMessage, handleShare, url }: Props) => {


    return (
        <>
            <DropdownMenuItem Icon={HiViewfinderCircle} title='view image' handler={viewImage} />
            <DropdownMenuItem Icon={FaCopy} title='Copy' handler={() => handleCopy(url)} />
            <DropdownMenuItem Icon={FiShare} title='Share' handler={handleShare} />
            <DropdownMenuItem Icon={RiEditBoxLine} title='Edit' />
            <DropdownMenuItem Icon={RiDeleteBinLine} title='Delete' isDanger confirmation={deleteMessage(url)} />
        </>
    )

}

export default ZenLinkDropdownOptions