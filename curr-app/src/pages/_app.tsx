import Layout from '@/components/Layout/Layout';
import { setupStore } from '@/rtk/store/store';
import '@/styles/globals.scss';
import '@/styles/nullstyles.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
