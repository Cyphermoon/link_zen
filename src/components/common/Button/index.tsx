import clsx from "clsx";

const Btn = ({
    children,
    variant = "normal",
    fullWidth,
    className,
    tabIndex = 0,
    handleClick,
    ...rest
}: CustomButtonProps) => {
    // Generate dynamic class names based on variant and fullWidth
    const buttonClass = clsx(
        `px-5 inline-block py-2 rounded-lg transition hover:opacity-80 hover:scale-95 capitalize text-base`,
        {
            "bg-accent text-white": variant === "normal",
            "bg-primary text-accent": variant === "inverse",
            "border-2 border-accent text-accent bg-transparent": variant === "outline",
            "w-full": fullWidth
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
