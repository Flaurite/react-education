import { ForecastModel } from '../model/ForecastModel'
import { dateUtility } from '../utility';
import { useState } from 'react'
import { useRef } from 'react'

export const Day: React.FC<ForecastModel> = (props) => {
    const [selected, setSelected] = useState(false);
    const [className, setClassName] = useState(`day ${props.type}`);

    const onClick = () => {
        const newClassName = selected
            ? className.substring(0, className.indexOf('selected') - 1)
            : className + ' ' + 'selected';
        setClassName(newClassName);
        setSelected(!selected);
    };

    return (
        <div key={props.id} className={className} onClick={onClick}>
            <p>{dateUtility.getDayName(props.day)}</p>
            <span>{props.temperature}</span>
        </div>
    );
}

