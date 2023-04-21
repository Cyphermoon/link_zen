type ButtonProps =
    {
        href: string;
        text: ReactNode;
        inverse?: boolean;
        tabIndex?: number;
        type?: "link"
        handleClick?: never;
        className?: string;
    } | {
        text: ReactNode;
        inverse?: boolean;
        tabIndex?: number;
        type: "button"
        className?: string;
        handleClick: () => void;
        href?: never;
    };

interface JoinWaitlistProps {
    type: "button" | "submit" | "reset"
    label: string;
    className: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}