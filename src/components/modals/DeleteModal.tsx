import { useModal } from '@/hooks/index.hook';
import * as Dialog from '@radix-ui/react-dialog';
import Btn from '../common/Button';
import BaseModal from './BaseModal';

interface Props {
    id: ModalId
    title: string;
    description?: string;
    sendResult: (id: ModalId, result: boolean) => void
}


const DeleteModal = ({ id, title, description, sendResult, }: Props) => {
    const { isOpen, closeModal, openModal } = useModal(true);

    function handleClose(result: boolean) {
        return () => {
            sendResult(id, result)
            closeModal()
        }
    }

    return (
        <BaseModal state={isOpen} closeModal={handleClose(false)}>
            <Dialog.Content
                className='bg-white text-primary-800 w-11/12 max-w-sm rounded-xl fixed z-[100] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-center flex flex-col items-center py-3 px-2 animate-contentShow'>
                <Dialog.Title className='text-2xl font-medium'>{title}</Dialog.Title>
                {description ? <p className='text-sm font-normal'>{description}</p> : null}

                <div className='flex items-center justify-center space-x-8'>
                    <Btn onClick={handleClose(false)}>
                        Cancel
                    </Btn>
                    <Btn onClick={handleClose(true)}>
                        Delete
                    </Btn>
                </div>
            </Dialog.Content>
        </BaseModal>
    )
}

export default DeleteModal
