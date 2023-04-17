import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps =
    {
        href: string;
        text: ReactNode;
        inverse?: boolean;
        tabIndex?: number;
        type?: "link"
        handleClick?: never;
    } | {
        text: ReactNode;
        inverse?: boolean;
        tabIndex?: number;
        type: "button"
        handleClick: () => void;
        href?: never;
    };

const Button = ({ href, text, inverse, tabIndex = 0, type, handleClick }: ButtonProps) => {
    const bg = inverse ? "bg-primary" : "bg-accent";
    const textClass = inverse ? "text-accent" : "text-white";

    if (type === "button") {
        return (
            <button
                tabIndex={tabIndex}
                onClick={handleClick}
                className={`px-5 w-max py-2 rounded-lg transition-opacity hover:opacity-80 inline-block capitalize ${bg} ${textClass} text-base`}
            >
                {text}
            </button>
        )
    }

    return (
        <Link
            href={href}
            tabIndex={tabIndex}
            className={`px-5 w-max py-2 rounded-lg transition-opacity hover:opacity-80 inline-block capitalize ${bg} ${textClass} text-base`}
        >

            {text}

        </Link>
    );

};

export default Button;
