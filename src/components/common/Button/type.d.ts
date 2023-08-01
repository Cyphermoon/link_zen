

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tabIndex?: number;
    variant?: "inverse" | "outline" | "normal" | "darkShade";
    className?: string;
    disableZoomOutEffect?: boolean
    fullWidth?: boolean
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
