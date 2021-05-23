import { UseFormRegisterReturn } from 'react-hook-form';
import React, { useState } from 'react';

export const CheckBoxInput = (props: InputProps) => {
    const [selected, setSelected] = useState(false);
    const [className, setClassName] = useState('checkbox');
    
    const onLabelClick = (event: React.MouseEvent<HTMLLabelElement>) => {
        event.preventDefault();

        const newClassName = selected // prev
            ? className.substring(0, className.indexOf('selected') - 1)
            : className + ' ' + 'selected';
        
        setClassName(newClassName);

        const inputEl = event.currentTarget.lastChild as HTMLInputElement;
        inputEl.checked = !selected;

        console.dir(inputEl);
        setSelected(!selected);
    }

    console.log('render');

    return (
        <label
            onClick={onLabelClick}
            className={className}>
            {props.label}
            <input
                type='checkbox'
                {...props.register} />
        </label>
    );
}

interface InputProps {
    label: string
    register: UseFormRegisterReturn
}