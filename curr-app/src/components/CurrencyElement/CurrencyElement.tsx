import styles from '@/components/CurrencyElement/currency.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { SingleCurrency } from '@/types/currency-types';

const CurrencyElement = ({ ...props }: SingleCurrency) => {
  const { Cur_Abbreviation, Cur_OfficialRate, Cur_Scale, Date, Cur_Name } = props;
  const { defaultCurr } = useAppSelector((state) => state.currencyReducer);

  const date = Date.slice(0, 10);

  return (
    <li className={styles.list__item}>
      <span>{Cur_Name}</span>
      <span>Аббревиатура: {Cur_Abbreviation}</span>
      <span>
        {Cur_Scale} {Cur_Abbreviation} = {Cur_OfficialRate} {defaultCurr}
      </span>
      <span>Курс объявлен: {date}</span>
    </li>
  );
};

export default CurrencyElement;
