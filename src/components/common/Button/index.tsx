import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    href: string;
    text: ReactNode;
    inverse?: boolean;
    tabIndex?: number;
}

const Button = ({ href, text, inverse, tabIndex = 0 }: ButtonProps) => {
    const bg = inverse ? "bg-primary" : "bg-accent";
    const textClass = inverse ? "text-accent" : "text-white";

    return (
        <Link
            className={`px-5 w-max py-2 rounded-lg inline-block capitalize ${bg} ${textClass} text-base`}
            href={href}
            tabIndex={tabIndex}
        >
            {text}
        </Link>
    );
};

export default Button;
