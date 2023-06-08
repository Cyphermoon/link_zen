import { truncateText } from '@/utils';
import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';

interface DragAndDropProps {
    name: string;
    accept?: string;
    id: string
}

const FormikDragAndDrop: React.FC<DragAndDropProps> = ({ name, id, accept }) => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState('');
    const [, , helpers] = useField(name);

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        helpers.setTouched(true);

        const file = e.target.files && e.target.files[0];

        helpers.setValue(file);
        setFileName(file?.name || '');
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        helpers.setTouched(true);
        setDragActive(false);

        const file = e.dataTransfer.files && e.dataTransfer.files[0];

        helpers.setValue(file);
        setFileName(file?.name || '');
    };

    return (
        <>
            <ErrorMessage name={name} >
                {(message) => <span className="text-sm text-red-600 font-medium block">
                    {message}
                </span>}
            </ErrorMessage>

            <div
                onDragEnter={handleDrag}
                className={`bg-primary text-base text-primary-700 rounded-lg transition-colors outline-none text-center pb-1 pt-3 border-2 border-dotted relative ${dragActive ? 'bg-primary-200' : 'border-primary-500'
                    }`}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    onChange={handleInputChange}
                    type="file"
                    name={name}
                    id={id}
                    accept={accept}
                    className="hidden"
                />
                <label htmlFor={name} className="flex justify-center items-center text-md -mb-1">
                    <IoImageOutline className={`mr-1 ${fileName ? 'mb-2' : ''}`} />
                    {fileName ? (
                        <span className="mb-2 animate-in fade-in-0 duration-300">{truncateText(fileName, 50)}</span>
                    ) : (
                        <span>
                            Drag and drop or <span className="text-accent underline">browse</span> file
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
                        onDrop={handleDrop}
                        className="absolute w-full h-full rounded-lg top-0 left-0"
                    ></div>
                )}
            </div>
        </>
    );
};

export default FormikDragAndDrop;
