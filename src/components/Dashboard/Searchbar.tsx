import { BiSearch } from 'react-icons/bi'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
    containerClassName?: string
    className?: string
}



const SearchBar = ({ value, placeholder, handleChange, className, containerClassName, ...inputProps }: InputProps) => {

    return (
        <div className={`bg-gray-100 rounded-2xl flex items-center p-2 space-x-3 focus-within:ring-1 focus-within:ring-gray-400 text-gray-700 w-8/12 ${containerClassName}`}>
            <BiSearch className='text-xl' />
            <input
                placeholder={placeholder ? placeholder : "Enter value here"}
                className={`grow outline-none placeholder:text-gray-400 bg-inherit ${className}`}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                {...inputProps}
            />
        </div>
    );
};

export default SearchBar;
