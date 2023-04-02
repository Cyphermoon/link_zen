import * as Select from '@radix-ui/react-select';
import { forwardRef, useState } from 'react';
import { FaList, FaRegClock } from 'react-icons/fa';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';
import { RiDragMove2Fill } from 'react-icons/ri';
import { TbArrowNarrowDown, TbArrowNarrowUp } from 'react-icons/tb';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import Container from '../common/Container';
import { BsFillGridFill } from 'react-icons/bs';
import { SortSelector, ViewSelector } from '../common/Selector';

//TODO: figure out a better way to generate id

const sortOptions: SortOptionProps[] = [
    {
        id: "1",
        leftIcon: <FaRegClock />,
        title: "Date",
        type: "asc",
        rightIcon: <TbArrowNarrowUp />
    },
    {
        id: "2",
        leftIcon: <FaRegClock />,
        title: "Date",
        type: "desc",
        rightIcon: <TbArrowNarrowDown />
    },
    {
        id: "3",
        leftIcon: <ImSortAlphaAsc />,
        title: "Name",
        type: "asc",
        rightIcon: "(A-Z)"
    },
    {
        id: "4",
        leftIcon: <ImSortAlphaDesc />,
        title: "Name",
        type: "desc",
        rightIcon: "(Z-A)"
    },
    {
        id: "5",
        leftIcon: <RiDragMove2Fill />,
        title: "Manual",
        type: "desc",
        rightIcon: "Drag 'n' drop"
    },
]

const viewOptions: ViewOptionProps[] = [
    {
        id: "1",
        leftIcon: <BsFillGridFill />,
        title: "Card",
    },
    {
        id: "2",
        leftIcon: <FaList />,
        title: "List",
    },
]

const ActionSection = () => {
    const [selectedSortId, setSelectedSortId] = useState(sortOptions[0].id)
    const selectedSortOption = sortOptions.find((option) => option.id === selectedSortId)

    const [selectedViewId, setSelectedViewId] = useState(viewOptions[0].id)
    const selectedViewOption = viewOptions.find((option) => option.id === selectedViewId)

    return (
        <section>
            <Container className='flex justify-between'>
                <button
                    className='rounded-md px-4 py-2 text-lg capitalize bg-accent text-white hover:bg-white hover:text-accent hover:ring-2 hover:ring-accent transition-colors duration-200 ease-out'>
                    new
                </button>
                <div className='flex gap-4'>
                    <SortSelector
                        id={selectedSortId}
                        handleChangeId={setSelectedSortId}
                        selectedOption={selectedSortOption}
                        options={sortOptions}
                    />

                    <ViewSelector
                        id={selectedViewId}
                        handleChangeId={setSelectedViewId}
                        selectedOption={selectedViewOption}
                        options={viewOptions}
                    />
                </div>
            </Container>
        </section>
    )
}


export default ActionSection