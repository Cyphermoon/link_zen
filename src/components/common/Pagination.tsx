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

    const buttonClass = 'text-xl lg:text-lg text-gray-600 ';

    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div className='flex items-center justify-between space-x-3'>
            {hasPrevious && (
                <button
                    className={buttonClass}
                    title="Previous"
                    onClick={() => onPageChange(previousPage)}
                >
                    <FaChevronLeft />
                </button>
            )}

            {pageNumbers.map((page, idx) => (
                <span
                    key={`paginate-${idx}`}
                    className={`${page === currentPage ? 'text-white bg-accent-200' : ''} w-9 h-9 inline-flex items-center justify-center rounded-full cursor-pointer text-lg`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </span>
            ))}

            {hasNext && (
                <button
                    className={buttonClass}
                    title="Next"
                    onClick={() => onPageChange(nextPage)}
                >
                    <FaChevronRight />
                </button>
            )}
        </div>
    );
};

export default Pagination;
