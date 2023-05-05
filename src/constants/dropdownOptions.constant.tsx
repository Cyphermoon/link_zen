import { BsFillGridFill } from 'react-icons/bs';
import { FaList, FaRegClock } from 'react-icons/fa';
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';
import { RiDragMove2Fill } from 'react-icons/ri';
import { TbArrowNarrowDown, TbArrowNarrowUp } from 'react-icons/tb';

export const SORT_OPTIONS: SortOptionProps[] = [
    {
        id: "date_asc",
        leftIcon: (<FaRegClock />),
        title: "Date",
        order: "asc",
        type: "date",
        rightIcon: <TbArrowNarrowUp />
    },
    {
        id: "date_desc",
        leftIcon: <FaRegClock />,
        title: "Date",
        order: "desc",
        type: "date",
        rightIcon: <TbArrowNarrowDown />
    },
    {
        id: "name_asc",
        leftIcon: <ImSortAlphaAsc />,
        title: "Name",
        order: "asc",
        type: "name",
        rightIcon: "(A-Z)"
    },
    {
        id: "name_desc",
        leftIcon: <ImSortAlphaDesc />,
        title: "Name",
        type: "name",
        order: "desc",
        rightIcon: "(Z-A)"
    },
    {
        id: "drag_n_drop",
        leftIcon: <RiDragMove2Fill />,
        title: "Manual",
        type: "drag_n_drop",
        rightIcon: "Drag 'n' drop"
    },
]


export const VIEW_OPTIONS: ViewOptionProps[] = [
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