import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from '../context'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";
import store from '../context/redux/store';

function MyApp({ Component, pageProps }: AppProps) {

const queryClient = new QueryClient();
  return (
   <ChakraProvider>
      <QueryClientProvider client={queryClient}>
         <Provider store={store}>
            <UserContextProvider>
               <Component {...pageProps} />
            </UserContextProvider>
         </Provider>
     </QueryClientProvider>
  </ChakraProvider>)
}

export default MyApp
