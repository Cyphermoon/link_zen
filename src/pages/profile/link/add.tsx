import Btn from '@/components/common/Button'
import { FormControl, FormikInput, FormikTextarea } from '@/components/forms'
import RootLayout from '@/components/layout/RootLayout'
import clsx from 'clsx'
import { Formik, FormikHelpers } from 'formik'

interface AddProfileLinkFormFields {
    title: string
    url: string
    description: string
}

const AddProfileLink = () => {

    const handleSubmit = (values: AddProfileLinkFormFields, helpers: FormikHelpers<AddProfileLinkFormFields>) => {
        console.log("form values", values)
    }

    const InputClass = clsx(`bg-primary text-base text-primary-700 px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-primary-500`)

    return (
        <RootLayout>
            <div>
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
                                <Btn
                                    fullWidth
                                    disabled={formik.isSubmitting}
                                    className='py-3'>
                                    Save Link
                                </Btn>
                            </form>
                        )}
                    </Formik>
                </section>
                <section>
                    <h2>Link Preview</h2>
                </section>
            </div>
        </RootLayout>
    )
}

export default AddProfileLink