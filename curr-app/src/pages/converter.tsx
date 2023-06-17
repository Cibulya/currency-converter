import CurrConverter from '@/components/Converter/Converter';
import Head from 'next/head';
const Converter = () => {
  return (
    <>
      <Head>
        <title>Currency-app: Converter</title>
      </Head>
      <CurrConverter />
    </>
  );
};

export default Converter;
