import { FormData } from '@/components/ConverterForm/ConverterForm';
import { calcBynMultiConversion, calcConversion } from '@/math/math-operations';
import { SingleCurrency } from '@/types/currency-types';
import { findElement, isBynCurrency } from './helpers';

const conversion = (data: FormData, currencies: SingleCurrency[]): number => {
  const curOneCheck = isBynCurrency(data.curOne);
  const curTwoCheck = isBynCurrency(data.curTwo);
  const isBothCurrByn = curOneCheck && curTwoCheck;
  const bothCurrCheck = (curOneCheck && curTwoCheck) === false;
  if (isBothCurrByn) {
    const result = data.multiplier;
    return result;
  }
  if (curOneCheck) {
    const findedCurrency = findElement(currencies, data.curTwo);
    const calcResult = calcBynMultiConversion(
      findedCurrency.Cur_Scale,
      findedCurrency.Cur_OfficialRate,
      data.multiplier
    );
    return calcResult;
  }
  if (curTwoCheck) {
    const findedCurrency = findElement(currencies, data.curOne);
    const calcResult = calcBynMultiConversion(
      findedCurrency.Cur_Scale,
      findedCurrency.Cur_OfficialRate,
      data.multiplier
    );
    return calcResult;
  }
  if (bothCurrCheck) {
    const firstCurrency = findElement(currencies, data.curOne);
    const secondCurrency = findElement(currencies, data.curTwo);
    const calcResult = calcConversion(secondCurrency, firstCurrency, data.multiplier);
    return calcResult;
  }
  return 1;
};

export default conversion;
