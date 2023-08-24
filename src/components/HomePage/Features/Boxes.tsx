import { boxContent } from "./type";


const Box = ({ title, body, children, divStyles, pStyles, hStyles }: boxContent) => {
  return (
    <div className={divStyles ? divStyles : 'flex flex-col bg-primary rounded-xl items-center justify-start text-center p-3 md:px-8 shadow-md transition-transform hover:-translate-y-3 text-primary-900'}>
      {children}
      <div className="space-y-3 mt-8">
        <h5 className={hStyles ? hStyles : "text-2xl font-medium"}>{title}</h5>
        <p className={pStyles ? pStyles : "text-center"}>{body}</p>
      </div>
    </div>
  );
};

export default Box;
