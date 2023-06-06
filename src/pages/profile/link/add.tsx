import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import clsx from 'clsx';

// Import components
import Btn from '@/components/common/Button';
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms';
import RootLayout from '@/components/layout/RootLayout';
import { IoImageOutline } from 'react-icons/io5';

// Define the form fields interface
interface AddProfileLinkFormFields {
    title: string;
    url: string;
    description: string;
    linkImage: any;
}

const AddProfileLink = () => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState('');

    // Handle form submission
    const handleSubmit = (
        values: AddProfileLinkFormFields,
        helpers: FormikHelpers<AddProfileLinkFormFields>
    ) => {
        console.log('form values', values);
    };

    // Handle file input change
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFormikField: Function
    ) => {
        e.preventDefault();
        e.stopPropagation();

        const file = e.target.files && e.target.files[0];
        setFormikField('linkImage', file);
        setFileName(file?.name || ''); // Set the file name
    };

    // Handle drag events
    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    // Handle file drop
    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        setFormikField: Function
    ) => {
        e.preventDefault();
        e.stopPropagation();

        setDragActive(false);
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        console.log('log from on drop', file.name);

        setFormikField('linkImage', file);
        setFileName(file?.name || ''); // Set the file name
    };

    // Define CSS class for form inputs
    const INPUT_CLASS = clsx(
        'bg-primary',
        'text-base',
        'text-primary-700',
        'px-3',
        'py-2',
        'rounded-lg',
        'outline-none',
        'focus:ring-1',
        'focus:ring-primary-500'
    );

    return (
        <RootLayout>
            <div className="flex flex-col lg:flex-row justify-start min-h-screen">
                <section className="w-full lg:w-7/12 py-10 px-6">
                    <h2 className="text-3xl font-medium text-center mb-10">
                        Create a profile link
                    </h2>
                    <Formik
                        initialValues={{
                            title: '',
                            url: '',
                            description: '',
                            linkImage: null,
                        }}
                        onSubmit={handleSubmit}
                    >
                        {(formik) => (
                            <form
                                onSubmit={formik.handleSubmit}
                                className="space-y-4 lg:space-y-6 mb-3"
                            >
                                <FormControl label="Title" labelId="title">
                                    <FormikInput
                                        name="title"
                                        id="title"
                                        className={INPUT_CLASS}
                                    />
                                </FormControl>

                                <FormControl label="Url" labelId="url">
                                    <FormikInput name="url" id="url" className={INPUT_CLASS} />
                                </FormControl>

                                <div
                                    onDragEnter={handleDrag}
                                    className={clsx(
                                        'bg-primary',
                                        'text-base',
                                        'text-primary-700',
                                        'rounded-lg',
                                        'transition-colors',
                                        'outline-none',
                                        'text-center',
                                        'pb-1',
                                        'pt-3',
                                        'border-2',
                                        'border-dotted',
                                        'relative',
                                        dragActive ? 'bg-primary-200' : 'border-primary-500'
                                    )}
                                >
                                    <input
                                        onChange={(e) => handleInputChange(e, formik.setFieldValue)}
                                        type="file"
                                        name="linkImage"
                                        id="linkImage"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="linkImage"
                                        className="flex justify-center items-center text-md -mb-1"
                                    >
                                        <IoImageOutline className="mr-1" />
                                        {fileName ? (
                                            <span>{fileName}</span> // Display the file name
                                        ) : (
                                            <span>
                                                Drag and drop or{' '}
                                                <span className="text-accent underline">browse</span> file
                                            </span>
                                        )}
                                    </label>
                                    <span className="text-center text-xs text-primary-400 font-thin inline-block">
                                        Maximum image size of 3mb
                                    </span>
                                    {dragActive && (
                                        <div
                                            onDragEnter={handleDrag}
                                            onDragOver={handleDrag}
                                            onDragLeave={handleDrag}
                                            onDrop={(e) => handleDrop(e, formik.setFieldValue)}
                                            className="absolute w-full h-full rounded-lg bg-red-300 top-0 left-0"
                                        ></div>
                                    )}
                                </div>

                                <FormControl label="Description" labelId="description">
                                    <FormikTextarea
                                        name="description"
                                        id="description"
                                        className={INPUT_CLASS}
                                    />
                                </FormControl>

                                <Btn
                                    type="submit"
                                    fullWidth
                                    disableZoomOutEffect
                                    // disabled={formik.isSubmitting}
                                    className="py-3"
                                >
                                    Save Link
                                </Btn>
                            </form>
                        )}
                    </Formik>
                </section>
                <section className="w-full lg:w-5/12 bg-green-500 py-10 px-6">
                    <h2 className="text-3xl font-medium text-center mb-10">
                        Link Preview
                    </h2>
                </section>
            </div>
        </RootLayout>
    );
};

export default AddProfileLink;
