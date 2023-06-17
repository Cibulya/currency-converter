import { CompleteInformation, SingleCurrency } from '@/types/currency-types';
import axios from 'axios';

export const currencyList = async () => {
  const list = await axios.get<SingleCurrency[]>(`https://api.nbrb.by/exrates/rates?periodicity=0`);
  return list.data;
};

export const getSingleCurrecyInfo = async function () {
  const currencyInfo = await axios.get<CompleteInformation[]>(
    `https://api.nbrb.by/exrates/currencies/`
  );
  return currencyInfo.data;
};

export const getSingleCurrecyRate = async (id: number) => {
  if (id) {
    const currencyInfo = await axios.get<SingleCurrency>(`https://api.nbrb.by/exrates/rates/${id}`);
    return currencyInfo.data;
  }
};
