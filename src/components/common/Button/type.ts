export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    tabIndex?: number;
    variant?: "inverse" | "outline" | "normal" | "muted" | "danger";
    className?: string;
    disableZoomOutEffect?: boolean
    fullWidth?: boolean
    handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
