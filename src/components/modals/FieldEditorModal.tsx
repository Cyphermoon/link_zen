import { INPUT_CLASS } from '@/components/forms/commonStyles.constant';
import BaseModal from '@/components/modals/BaseModal';
import { useModal } from '@/hooks/index.hook';
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RxCross1 } from 'react-icons/rx';
import * as Yup from 'yup';
import Button from '../common/Button';
import { FieldEditorProp, ModalId } from './type';


export interface FieldEditorModalProps {
    formTitle: string;
    initialValue: string
    id: ModalId;
    fieldId: string
    name: string;
    placeholder: string;
    labelName: string;
    sendResult: (id: ModalId, result: any) => void
}


const FieldEditorModal: React.FC<FieldEditorModalProps> = ({
    formTitle,
    initialValue,
    id,
    fieldId,
    name,
    placeholder,
    labelName,
    sendResult,

}) => {
    const { isOpen, closeModal } = useModal(true);

    function handleClose(result: boolean | string) {
        sendResult(id, result)
        closeModal()

    }

    const validationSchema = Yup.object({
        [name]: Yup.string().required('This field cannot be empty'),
    });


    const onSubmit = (values: FieldEditorProp) => {
        handleClose(values[name])

    };

    return (
        <BaseModal closeOnBackgroundClicked={false} state={isOpen} closeModal={closeModal}>
            <DialogContent className='bg-white text-primary-800 w-11/12 max-w-lg rounded-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[80] p-4 animate-contentShow outline-none'>

                <RxCross1
                    onClick={() => handleClose(false)}
                    className='justify-self-end ml-auto cursor-pointer text-lg mb-1.5 text-red-500 font-bold' />

                <DialogTitle className='text-xl mx-auto text-center font-medium mb-6'>
                    {formTitle}
                </DialogTitle>


                <Formik
                    initialValues={{ [name]: initialValue }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className='w-full'>
                        <label htmlFor={fieldId} className='text-base font-medium mb-2.5 inline-block'>
                            {labelName}
                        </label>
                        <ErrorMessage name="value" component="p" className='text-sm text-red-500' />
                        <Field
                            id={fieldId}
                            type='text'
                            name={name}
                            className={`${INPUT_CLASS} w-full mb-5 !py-3.5`}
                            placeholder={placeholder}
                        />

                        <Button type='submit' fullWidth>
                            Save
                        </Button>
                    </Form>
                </Formik>
            </DialogContent>
        </BaseModal>
    );
};

export default FieldEditorModal;
