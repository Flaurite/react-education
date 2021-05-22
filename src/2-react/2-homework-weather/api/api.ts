/* Core */
import { ForecastModel } from '../model/ForecastModel'
import axios from 'axios';
import { FetchForecastResultModel } from '../model/FetchForecastResultModel';

const REST_API_URL = process.env.REACT_APP_REST_API_URL;

export const restApi: IApi = {
    getForecast: async (): Promise<FetchForecastResultModel> => {
        const response = await axios.get(`${REST_API_URL}/forecast`);
        return response.data;
    }
}

interface IApi {
    getForecast(): Promise<FetchForecastResultModel>;
}