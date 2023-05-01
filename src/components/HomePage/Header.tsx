import { useWindowSize } from "usehooks-ts";
import AnimationLayout from "./AnimationLayout";
import NavBar from "./NavBar";
import SpiderLayout from "./SpiderLayout";

const Header = () => {
  const screenSize = 768;
  const { width } = useWindowSize();

  return (
    <header className="pt-4 pb-2 flex min-h-[600px] lg:min-h-[700px] flex-col overflow-x-hidden">
      <NavBar inverse={true} />
      {width && width >= screenSize ? <SpiderLayout /> : null}
      {width && width < screenSize ? <AnimationLayout /> : null}

    </header>
  );
};

export default Header;
