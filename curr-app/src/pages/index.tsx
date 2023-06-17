import AllCurrencies from '@/components/AllCurrencies/AllCurrencies';
import CurrencySelect from '@/components/CurrencySelect/CurrencySelect';
import style from '@/styles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Currency-app: Home</title>
        <meta name="description" content="Currency converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.content}>
        <CurrencySelect />
        <AllCurrencies />
      </div>
    </>
  );
}
