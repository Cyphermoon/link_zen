import React from 'react'
import ShareSocials from '../Dashboard/ShareSocials'
import DeleteModal from './DeleteModal'
import ModalContext from './ModalContext'
import { AddModalArg, ModalId, ModalProps, SocialShareModalProps } from './type'

interface Props {
    children: React.ReactNode
}


const ModalManager = ({ children }: Props) => {
    const [modals, setModals] = React.useState<(ModalProps | SocialShareModalProps)[]>([])


    function addModal(modal: AddModalArg) {
        return new Promise<boolean | null>(resolve => {
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

                if (modal.type === "social-share") {
                    return <ShareSocials
                        id={modal.id}
                        key={modal.id}
                        title={modal.title}
                        url={modal.url}
                        twitter={modal.twitter}
                        sendResult={sendResult} />
                }
                return null
            })}
            {children}
        </ModalContext.Provider>
    )
}

export default ModalManager