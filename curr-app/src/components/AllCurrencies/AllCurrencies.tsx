import styles from '@/components/AllCurrencies/allcurrencies.module.scss';
import {
  currencyList,
  getSingleCurrecyInfo,
  getSingleCurrecyRate,
} from '@/currency-api/currency-requests';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { calcBynSingleConsversion, calcScale, singleConversion } from '@/math/math-operations';
import { currencySlice } from '@/rtk/store/reducers/CurrencySlice';
import { useCallback, useEffect } from 'react';
import CurrencyElement from '../CurrencyElement/CurrencyElement';
const AllCurrencies = () => {
  const { currArray, defaultCurrId, defaultCurr } = useAppSelector(
    (state) => state.currencyReducer
  );
  const dispatch = useAppDispatch();
  const { setCurrenciesList } = currencySlice.actions;

  const setCurrencies = useCallback(async () => {
    try {
      const newRate = await getSingleCurrecyRate(defaultCurrId);
      const curData = await currencyList();
      const newName = await getSingleCurrecyInfo();
      curData.forEach((el) => {
        newName.forEach((e) => {
          if (e.Cur_ID === el.Cur_ID) {
            el.Cur_Name = e.Cur_Name;
          }
        });
        if (defaultCurr !== 'BYN') {
          if (newRate) {
            el.Cur_OfficialRate = singleConversion(
              el.Cur_OfficialRate,
              newRate.Cur_OfficialRate,
              newRate.Cur_Scale,
              el.Cur_Scale
            );
            el.Cur_Scale = calcScale(newRate.Cur_Scale, newRate.Cur_Scale);
          }
        } else {
          curData.forEach((element) => {
            element.Cur_OfficialRate = calcBynSingleConsversion(
              element.Cur_OfficialRate,
              element.Cur_Scale
            );
            element.Cur_Scale = calcBynSingleConsversion(element.Cur_Scale, element.Cur_Scale);
          });
        }
      });
      dispatch(setCurrenciesList(curData));
    } catch (e) {
      if (e) {
        console.log(e);
      }
    }
  }, [defaultCurr, defaultCurrId, dispatch, setCurrenciesList]);

  useEffect(() => {
    setCurrencies();
  }, [defaultCurr, defaultCurrId, dispatch, setCurrencies, setCurrenciesList]);

  return (
    <ul className={styles.list}>
      {currArray &&
        currArray.map((cur) => (
          <CurrencyElement
            key={cur.Cur_ID}
            Cur_Abbreviation={cur.Cur_Abbreviation}
            Cur_Name={cur.Cur_Name}
            Cur_OfficialRate={cur.Cur_OfficialRate}
            Cur_Scale={cur.Cur_Scale}
            Cur_ID={cur.Cur_ID}
            Date={cur.Date}
          />
        ))}
    </ul>
  );
};

export default AllCurrencies;
