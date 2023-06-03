import { ErrorMessage, useField } from "formik"

const FormikTextarea = ({ className, name, placeholder, ...props }: TextAreaProps) => {
    const [field, meta] = useField(name)

    return (
        <>
            <ErrorMessage name={name} >{(message) => <span className='text-sm text-red-600 font-medium'>{message}</span>}</ErrorMessage>
            <textarea
                placeholder={placeholder ? placeholder : ""}
                className={`${meta.error && meta.touched ? "ring-1 ring-red-600" : ""} ${className}`}
                {...props}
                {...field} />
        </>
    )
}

export default FormikTextarea
