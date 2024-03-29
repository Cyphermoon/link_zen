import Link from 'next/link';


const Button = ({ href, text, inverse, className, tabIndex = 0, type, handleClick }: ButtonProps) => {
    const bg = inverse ? "bg-primary" : "bg-accent";
    const textClass = inverse ? "text-accent" : "text-white";

    if (type === "button") {
        return (
            <button
                tabIndex={tabIndex}
                onClick={handleClick}
                className={`${className} px-5 w-max py-2 rounded-lg transition-opacity hover:opacity-80 inline-block capitalize ${bg} ${textClass} text-base`}
            >
                {text}
            </button>
        )
    }

    return (
        <Link
            href={href}
            title={text}
            tabIndex={tabIndex}
            className={`px-5 w-max py-2 rounded-lg transition-opacity hover:opacity-80 inline-block capitalize ${bg} ${textClass} text-base`}
        >

            {text}

        </Link>
    );

};

export default Button;


export const Btn = ({ type, label, className, onClick, ...rest }: JoinWaitlistProps) => {

    return (
        <button
            type={type || "button"}
            className={className}
            onClick={onClick}
            {...rest}
        >
            {label}
        </button>
    );
};
