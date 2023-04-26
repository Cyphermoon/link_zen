import { useWaitListContext } from "@/context/WaitlistProvider"
import WaitListModal from "../HomePage/modal/Waitlist"

interface Props {
    children: React.ReactNode
}

const WaitListLayout = ({ children }: Props) => {
    const { modalState, closeWaitList } = useWaitListContext()

    return (
        <>
            {children}
            <WaitListModal
                modalOpened={modalState}
                closeModal={() => closeWaitList()} />
        </>
    )
}

export default WaitListLayout