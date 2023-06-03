import Button from '@/components/common/Button'
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms'
import clsx from 'clsx'
import { Formik, FormikHelpers } from 'formik'
import React from 'react'

interface EditProfileFormFields {
    title: string
    url: string
    description: string
}

const EditProfile = () => {

    const handleSubmit = (values: EditProfileFormFields, helpers: FormikHelpers<EditProfileFormFields>) => {
        console.log("form values", values)
    }

    const InputClass = clsx(`bg-primary text-base text-primary-700 px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-primary-500`)

    return (
        <main>
            <section>
                <h2>Create a profile link</h2>
                <Formik
                    initialValues={{
                        title: "",
                        url: "",
                        description: ""
                    }}
                    onSubmit={handleSubmit}>
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl label='Title' labelId='title' >
                                <FormikInput name='title' id='title' className={InputClass} />
                            </FormControl>

                            <FormControl label='Url' labelId='url' >
                                <FormikInput name='url' id='url' className={InputClass} />
                            </FormControl>

                            <FormControl label='Description' labelId='description' >
                                <FormikTextarea name='description' id='description' className={InputClass} />
                            </FormControl>
                            <button type='submit' className='text-base font-medium text-white rounded-md w-full py-3 bg-accent'>
                                Save link
                            </button>
                        </form>
                    )}
                </Formik>
            </section>
            <section>
                <h2>Link Preview</h2>
            </section>
        </main>
    )
}

export default EditProfile