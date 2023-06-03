import { ErrorMessage, useField } from "formik";

const FormikInput = ({ type = "string", placeholder, name, className, ...props }: InputProps) => {
    const [field, meta] = useField({ name, type })


    return (
        <>
            <ErrorMessage name={name} >
                {(message) => <span className='text-sm text-red-600 font-medium'>{message}</span>}
            </ErrorMessage>
            <input
                type={type}
                placeholder={placeholder ? placeholder : ""}
                className={`${meta.error && meta.touched ? "ring-1 ring-red-600" : ""} ${className}`}
                {...props}
                {...field} />
        </>

    );
};

export default FormikInput