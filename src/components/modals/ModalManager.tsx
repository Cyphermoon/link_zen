import React from 'react'
import DeleteModal from './DeleteModal'
import ModalContext from './ModalContext'


interface Props {
    children: React.ReactNode
}


const ModalManager = ({ children }: Props) => {
    const [modals, setModals] = React.useState<ModalProps[]>([])


    function addModal(modal: AddModalArg) {
        return new Promise(resolve => {
            const _modal = {
                id: Date.now(),
                callback: resolve,
                ...modal,
            }

            setModals([...modals, _modal])
        })
    }

    function sendResult(id: ModalId, result: boolean) {
        const modal = modals.find(modal => modal.id === id)

        if (!modal) return null

        modal.callback(result)

        setModals(modals.filter(modal => modal.id !== id))
    }

    return (
        <ModalContext.Provider value={{ addModal }}>
            {modals.map((modal) => {
                if (modal.type === "confirm") {
                    return <DeleteModal
                        id={modal.id}
                        key={modal.id}
                        title={modal.title}
                        description={modal.description}
                        sendResult={sendResult} />
                }
                return null
            })}
            {children}
        </ModalContext.Provider>
    )
}

export default ModalManager