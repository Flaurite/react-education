import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

export const Input = (props: InputProps) => {
    return (
        <>
            <p className='custom-input'>
                <label className='label'>
                    {props.label}
                </label>
                <input
                    className='input'
                    type={props.type}
                    {...props.register}
                />
            </p>
            {props.error && <span className='custom-input-error'>{'\n' + props.error.message}</span>}
        </>
    );
}

interface InputProps {
    label: string;
    className: string;
    type: string;
    error?: FieldError;

    register: UseFormRegisterReturn;
}