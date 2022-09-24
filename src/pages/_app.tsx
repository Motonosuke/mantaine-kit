import { MantineProvider } from '@mantine/core';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NextApp: NextPage<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
};

export default NextApp;
