import boxContent from "./type";

const Box = ({ title, body, children, divStyles, pStyles, hStyles }: boxContent) => {
  return (
    <div className={divStyles ? divStyles : 'flex flex-col bg-primary rounded-xl items-center text-center p-3 md:py-4 md:px-16 shadow-md h-72'}>
      {children}
      <h4 className={hStyles ? hStyles : "my-auto"}>{title}</h4>
      <p className={pStyles ? pStyles : "text-center"}>{body}</p>
    </div>
  );
};

export default Box;
