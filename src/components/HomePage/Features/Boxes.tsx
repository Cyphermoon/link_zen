import boxContent from "./type";
import {
  nunito,
  poppins,
  roboto,
  opensans,
  dmSans,
  urbanist,
  worksans,
  pfDisplay,
  spectral,
  karla,
  raleway,
  montserrat,
} from "font";

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
          : "flex flex-col md:bg-primary rounded-md md:rounded-xl md:items-center justify-start md:text-center py-5 px-3 md:py-3 md:px-8 md:shadow-md transition-transform hover:-translate-y-3 text-primary-900"
      }
    >
      {children}
      <div className="space-y-3 mt-4 md:mt-8">
        <h5
          className={
            hStyles
              ? hStyles
              : `ormal-case text-2xl font-semibold ${urbanist.className}`
          }
        >
          {title}
        </h5>
        <p
          className={
            pStyles
              ? pStyles
              : `md:text-center ${montserrat.className} md:font-medium`
          }
        >
          {body}
        </p>
      </div>
    </div>
  );
};

export default Box;
