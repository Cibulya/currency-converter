import styles from '@/components/DropDown/dropdown.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { currencySlice } from '@/rtk/store/reducers/CurrencySlice';
import React, { useState } from 'react';

const DropDown = () => {
  const { currArray, defaultCurr, defaultCurrId } = useAppSelector(
    (state) => state.currencyReducer
  );
  const [isActive, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { setDefaultCurrency, setDefaultCurrId } = currencySlice.actions;

  const setDefaultCurrencyData = (e: React.MouseEvent) => {
    dispatch(setDefaultCurrId(Number(e.currentTarget.id)));
    if (defaultCurrId === 0) {
      dispatch(setDefaultCurrency('BYN'));
    } else {
      currArray.filter((el) => {
        if (el.Cur_ID === Number(e.currentTarget.id)) {
          dispatch(setDefaultCurrency(el.Cur_Abbreviation));
        }
      });
    }

    setActive(!isActive);
  };

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.dropdown}>
      <button type="button" onClick={handleClick} className={styles.dropdown__button}>
        Выбраная валюта: {defaultCurr}
      </button>
      <div className={isActive ? styles.dropdown__content__active : styles.dropdown__content}>
        <div onClick={setDefaultCurrencyData} id="0" className={styles.dropdown__item}>
          <div className={styles.dropdown__abb}>BYN</div>
          <div>Булорусский рубль</div>
        </div>
        {currArray &&
          currArray.map((option) => {
            return (
              <div
                onClick={setDefaultCurrencyData}
                key={option.Cur_ID}
                id={option.Cur_ID.toString()}
                className={styles.dropdown__item}
              >
                <div className={styles.dropdown__abb}>{option.Cur_Abbreviation}</div>
                <div>{option.Cur_Name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DropDown;
