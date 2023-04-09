import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

const query = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={query}>
      <CookiesProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  );
}
