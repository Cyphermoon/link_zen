import { useWaitListContext } from "@/context/WaitlistProvider";
import Btn from "../common/Button";
import Container from "../common/Container";
import { raleway } from "font";
const WaitingForCTA = () => {
          const { openWaitList } = useWaitListContext();

      const handleWaitlistClicked = () => {
        openWaitList();
      };

  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h3
            className={`text-center text-5xl md:text-6xl font-bold normal-case mb-6 ${raleway.className}`}
          >
            What are you waiting for?
          </h3>
          <Btn
            type="button"
            handleClick={handleWaitlistClicked}
            className="w-2/3 md:w-1/4 h-16 my-0"
          >
            Join the Waitlist
          </Btn>
        </div>
      </Container>
    </section>
  );
};

export default WaitingForCTA;