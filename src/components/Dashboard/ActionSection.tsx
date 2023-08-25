import { SORT_OPTIONS, VIEW_OPTIONS } from '@/constants/dropdownOptions.constant'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import Container from '../common/Container'
import { SELECT_TRIGGER_CLASS } from '../common/Selector'
import SortSelector from '../common/Selector/SortSelector'
import ViewSelector from '../common/Selector/ViewSelector'
import { useModalManager } from '../modals/ModalContext'

const ActionSection = () => {
    const [selectedSortId, setSelectedSortId] = useState(SORT_OPTIONS[0].id)
    const selectedSortOption = SORT_OPTIONS.find((option) => option.id === selectedSortId)

    const [selectedViewId, setSelectedViewId] = useState(VIEW_OPTIONS[0].id)
    const selectedViewOption = VIEW_OPTIONS.find((option) => option.id === selectedViewId)

    const { addModal } = useModalManager()

    function handleFolderRename(folderName: string) {
        addModal({
            type: "field-editor",
            formTitle: "Rename Folder",
            initialValue: folderName,
            fieldId: "renamedFolder",
            labelName: "Folder Name",
            name: "renameFolder",
            placeholder: `Enter name you want to rename "${folderName}" to`,
        })
    }

    return (
        <div>
            <Container className='mb-5 mt-[90px] lg:mt-[85px] flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 justify-between'>

                <div
                    className='relative group cursor-pointer flex items-baseline lg:items-center space-x-1.5'
                    onClick={() => handleFolderRename("Topics to read")}
                >
                    <h1 className='text-3xl lg:text-4xl font-medium'>Topics to Read</h1>
                    <button className='relative text-xl text-gray-400 lg:text-4xl lg:text-gray-500 lg:bottom-1 lg:transition-opacity lg:duration-300 lg:opacity-0 lg:group-hover:opacity-100'>
                        <MdEdit />
                    </button>
                </div>

                {/* Action Section */}
                <div className='flex space-x-4'>
                    <SortSelector
                        content={{
                            position: "popper"
                        }}
                        id={selectedSortId}
                        handleChangeId={setSelectedSortId}
                        selectedOption={selectedSortOption}
                        options={SORT_OPTIONS}
                    />

                    <ViewSelector
                        content={{
                            position: "popper"
                        }}
                        id={selectedViewId}
                        handleChangeId={setSelectedViewId}
                        selectedOption={selectedViewOption}
                        options={VIEW_OPTIONS}
                    />
                    <button className={`${SELECT_TRIGGER_CLASS} bg-accent-50 rounded-lg`} title="Add New Link" >
                        <FaPlus />
                        <span>New</span>
                    </button>
                </div>
            </Container>
            <hr className='mb-8 border-gray-100 border-[.1px] lg:hidden' />
        </div>

    )
}

export default ActionSection