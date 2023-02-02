import { FC } from 'react';

export interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    validationErr?: string
}
// shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light

const TextInput: FC<ITextInputProps> = ({ name, label, validationErr, ...restProps }) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input className="block border rounded-lg w-full focus:ring-cyan-500 p-2.5 focus:border-cyan-500 h-10 text-gray-700" {...restProps} />
            {validationErr && <p className="text-sm text-red-500">{validationErr}</p>}
        </div>
    );
}
export default TextInput
