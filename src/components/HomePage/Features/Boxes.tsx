import { boxContent } from "./type";
import { urbanist, montserrat } from "font";
const Box = ({
  title,
  body,
  children,
  divStyles,
  pStyles,
  hStyles,
}: boxContent) => {
  return (
    <div
      className={
        divStyles
          ? divStyles
          : "flex flex-col md:bg-white rounded-md md:rounded-xl md:items-center justify-start md:text-center py-5 px-3 md:py-3 md:px-8 md:shadow-md transition-transform md:hover:-translate-y-3 text-primary-900"
      }
    >
      {children}
      <div className="space-y-3 mt-4 md:mt-8">
        <h5
          className={
            hStyles
              ? hStyles
              : `ormal-case text-white md:text-black text-2xl font-semibold ${urbanist.className}`
          }
        >
          {title}
        </h5>
        <p
          className={
            pStyles
              ? pStyles
              : `md:text-center ${montserrat.className} md:font-medium text-gray-50 md:text-black`
          }
        >
          {body}
        </p>
      </div>
    </div>
  );
};

export default Box;
