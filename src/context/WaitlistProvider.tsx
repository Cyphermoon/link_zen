import React, { createContext, useContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    modalState: boolean | undefined,
    openWaitList: () => void
    closeWaitList: () => void
    setModalState: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

// create default context information
const WaitListContext = createContext<ContextProps>({
    modalState: undefined,
    openWaitList: () => { },
    closeWaitList: () => { },
    setModalState: () => { }
})

export const useWaitListContext = () => useContext(WaitListContext)


const WaitListProvider = ({ children }: Props) => {
    const [modalState, setModalState] = useState<boolean | undefined>(undefined);

    const openWaitList = () => {
        // close waitList modal and remove scroll blocking style
        setModalState(true)

        if (window !== undefined) {
            document.body.classList.add("modal-open")
        }
    }


    const closeWaitList = () => {
        //open waitList modal and add scroll block style
        setModalState(false)

        if (window !== undefined) {
            document.body.classList.remove("modal-open")
        }
    }


    return (
        <WaitListContext.Provider value={{ openWaitList, closeWaitList, modalState, setModalState }}>
            {children}
        </WaitListContext.Provider>
    )
}

export default WaitListProvider