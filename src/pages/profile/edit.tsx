import Btn from '@/components/common/Button'
import SimpleBanner from '@/components/common/SimpleBanner'
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms'
import { INPUT_CLASS } from '@/components/forms/commonStyles.constant'
import FormikDragAndDrop from '@/components/forms/FormikDragAndDrop'
import RootLayout from '@/components/layout/RootLayout'
import { Formik, FormikHelpers, FieldArray } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import React from 'react'

interface SocialMedia {
    name: string;
    url: string;
    iconUrl: string;
}

interface EditProfileFormFieldsProps {
    name: string;
    photo: any;
    bio: string;
    socialMedias: SocialMedia[];
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    photo: Yup.mixed().nullable().notRequired(),
    bio: Yup.string().required('Bio is required'),
    socialMedias: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Social media name is required'),
            url: Yup.string().url('Invalid URL format').notRequired(),
            iconUrl: Yup.string().required('Social media icon URL is required'),
        })
    ),
})


const socialMediaPlatforms: SocialMedia[] = [
    {
        name: 'instagram',
        url: '',
        iconUrl: '/social_icons/instagram.svg',
    },
    {
        name: 'youtube',
        url: '',
        iconUrl: '/social_icons/youtube.svg',
    },
    {
        name: 'spotify',
        url: '',
        iconUrl: '/social_icons/spotify.svg',
    },
    {
        name: 'tiktok',
        url: '',
        iconUrl: '/social_icons/tiktok.svg',
    },
    {
        name: 'facebook',
        url: '',
        iconUrl: '/social_icons/facebook.svg',
    },
];

const EditProfile = () => {
    const handleSubmit = (values: EditProfileFormFieldsProps, helpers: FormikHelpers<EditProfileFormFieldsProps>) => {
        console.log('form values', values);
        helpers.resetForm();
    };

    return (
        <RootLayout className='min-h-screen bg-primary-50 space-y-5 lg:space-y-8 pb-10'>
            <SimpleBanner />
            <section className='lg:shadow-lg lg:rounded-xl lg:ring-1 lg:ring-primary-200 w-full max-w-3xl p-5 mx-auto'>
                <h3 className='mb-3 lg:mb-4 text-center'>Edit Profile</h3>
                <Formik
                    initialValues={{
                        name: "",
                        photo: null,
                        bio: "",
                        socialMedias: socialMediaPlatforms.map((platform) => ({
                            name: platform.name,
                            url: platform.url,
                            iconUrl: platform.iconUrl,
                        })),
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <FormControl label='Name' labelId="name">
                                <FormikInput id='name' name="name" className={`${INPUT_CLASS} bg-primary`} />
                            </FormControl>

                            <FormControl label="Upload Photo" labelId="photo">
                                <FormikDragAndDrop id='photo' name="photo" accept="image/*" />
                            </FormControl>

                            <FormControl label="Bio" labelId="bio">
                                <FormikTextarea id='bio' name="bio" className={`${INPUT_CLASS} bg-primary`} />
                            </FormControl>

                            <h4>Social Medias</h4>
                            <div className='space-y-6 h-64 overflow-y-auto overflow-x-hidden px-1 pb-5'>
                                <FieldArray name="socialMedias">
                                    {(arrayHelpers) => (
                                        <>
                                            {formik.values.socialMedias.map((socialMedia, index) => (
                                                <div key={socialMedia.name}>
                                                    <div className="space-y-3 flex flex-col">
                                                        <div className='flex items-center space-x-2.5'>
                                                            <Image src={socialMedia.iconUrl} alt={`${socialMedia.name} icon`} width={17} height={17} />
                                                            <label
                                                                className="text-base font-bold text-primary-800 capitalize"
                                                                htmlFor={socialMedia.name}
                                                            >
                                                                {socialMedia.name}
                                                            </label>
                                                        </div>
                                                        <FormikInput
                                                            id={socialMedia.name}
                                                            type="url"
                                                            name={`socialMedias.${index}.url`}
                                                            className={`${INPUT_CLASS} bg-primary !py-2.5`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                        </>
                                    )}
                                </FieldArray>
                            </div>

                            <Btn
                                type='submit'
                                disabled={formik.isSubmitting}
                                fullWidth
                            >
                                Save Profile Info
                            </Btn>
                        </form>
                    )}
                </Formik>
            </section>
        </RootLayout>
    );
}

export default EditProfile;
