import { useWaitListContext } from "@/context/WaitlistProvider";
import { useWindowSize } from "usehooks-ts";
import AnimationLayout from "./AnimationLayout";
import NavBar from "./NavBar";
import SpiderLayout from "./SpiderLayout";

const Header = () => {
  const screenSize = 768;
  const { width } = useWindowSize();

  return (
    <header className="py-4 flex flex-col h-screen overflow-x-hidden">
      <NavBar inverse={true} />
      {width && width >= screenSize ? <SpiderLayout /> : null}
      {width && width < screenSize ? <AnimationLayout /> : null}

    </header>
  );
};

export default Header;
