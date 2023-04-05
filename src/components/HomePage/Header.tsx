import { useWindowSize } from 'usehooks-ts'
import AnimationLayout from './AnimationLayout'
import NavBar from './NavBar'
import SpiderLayout from './SpiderLayout'
import { useState } from 'react'
import WaitListModal from "./modal/Waitlist";

const Header = () => {
  const lgScreen = 1024;
  const { width } = useWindowSize();
  const [modalState, setModalState] = useState<boolean>(false);
  const display = modalState
    ? "animate-in slide-in-from-right-full duration-500"
    : "animate-moveOut";

  return (
    <header
      className="py-4 flex flex-col h-screen overflow-x-hidden"
      onClick={() => setModalState(false)}
    >
      <NavBar />
      {width >= lgScreen ? <SpiderLayout openModal={setModalState} /> : null}
      {width < lgScreen ? <AnimationLayout openModal={setModalState} /> : null}
      <WaitListModal display={display} />
    </header>
  );
}

export default Header