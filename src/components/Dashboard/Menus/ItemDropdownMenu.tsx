import DropdownMenuItem from '@/components/common/CustomDropdown/DropdownMenuItem'
import { BiRename } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

interface Props {
    handleRename?: () => void
    handleDelete?: () => void
}

const ItemDropdownMenu = ({ handleRename, handleDelete }: Props) => {
    return (
        <>
            {handleRename && <DropdownMenuItem title="Rename" Icon={BiRename} onClick={handleRename} />}
            {handleDelete &&
                <DropdownMenuItem
                    isDanger
                    title="Delete"
                    onClick={handleDelete}
                    Icon={RiDeleteBinLine}
                />
            }
        </>
    )
}

export default ItemDropdownMenu