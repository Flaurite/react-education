import { Head, CurrentWeather, Filter, Forecast } from './index';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../hooks/react-query'

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Filter />
                <Head />
                <CurrentWeather />
                <Forecast />
            </main>
        </QueryClientProvider>
    );
};
