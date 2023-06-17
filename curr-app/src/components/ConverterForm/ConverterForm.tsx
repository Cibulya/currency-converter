import styles from '@/components/ConverterForm/converterform.module.scss';
import currencyAPI from '@/currency-api/currency-service';
import { findElement, isBynCurrency } from '@/helpers/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { calcBynMultiConversion, calcConversion } from '@/math/math-operations';
import { currencySlice } from '@/rtk/store/reducers/CurrencySlice';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';

interface FormData {
  curOne: string;
  curTwo: string;
  multiplier: number;
}

const ConverterForm = () => {
  const { data: currencies } = currencyAPI.useGetAllCurrencyesQuery('');
  const { result } = useAppSelector((state) => state.currencyReducer);
  const dispatch = useAppDispatch();
  const { setResult } = currencySlice.actions;
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { curOne: 'BYN', curTwo: 'BYN', multiplier: 1 },
  });
  const resetForm = () => {
    reset({
      curOne: 'BYN',
      curTwo: 'BYN',
      multiplier: 1,
    });
    dispatch(setResult(1));
  };
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (currencies) {
      const curOneCheck = isBynCurrency(data.curOne);
      const curTwoCheck = isBynCurrency(data.curTwo);
      const isBothCurrByn = curOneCheck && curTwoCheck;
      const bothCurrCheck = (curOneCheck && curTwoCheck) === false;
      switch (true) {
        case isBothCurrByn: {
          dispatch(setResult(data.multiplier));
          break;
        }
        case curOneCheck: {
          const findedCurrency = findElement(currencies, data.curTwo);
          const calcResult = calcBynMultiConversion(
            findedCurrency.Cur_Scale,
            findedCurrency.Cur_OfficialRate,
            data.multiplier
          );
          dispatch(setResult(calcResult));
          break;
        }
        case curTwoCheck: {
          const findedCurrency = findElement(currencies, data.curOne);
          const calcResult = calcBynMultiConversion(
            findedCurrency.Cur_Scale,
            findedCurrency.Cur_OfficialRate,
            data.multiplier
          );
          dispatch(setResult(calcResult));
          break;
        }
        case bothCurrCheck: {
          const firstCurrency = findElement(currencies, data.curOne);
          const secondCurrency = findElement(currencies, data.curTwo);
          const calcResult = calcConversion(secondCurrency, firstCurrency, data.multiplier);
          dispatch(setResult(calcResult));
          break;
        }
        default: {
          dispatch(setResult(data.multiplier));
        }
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.title}>Выберите валюты для конвертации</p>
      <div className={styles.currencies__container}>
        <label htmlFor="curOne">
          <select
            className={styles.select}
            {...register('curOne')}
            defaultValue="BYN"
            name="curOne"
          >
            <option value="BYN">Из: BYN Белорусский рубль</option>
            {currencies &&
              currencies.map((el) => {
                return (
                  <option key={el.Cur_ID} value={el.Cur_Abbreviation}>
                    Из:
                    {el.Cur_Abbreviation}
                    &nbsp;&nbsp;
                    {el.Cur_Name}
                  </option>
                );
              })}
          </select>
        </label>
        <label htmlFor="curTwo">
          <select
            className={styles.select}
            {...register('curTwo')}
            name="curTwo"
            defaultValue="BYN"
          >
            <option value="BYN">В:&nbsp;&nbsp;BYN Белорусский рубль</option>
            {currencies &&
              currencies.map((el) => {
                return (
                  <option id={el.Cur_ID.toString()} key={el.Cur_ID} value={el.Cur_Abbreviation}>
                    В:&nbsp;&nbsp;
                    {el.Cur_Abbreviation}
                    &nbsp;&nbsp;
                    {el.Cur_Name}
                  </option>
                );
              })}
          </select>
        </label>
        <div className={styles.rate__container}>
          <div>Количество</div>
          <label htmlFor="multiplier">
            <input
              {...register('multiplier')}
              className={styles.rate__input}
              type="number"
              name="multiplier"
              defaultValue="1"
              min="1"
            />
          </label>
        </div>
        <div className={styles.result__container}>
          <div>Сумма :</div>
          <input className={styles.result} value={result} type="text" disabled />
        </div>
        <div className={styles.form__controls}>
          <input className={styles.controls} type="submit" value="Конвертировать" />
          <button onClick={resetForm} className={styles.controls} type="button">
            Сбросить
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConverterForm;
