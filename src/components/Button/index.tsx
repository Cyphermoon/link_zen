import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    href: string;
    text: ReactNode;
    inverse?: boolean;
}

const Button = ({ href, text, inverse }: ButtonProps) => {
    const bg = inverse ? 'bg-primary' : 'bg-accent';
    const textClass = inverse ? 'text-primary' : 'text-white';

    return (
        <Link className={`px-5 w-max py-2 rounded-lg inline-block ${bg} ${textClass} text-base`} href={href}>
            {text}
        </Link>
    );
};

export default Button;