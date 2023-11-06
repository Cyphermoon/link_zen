import * as Dialog from '@radix-ui/react-dialog';
import { BaseModalProps } from './type';

const BaseModal = ({ state, closeModal, children, closeOnBackgroundClicked = true }: BaseModalProps) => {
    return (
        <Dialog.Root open={state}>
            <Dialog.DialogPortal>
                <Dialog.Overlay
                    onClick={() => closeOnBackgroundClicked && closeModal()}
                    className='bg-black/80 backdrop-blur-sm rdx-state-open:animate-in rdx-state-open:fade-in-0 duration-500 fixed z-[70] top-0 left-0 w-screen h-screen !m-0' />
                {children}
            </Dialog.DialogPortal>
        </Dialog.Root>
    )
}

export default BaseModal

