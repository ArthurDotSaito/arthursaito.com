// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';
import { Providers } from '@/app/Providers';
import React from 'react';
import Head from 'next/head';
import MotionAnimate from '@/components/MotionAnimate';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Arthur Saito</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Providers>
        <Page>
          <MotionAnimate>
            <Component {...pageProps} />
          </MotionAnimate>
        </Page>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
