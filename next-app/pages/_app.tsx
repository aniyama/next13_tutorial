import type { AppProps } from 'next/app';
// import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
          suspense: true
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
)}
