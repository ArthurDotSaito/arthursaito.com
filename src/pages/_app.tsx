// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';
import { Providers } from '@/app/Providers';
import React from 'react';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Arthur Saito</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Providers>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
