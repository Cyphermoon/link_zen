import * as Dialog from '@radix-ui/react-dialog';

const BaseModal = ({ state, closeModal, children }: BaseModalProps) => {
    return (
        <Dialog.Root open={state}>
            <Dialog.DialogPortal>
                <Dialog.Overlay
                    onClick={() => closeModal()}
                    className='bg-primary-600 rdx-state-open:animate-in rdx-state-open:fade-in-0 duration-500 fixed inset-0' />
                {children}
            </Dialog.DialogPortal>
        </Dialog.Root>
    )
}

export default BaseModal

