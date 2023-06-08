import Btn from '@/components/common/Button';
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms';
import { INPUT_CLASS } from '@/components/forms/commonStyles.constant';
import FormikDragAndDrop from '@/components/forms/FormikDragAndDrop';
import RootLayout from '@/components/layout/RootLayout';
import ProfilePreviewLink from '@/components/Profile/ProfilePreviewLink';
import { convertImageToFileURL, isValidImageSize } from '@/utils/image.utils';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';


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
    const handleSubmit = (
        values: AddProfileLinkFormFields,
        helpers: FormikHelpers<AddProfileLinkFormFields>
    ) => {
        console.log('form values', values);
    };

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
