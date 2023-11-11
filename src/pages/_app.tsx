// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';
import { Providers } from '@/app/Providers';
import React from 'react';
import Head from 'next/head';
import MotionAnimate from '@/components/MotionAnimate';
import router, { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <React.StrictMode>
      <Head>
        <title>Arthur Saito</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Providers>
        <Page>
          <MotionAnimate key={router.route}>
            <Component {...pageProps} />
          </MotionAnimate>
        </Page>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
