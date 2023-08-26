import DropdownMenuItem from "@/components/common/CustomDropdown/DropdownMenuItem"
import { FaCopy } from "react-icons/fa"
import { FiShare } from "react-icons/fi"
import { HiViewfinderCircle } from "react-icons/hi2"
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri"

interface Props {
    viewImage: () => void,
    handleCopy: (text: string) => void
    handleDelete: () => void
    handleShare: () => void
    url: string
}

const ZenLinkDropdownOptions = ({ viewImage, handleCopy, handleDelete, handleShare, url }: Props) => {


    return (
        <>
            <DropdownMenuItem Icon={HiViewfinderCircle} title='view image' onClick={viewImage} />
            <DropdownMenuItem Icon={FaCopy} title='Copy' onClick={() => handleCopy(url)} />
            <DropdownMenuItem Icon={FiShare} title='Share' onClick={handleShare} />
            <DropdownMenuItem Icon={RiEditBoxLine} title='Edit' />
            <DropdownMenuItem Icon={RiDeleteBinLine} title='Delete' isDanger onClick={handleDelete} />
        </>
    )

}

export default ZenLinkDropdownOptions