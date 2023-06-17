import styles from '@/components/CurrencySelect/select.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { currencySlice } from '@/rtk/store/reducers/CurrencySlice';
import { SingleCurrency } from '@/types/currency-types';
import { useEffect } from 'react';

const CurrencySelect = () => {
  const { currArray, defaultCurr } = useAppSelector((state) => state.currencyReducer);
  const dispatch = useAppDispatch();
  const { setDefaultCurrency, setDefaultCurrId } = currencySlice.actions;

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDefaultCurrency(e.target.value));
  };

  useEffect(() => {
    currArray.filter((e) => {
      if (e.Cur_Abbreviation === defaultCurr) {
        dispatch(setDefaultCurrId(e.Cur_ID));
      }
    });
  }, [currArray, defaultCurr, dispatch, setDefaultCurrId]);

  return (
    <select
      onChange={onChange}
      className={styles.select}
      defaultValue={defaultCurr}
      name="defaultCurrency"
      id="defaultCurrency"
    >
      <option className={styles.option} value="BYN">
        BYN Белорусский рубль
      </option>
      {currArray &&
        currArray.map((rate: SingleCurrency) => {
          return (
            <option
              className={styles.option}
              placeholder={rate.Cur_Name}
              key={rate.Cur_ID}
              value={rate.Cur_Abbreviation}
            >
              <>{rate.Cur_Abbreviation}</>
              &nbsp;&nbsp;
              <>{rate.Cur_Name}</>
            </option>
          );
        })}
    </select>
  );
};

export default CurrencySelect;
