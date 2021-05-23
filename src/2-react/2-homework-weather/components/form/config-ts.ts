/* Core */
import * as yup from 'yup';

export interface FormValues {
    cloudy: boolean;
    sunny: boolean;
    minTemp: number;
    maxTemp: number;
}

export const schema: yup.SchemaOf<FormValues> = yup
    .object()
    .shape({
        minTemp: yup
            .number()
            .min(-60, 'Значение должно быть больше, чем -60')
            .max(50, 'Значение должно быть меньше, чем 50'),
        maxTemp: yup
            .number()
            .min(-60, 'Значение должно быть больше, чем -60')
            .max(50, 'Значение должно быть меньше, чем 50')
            .moreThan(yup.ref('minTemp'), 'Максимальное значение должно быть больше минимального')
    })
    .defined();