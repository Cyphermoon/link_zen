import { INPUT_CLASS } from '@/components/forms/commonStyles.constant';
import BaseModal from '@/components/modals/BaseModal';
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RxCross1 } from 'react-icons/rx';
import * as Yup from 'yup';
import Button from '../../common/Button';
import { CreateModalProp } from './type';

interface CreateFolderModalProps {
    formTitle: string;
    initialValue: string
    modalState: boolean;
    id: string;
    name: string;
    placeholder: string;
    labelName: string;
    closeModal: () => void;
    handleSubmit: (value: { [value: string]: string }) => void;
}


const CreateModal: React.FC<CreateFolderModalProps> = ({
    formTitle,
    initialValue,
    id,
    name,
    placeholder,
    labelName,
    handleSubmit,
    modalState,
    closeModal,
}) => {

    const validationSchema = Yup.object({
        [name]: Yup.string().required('This field cannot be empty'),
    });


    const onSubmit = (values: CreateModalProp) => {
        closeModal();
        handleSubmit(values);
    };

    return (
        <BaseModal closeOnBackgroundClicked={false} state={modalState} closeModal={closeModal}>
            <DialogContent className='bg-white text-primary-800 w-11/12 max-w-lg rounded-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[80] p-4 animate-contentShow outline-none'>

                <RxCross1
                    onClick={closeModal}
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
                        <label htmlFor={id} className='text-base font-medium mb-2.5'>
                            {labelName}
                        </label>
                        <ErrorMessage name="value" component="p" className='text-sm text-red-500' />
                        <Field
                            id={id}
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

export default CreateModal;
