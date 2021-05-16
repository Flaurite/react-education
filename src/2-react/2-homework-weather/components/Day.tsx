import { ForecastModel } from '../model/ForecastModel'
import { dateUtility } from '../utility';

export const Day: React.FC<ForecastModel> = (props) => {
    console.log(props);

    const className=`day ${props.type}`;

    return (
        <div key={props.id} className={className}>
            <p>{dateUtility.getDayName(props.day)}</p>
            <span>{props.temperature}</span>
        </div>
    );
}

