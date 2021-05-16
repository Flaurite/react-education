import forecastJson from '../mock-data/forecast.json'

import { Day } from '../components'

import { ForecastModel } from '../model/ForecastModel'

export const Forecast: React.FC = () => {
    const forecastData: ForecastModel[] = forecastJson
        ?.map((forecast): ForecastModel => { return forecast; })
        .slice(1, 8);

    const forecastsJSX = forecastData?.map((forecast) => {
        return <Day {...forecast}/>;
    });

    return (
        <div className='forecast'>
            {forecastsJSX}
        </div>
    );
}