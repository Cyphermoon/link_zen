import clsx from 'clsx'; // Import the clsx library

import { BiSearch } from 'react-icons/bi';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
    containerClassName?: string;
    className?: string;
    variant: "outline" | "fill";
}

const SearchBar = ({ value, placeholder, handleChange, className, containerClassName, variant = "fill", ...inputProps }: InputProps) => {

    // Generate dynamic class names based on the variant property
    const searchBarClass = clsx(
        ` transition-all duration-300 rounded-2xl flex items-center p-2 space-x-3 focus-within:ring-1 w-8/12 lg:focus-within:w-8/12 ${containerClassName}`,
        {
            "ring-1 ring-gray-400 bg-transparent text-gray-500": variant === "outline", // Add outline styles when variant is "outline"
            "bg-gray-100 focus-within:ring-gray-400 text-gray-700": variant === "fill", // Add fill styles when variant is "fill"
        }
    );

    return (
        <div className={searchBarClass}>
            <BiSearch className='text-xl' />
            <input
                placeholder={placeholder ? placeholder : "Enter value here"}
                className={`w-full lg:w-auto lg:grow outline-none placeholder:text-gray-400 bg-inherit ${className}`}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                {...inputProps}
            />
        </div>
    );
};

export default SearchBar;
