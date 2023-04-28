import boxContent from "./type";

const Box = ({ title, body, children, divStyles, pStyles, hStyles }: boxContent) => {
  return (
    <div className={divStyles ? divStyles : 'flex flex-col bg-primary rounded-xl items-center text-center p-3 md:px-16 shadow-md transition-transform hover:-translate-y-3'}>
      {children}
      <h5 className={hStyles ? hStyles : "my-7 md:my-5 text-2xl font-medium"}>{title}</h5>
      <p className={pStyles ? pStyles : "text-center"}>{body}</p>
    </div>
  );
};

export default Box;
