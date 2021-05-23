import { Day } from '../components'

import { ForecastModel } from '../model/ForecastModel'
import { FetchForecastResultModel } from '../model/FetchForecastResultModel'
import * as hooks from '../hooks/react-query'

export const Forecast: React.FC = () => {
    const useFetchForecast = hooks.useFetchForecast();

    const week = useFetchForecast.data?.data?.slice(1, 8);

    const forecastsJSX = week?.map((forecast) => {
        return <Day key={forecast.id} {...forecast} />;
    });

    return (
        <div className='forecast'>
            {forecastsJSX}
        </div>
    );
}