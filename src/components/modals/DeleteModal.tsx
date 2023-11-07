import { useModal } from '@/hooks/index.hook';
import parse from 'html-react-parser';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import Btn from '../common/Button';
import BaseModal from './BaseModal';
import { ModalId } from './type';

export interface DeleteModalProps {
    id: ModalId
    title: string;
    description?: string;
    sendResult: (id: ModalId, result: boolean) => void
}

const DeleteModal = ({ id, title, description, sendResult, }: DeleteModalProps) => {
    const { isOpen, closeModal } = useModal(true);

    function handleClose(result: boolean) {
        return () => {
            sendResult(id, result)
            closeModal()
        }
    }

    return (
        <BaseModal state={isOpen} closeModal={handleClose(false)}>
            <Dialog.Content
                className='bg-white text-primary-800 w-11/12 max-w-sm rounded-xl fixed z-[100] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-center flex flex-col items-center py-4 px-3 animate-contentShow'>
                <div>

                    <Dialog.Title className={`text-2xl font-medium ${description ? "mb-2" : ""}`}>{title}</Dialog.Title>
                    {description ? <p className='text-sm font-normal'>{parse(description)}</p> : null}

                    <figure className='inline-block mx-auto relative w-[200px] h-[200px]'>
                        <Image src={'/asset/failed.gif'} fill alt={`${"Delete Illustration"}`} className="object-contain" />
                    </figure>

                    <div className='flex items-center justify-center space-x-8'>
                        <Btn onClick={handleClose(false)} variant='muted'>
                            Cancel
                        </Btn>
                        <Btn onClick={handleClose(true)} variant='danger'>
                            Delete
                        </Btn>
                    </div>
                </div>
            </Dialog.Content>
        </BaseModal>
    )
}

export default DeleteModal