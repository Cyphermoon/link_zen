import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image"
import BaseModal from './BaseModal';


const NotificationModal = ({ state, closeModal, title, description, illustration }: NotificationModalProps) => {
    return (
        <BaseModal state={state} closeModal={closeModal}>
            <Dialog.Content
                className='bg-white text-primary-800 w-11/12 max-w-sm rounded-xl fixed top-[50%] left-[50%]  translate-x-[-50%] 
            translate-y-[-50%] text-center flex flex-col items-center py-3 px-2 animate-contentShow'>
                <Dialog.Title className='text-2xl font-medium'>{title}</Dialog.Title>

                {illustration ? <Image src={illustration} width={200} height={250} alt={`${title}`} /> : null}
                {description ? <p className='text-sm font-normal'>{description}</p> : null}
            </Dialog.Content>
        </BaseModal>
    )
}

export default NotificationModal
