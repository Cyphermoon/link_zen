interface Props {
    text: string;
    number: number;
}

const CountLayout = ({ text, number }: Props) => {
    return (
        <div className='flex items-center justify-between pr-1.5'>
            <span className='text-sm'>{text}</span>
            <span className='inline-block group-hover:lg:hidden mr-8 lg:mr-0'>{number}</span>
        </div>
    );
};

export default CountLayout