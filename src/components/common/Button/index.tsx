import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  text: ReactNode;
  inverse?: boolean;
  tabIndex?: number;
}

interface JoinWaitlistProps {
  label: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export const Button = ({ href, text, inverse, tabIndex = 0}: ButtonProps) => {
    const bg = inverse ? "bg-primary" : "bg-accent";
    const textClass = inverse ? "text-primary" : "text-white";

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

export const Btn = ({ label, className, onClick }: JoinWaitlistProps) => {

  return (
    <button
          className={className}
          onClick={onClick}
    >
      {label}
    </button>
  );
};



