import React, { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import clsx from 'clsx';
import Btn from '@/components/common/Button';
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms';
import RootLayout from '@/components/layout/RootLayout';
import { IoImageOutline } from 'react-icons/io5';
import * as Yup from 'yup';
import ProfilePreviewLink from '@/components/Profile/ProfilePreviewLink';
import { convertImageToFileURL, isValidImageSize } from '@/utils/image.utils';
import { truncateText } from '@/utils';


interface AddProfileLinkFormFields {
    title: string;
    url: string;
    description: string;
    linkImage: any;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().max(30, "Title must be under 30 characters").required('Title is required'),
    url: Yup.string().url('Invalid URL').required('URL is required'),
    description: Yup.string().required('Description is required'),
    linkImage: Yup.mixed().nullable().test(
        'fileSize',
        'Maximum image size of 3mb',
        (value: any) => {
            if (value) return isValidImageSize(value.size);

            return true;
        }
    ),
});

const AddProfileLink = () => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleSubmit = (
        values: AddProfileLinkFormFields,
        helpers: FormikHelpers<AddProfileLinkFormFields>
    ) => {
        console.log('form values', values);
    };

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        formik: FormikProps<AddProfileLinkFormFields>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        formik.setFieldTouched('linkImage', true);

        const file = e.target.files && e.target.files[0];

        formik.setFieldValue('linkImage', file);
        setFileName(file?.name || '');
    };

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        formik: FormikProps<AddProfileLinkFormFields>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        formik.setFieldTouched('linkImage', true);
        setDragActive(false);

        const file = e.dataTransfer.files && e.dataTransfer.files[0];

        formik.setFieldValue('linkImage', file);
        setFileName(file?.name || '');
    };

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
                <Formik
                    initialValues={{
                        title: '',
                        url: '',
                        description: '',
                        linkImage: null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formik) => {
                        return (
                            <>
                                <section className="w-full lg:w-7/12 py-7 lg:py-10 px-4 lg:px-6">
                                    <h2 className="text-3xl font-medium text-center mb-7 lg:mb-10">Create a profile link</h2>

                                    <form onSubmit={formik.handleSubmit} className="space-y-4 lg:space-y-6 mb-3">
                                        <FormControl label="Title" labelId="title">
                                            <FormikInput name="title" id="title" className={INPUT_CLASS} />
                                        </FormControl>

                                        <FormControl label="Url" labelId="url">
                                            <FormikInput name="url" id="url" className={INPUT_CLASS} />
                                        </FormControl>

                                        <FormControl label="Upload Image" labelId="linkImage">
                                            {formik.errors.linkImage && formik.touched.linkImage && (
                                                <span className="text-sm text-red-600 font-medium block">
                                                    {formik.errors.linkImage}
                                                </span>
                                            )}
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
                                                    onChange={(e) => handleInputChange(e, formik)}
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
                                                    <IoImageOutline className={`mr-1 ${fileName ? 'mb-2' : ''}`} />
                                                    {fileName ? (
                                                        <span className="mb-2 animate-in fade-in-0 duration-300">
                                                            {truncateText(fileName, 50)}
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            Drag and drop or{' '}
                                                            <span className="text-accent underline">browse</span> file
                                                        </span>
                                                    )}
                                                </label>

                                                {!fileName && (
                                                    <span className="text-center text-xs text-primary-400 font-thin inline-block">
                                                        Maximum image size of 3mb
                                                    </span>
                                                )}

                                                {dragActive && (
                                                    <div
                                                        onDragEnter={handleDrag}
                                                        onDragOver={handleDrag}
                                                        onDragLeave={handleDrag}
                                                        onDrop={(e) => handleDrop(e, formik)}
                                                        className="absolute w-full h-full rounded-lg top-0 left-0"
                                                    ></div>
                                                )}
                                            </div>
                                        </FormControl>

                                        <FormControl label="Description" labelId="description">
                                            <FormikTextarea
                                                name="description"
                                                id="description"
                                                rows={5}
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
                                </section>
                                <section className="w-full lg:w-5/12 bg-profile-gradient py-10 px-6 ">
                                    <h2 className="text-3xl font-medium text-center mb-10 lg:mb-20">Link Preview</h2>


                                    <ProfilePreviewLink
                                        title={formik.values.title}
                                        url={formik.values.url}
                                        description={formik.values.description}
                                        imageUrl={(formik.values.linkImage && convertImageToFileURL(formik.values.linkImage)) ?? "/asset/linkzen.png"}
                                    />

                                </section>
                            </>
                        );
                    }}
                </Formik>
            </div>
        </RootLayout>
    );
};

export default AddProfileLink;
