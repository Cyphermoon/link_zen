interface Props {
  handleClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Overlay = ({ handleClick, children, className }: Props) => {
  return (
    <div
      onClick={() => handleClick ? handleClick() : null}
      className={`fixed w-screen h-screen fade-in z-[100] top-0 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Overlay;
