import { createContext, useContext } from "react";

interface Props {
    addModal: (details: AddModalArg) => Promise<any>
}


export function useModalManager() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModalManager must be used within a ModalContext");
    }
    return context;
}



const ModalContext = createContext<Props>({
    addModal: () => Promise.resolve(),
})

export default ModalContext
