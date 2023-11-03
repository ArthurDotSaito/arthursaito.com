// pages/_app.js
import Page from '@/layout/Page';
import '../app/layout';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
