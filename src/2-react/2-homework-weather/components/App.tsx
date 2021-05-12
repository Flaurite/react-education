import { Head, CurrentWeather, Filter, Forecast } from './index';

export const App = () => {
    return (
        <main>
            <Filter/>
            <Head/>
            <CurrentWeather />
            <Forecast/>
        </main>
    );
};
