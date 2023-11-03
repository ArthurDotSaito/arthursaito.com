import Page from '@/layout/Page';
import { AppProps } from 'next/app';

export default function Index({ Component, pageProps }: AppProps) {
  return (
    <>
      <Page>
        <Component {...pageProps}></Component>
      </Page>
    </>
  );
}
