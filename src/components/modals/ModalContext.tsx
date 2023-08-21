import { createContext, useContext } from "react";

interface Props {
    addModal: (details: AddModalArg) => Promise<boolean | null>
}


export function useModalManager() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModalManager must be used within a ModalContext");
    }
    return context;
}



const ModalContext = createContext<Props>({
    addModal: () => Promise.resolve(null),
})

export default ModalContext
