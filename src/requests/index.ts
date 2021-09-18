import { baseUrl } from './config';

export const getAllTickers = async () => fetch(`${baseUrl}/tickers?symbols=ALL`);
