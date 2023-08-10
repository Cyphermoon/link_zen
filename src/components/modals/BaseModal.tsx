import * as Dialog from '@radix-ui/react-dialog';

const BaseModal = ({ state, closeModal, children, closeOnBackgroundClicked = true }: BaseModalProps) => {
    return (
        <Dialog.Root open={state}>
            <Dialog.DialogPortal className='focus:ring-1 focus:ring-primary-700'>
                <Dialog.Overlay
                    onClick={() => closeOnBackgroundClicked && closeModal()}
                    className='bg-black/80 backdrop-blur-sm rdx-state-open:animate-in rdx-state-open:fade-in-0 duration-500 fixed z-[70] inset-0' />
                {children}
            </Dialog.DialogPortal>
        </Dialog.Root>
    )
}

export default BaseModal

