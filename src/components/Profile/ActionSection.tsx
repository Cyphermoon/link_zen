import { SORT_OPTIONS, VIEW_OPTIONS, } from '@/constants/dropdownOptions.constant';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../common/Container';
import SortSelector from '../common/Selector/SortSelector';
import ViewSelector from '../common/Selector/ViewSelector';

const ActionSection = () => {
    const [selectedSortId, setSelectedSortId] = useState(SORT_OPTIONS[0].id)
    const selectedSortOption = SORT_OPTIONS.find((option) => option.id === selectedSortId)

    const [selectedViewId, setSelectedViewId] = useState(VIEW_OPTIONS[0].id)
    const selectedViewOption = VIEW_OPTIONS.find((option) => option.id === selectedViewId)

    return (
        <section>
            <Container className='flex justify-between'>
                <Link
                    href="/profile/edit"
                    className='rounded-md px-4 py-2 text-lg capitalize bg-accent text-white hover:bg-white hover:text-accent hover:ring-2 hover:ring-accent transition-colors duration-200 ease-out'>
                    new
                </Link>
                <div className='flex gap-4'>
                    <SortSelector
                        id={selectedSortId}
                        handleChangeId={setSelectedSortId}
                        selectedOption={selectedSortOption}
                        options={SORT_OPTIONS}
                    />

                    <ViewSelector
                        id={selectedViewId}
                        handleChangeId={setSelectedViewId}
                        selectedOption={selectedViewOption}
                        options={VIEW_OPTIONS}
                    />
                </div>
            </Container>
        </section>
    )
}


export default ActionSection