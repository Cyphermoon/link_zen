import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import Btn from '@/components/common/Button';
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms';
import { INPUT_CLASS } from '@/components/forms/commonStyles.constant';
import FormikDragAndDrop from '@/components/forms/FormikDragAndDrop';
import Footer from '@/components/Profile/Footer';
import ProfilePreviewLink from '@/components/Profile/ProfilePreviewLink';
import RootLayout from '@/components/layout/RootLayout';

import { shortenUrl } from '@/service/link';
import { convertImageToFileURL, isValidImageSize } from '@/utils/image.utils';
import { errorToast } from '@/utils/toast.utils';
import BackArrow from '@/components/common/BackArrow';



interface AddProfileLinkFormFields {
    title: string;
    url: string;
    description: string;
    linkImage: any;
}

const AddProfileLink = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values: AddProfileLinkFormFields, helpers: FormikHelpers<AddProfileLinkFormFields>) => {
        console.log('form values', values);
    };

    const handleShortenUrl = (formik: FormikProps<AddProfileLinkFormFields>) => {
        // calls API to to shorten url
        setLoading(true)

        if (!formik.values.url) {
            errorToast("Link field is empty")
            setLoading(false)
            return
        }

        shortenUrl(formik.values.url)
            .then((link) => formik.setFieldValue("url", link))
            .catch(err => {
                errorToast("An error occured")
            })
            .finally(() => setLoading(false))
    }

    return (
        <RootLayout>
            <div className="flex flex-col lg:flex-row justify-start min-h-screen mb-10">
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
                                {/* Add link form  */}
                                <section className="w-full lg:w-7/12 py-7 lg:py-10 px-4 lg:px-6">
                                    <div className='mb-7 lg:mb-10 flex items-center w-full'>
                                        <BackArrow />
                                        <h2 className="text-3xl font-medium text-center grow">
                                            Add a new link
                                        </h2>
                                    </div>

                                    <form onSubmit={formik.handleSubmit} className="space-y-4 lg:space-y-6 mb-3">
                                        <FormControl label="Title" labelId="title">
                                            <FormikInput name="title" id="title" className={INPUT_CLASS} />
                                        </FormControl>

                                        <FormControl label="Url" labelId="url">
                                            <div className='flex space-x-2 items-end'>
                                                <div className='grow'>
                                                    <FormikInput
                                                        name="url"
                                                        id="url"
                                                        className={`${INPUT_CLASS} w-full ${loading ? "bg-primary-300" : ""}`}
                                                        disabled={loading}
                                                    />
                                                </div>
                                                <Btn
                                                    type={"button"}
                                                    className="h-[56px] whitespace-nowrap"
                                                    title='Shorten a url if you feel it is too long'
                                                    handleClick={(e) => handleShortenUrl(formik)}>
                                                    Shorten Url
                                                </Btn>
                                            </div>
                                        </FormControl>

                                        <FormControl label="Upload Image" labelId="linkImage">
                                            <FormikDragAndDrop id='linkImage' name="linkImage" accept="image/*" />
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
                                            disabled={formik.isSubmitting}
                                            className="py-3"
                                        >
                                            Save Link
                                        </Btn>
                                    </form>
                                </section>

                                {/* link preview section */}
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
            <Footer withUnderline />
        </RootLayout>
    );
};

export default AddProfileLink;



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

