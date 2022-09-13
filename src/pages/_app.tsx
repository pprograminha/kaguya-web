import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query';

import { theme } from '../styles/theme';
import { AuthProvider } from 'contexts/AuthContext';
import { queryClient } from '@/services/reactQueryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
