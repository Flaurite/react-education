import { useQuery } from 'react-query';
import { restApi } from '../../api'

export const useFetchForecast = () => {
    const query = useQuery('forecast', restApi.getForecast);
    
    return query;
}