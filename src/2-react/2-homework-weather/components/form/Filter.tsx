import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, CheckBoxInput } from './elements'

import { schema, FormValues } from './config-ts';

export const Filter: React.FC = () => {
    const form = useForm<FormValues>({
        mode: 'onTouched',
        resolver: yupResolver(schema),
        defaultValues: {
            cloudy: false,
            sunny: false,
            minTemp: -60,
            maxTemp: 50
        },
    });

    const submitForm = form.handleSubmit(() => {
        form.reset();
    });

    useEffect(() => {
        form.setFocus('minTemp');
    }, []);

    return (
        <form onSubmit={submitForm} className='filter'>
            <CheckBoxInput
                label='Облачно'
                register={form.register('cloudy')}
            />
            <CheckBoxInput
                label='Солнечно'
                register={form.register('sunny')}
            />
            <Input
                className='custom-input'
                type='number'
                label='Минимальная температура'
                error={form.formState.errors.minTemp}
                register={form.register('minTemp')}
                
            />
            <Input
                className='custom-input'
                type='number'
                label='Максимальная температура'
                error={form.formState.errors.maxTemp}
                register={form.register('maxTemp')}
            />
            <button type='submit'>Применить</button>
        </form >
    );
}