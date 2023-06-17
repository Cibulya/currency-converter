import { SingleCurrency } from '@/types/currency-types';

export const findElement = (arr: SingleCurrency[], abbr: string): SingleCurrency => {
  const element = arr.filter((el) => {
    if (el.Cur_Abbreviation === abbr) {
      return el;
    }
  });
  return element.pop() as SingleCurrency;
};

export const isBynCurrency = (str: string): boolean => {
  return str === 'BYN';
};
