import clsx from "clsx";

const Btn = ({
    children,
    variant = "normal",
    fullWidth,
    className,
    tabIndex = 0,
    disableZoomOutEffect,
    disabled,
    handleClick,
    ...rest
}: CustomButtonProps) => {
    // Generate dynamic class names based on variant and fullWidth
    const buttonClass = clsx(
        `px-5 inline-block py-2 rounded-lg transition  capitalize text-base cursor-pointer`,
        {
            "bg-accent text-white": variant === "normal",
            "bg-primary text-accent": variant === "inverse",
            "border-2 border-accent text-accent bg-transparent": variant === "outline",
            "w-full": fullWidth,
            "hover:opacity-80 hover:scale-95": !disableZoomOutEffect,
            "opacity-70 pointer-events-none": disabled
        }
    );

    return (
        <button
            tabIndex={tabIndex}
            onClick={handleClick}
            className={`${buttonClass} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Btn;
