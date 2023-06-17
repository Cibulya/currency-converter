import { SingleCurrency } from '@/types/currency-types';

export const singleConversion = (
  defCurrency: number,
  newCurrcency: number,
  scale: number,
  newScale: number
): number => {
  const result = Number((((defCurrency / newCurrcency) * scale) / newScale).toFixed(6));
  return result;
};

export const calcScale = (newScale: number, currScale: number): number => {
  const result = newScale / currScale;
  return result;
};

export const calcBynSingleConsversion = (defScale: number, newScale: number): number => {
  const result = Number((defScale / newScale).toFixed(6));
  return result;
};

export const calcConversion = (
  currencyOne: SingleCurrency,
  currencyTwo: SingleCurrency,
  multiplier: number
): number => {
  const curOne = currencyOne.Cur_OfficialRate / currencyOne.Cur_Scale;
  const curTwo = currencyTwo.Cur_OfficialRate / currencyTwo.Cur_Scale;
  const result = Number(((curTwo / curOne) * multiplier).toFixed(6));
  return result;
};

export const calcBynMultiConversion = (scale: number, rate: number, multiplier: number): number => {
  const result = Number(((rate / scale) * multiplier).toFixed(6));
  return result;
};
