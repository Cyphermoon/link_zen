const FormControl = ({ label, labelId, children }: FormControlProps) => {
    return (
        <div className="space-y-3 flex flex-col">
            <label
                className="text-lg font-bold text-primary-800 capitalize mt-4 md:mt-6"
                htmlFor={labelId}
            >
                {label}
            </label>
            {children}
        </div>
    );
};

export default FormControl



