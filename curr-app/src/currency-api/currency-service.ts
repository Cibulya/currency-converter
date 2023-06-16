import { actualReqLink, dateToRequest } from '@/constants/request-links';
import { CompleteInformation, SingleCurrency } from '@/types/currency-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: actualReqLink }),
  endpoints: (build) => ({
    getAllCurrencyes: build.query<SingleCurrency[], string>({
      query: () => ({
        url: `/rates?ondate=${dateToRequest}&periodicity=0`,
      }),
    }),
    getSingleCurrency: build.query<CompleteInformation, string>({
      query: (id: string) => ({
        url: `/currencies/${id}`,
      }),
    }),
    getSingleRate: build.query<SingleCurrency, string>({
      query: (id: string) => ({
        url: `/rates/${id ? id : ''}`,
      }),
    }),
  }),
});

export default currencyAPI;
