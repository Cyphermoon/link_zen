import { SORT_OPTIONS, VIEW_OPTIONS } from '@/constants/dropdownOptions.constant'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Container from '../common/Container'
import { SELECT_TRIGGER_CLASS } from '../common/Selector'
import SortSelector from '../common/Selector/SortSelector'
import ViewSelector from '../common/Selector/ViewSelector'

const ActionSection = () => {
    const [selectedSortId, setSelectedSortId] = useState(SORT_OPTIONS[0].id)
    const selectedSortOption = SORT_OPTIONS.find((option) => option.id === selectedSortId)

    const [selectedViewId, setSelectedViewId] = useState(VIEW_OPTIONS[0].id)
    const selectedViewOption = VIEW_OPTIONS.find((option) => option.id === selectedViewId)

    return (
        <div>
            <Container className='mb-5 mt-[80px] lg:mt-[85px] flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 justify-between'>
                <h1 className='text-3xl lg:text-4xl font-medium'>Coding Tools</h1>

                {/* Action Section */}
                <div className='flex gap-4'>
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