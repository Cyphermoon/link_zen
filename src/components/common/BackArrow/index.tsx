import { useRouter } from 'next/router';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

interface BackArrowProps {
    title?: string;
    className?: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ title = 'Move to Previous Page', className = '' }) => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    const buttonClassName = `text-xl lg:text-2xl cursor-pointer ${className}`;

    return (
        <HiOutlineArrowNarrowLeft
            onClick={handleClick}
            className={buttonClassName}
            title={title}
        />
    );
};

export default BackArrow;
