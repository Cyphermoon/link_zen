import { FaCopy, FaEdit } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { HiViewfinderCircle } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import { handleCopy, handleDelete, handleEdit, handleShare, handleViewImage } from "./menuHandlers.util";


const ZenLinkDropdownOptions = [
  { title: "Edit", Icon: FaEdit, handler: handleEdit },
  { title: "Share", Icon: FiShare, handler: handleShare },
  { title: "Copy", Icon: FaCopy, handler: handleCopy },
  { title: "View Image", Icon: HiViewfinderCircle, handler: handleViewImage },
  { 
    title: "Delete", 
    Icon: RiDeleteBinLine, 
    isDanger: true, 
    confirmation: (linkName?: string) => ({
      title: "Delete Link",
      message: `Are you sure you want to delete ${linkName? `<b>${linkName}</b>` : "this link"} ?`,
    }),
    handler: handleDelete 
},
];

export default ZenLinkDropdownOptions;
