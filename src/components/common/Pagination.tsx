import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
    pageCount: number;
    currentPage: number;
    onPageChange: (pageSelected: number) => void;
}

const Pagination = ({ pageCount, currentPage, onPageChange }: Props) => {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const hasPrevious = currentPage > 1;
    const hasNext = nextPage <= pageCount;

    //px-3 py-2 rounded-md border border-gray-200 bg-gray-100

    const buttonClass = 'text-xl lg:text-lg w-fit';

    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div className='flex items-center justify-between w-full overflow-x-scroll hide-scrollbar space-x-6 lg:max-w-2xl'>

            <button
                className={`${buttonClass} ${hasPrevious ? "text-gray-600" : "text-gray-300"}`}
                disabled={!hasPrevious}
                title="Previous"
                onClick={() => onPageChange(previousPage)}
            >
                <FaChevronLeft />
            </button>

            <div className='grid grid-cols-dynamic-36 grow gap-2'>
                {pageNumbers.map((page, idx) => (
                    <span
                        key={`paginate-${idx}`}
                        className={`${page === currentPage ? '!text-white !bg-accent-200' : ''} w-9 h-9 border border-gray-200 lg:border-none rounded-md lg:rounded-full inline-flex items-center justify-center cursor-pointer text-sm lg:text-lg hover:bg-accent-50 hover:text-accent-400`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </span>
                ))}
            </div>



            <button
                className={`${buttonClass} ${hasNext ? "text-gray-600" : "text-gray-300"}`}
                disabled={!hasNext}
                title="Next"
                onClick={() => onPageChange(nextPage)}
            >
                <FaChevronRight />
            </button>

        </div>
    );
};

export default Pagination;
