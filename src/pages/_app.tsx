import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import { Provider as Rtk } from 'react-redux';
import store from '@/components/redux/app/store';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps}>
      <Rtk store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Rtk>
    </SessionProvider>
  );
}
