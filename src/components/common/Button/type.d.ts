

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tabIndex?: number;
    variant?: "inverse" | "outline" | "normal";
    className?: string;
    fullWidth?: boolean
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
