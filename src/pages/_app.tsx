// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';
import { Providers } from '@/app/Providers';
import React from 'react';
import { styled } from '../../stitches.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Providers>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Providers>
    </React.StrictMode>
  );
}

export default App;
