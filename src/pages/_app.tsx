// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';
import { Providers } from '@/app/Providers';
import React from 'react';
import Head from 'next/head';
import MotionAnimate from '@/components/MotionAnimate';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = (Component as any).Layout || Page;
  return (
    <React.StrictMode>
      <Head>
        <title>Arthur Saito</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Providers>
        <Layout {...pageProps}>
          <MotionAnimate key={router.route}>
            <Component {...pageProps} />
          </MotionAnimate>
        </Layout>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
