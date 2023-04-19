import { useWindowSize } from "usehooks-ts";
import AnimationLayout from "./AnimationLayout";
import NavBar from "./NavBar";
import SpiderLayout from "./SpiderLayout";
import { useState } from "react";
import WaitListModal from "./modal/Waitlist";

const Header = () => {
  const lgScreen = 1024;
  const { width } = useWindowSize();
  const [modalState, setModalState] = useState<boolean | undefined>(undefined);



  return (
    <header className="py-4 flex flex-col h-screen overflow-x-hidden">
      <NavBar inverse={true}/>
      {width >= lgScreen ? <SpiderLayout openModal={setModalState} /> : null}
      {width < lgScreen ? <AnimationLayout openModal={setModalState} /> : null}

      <WaitListModal
        modalOpened={modalState}
        closeModal={() => {
          setModalState(false);
          document.body.classList.remove("modal-open");
        }}
      />
    </header>
  );
};

export default Header;
