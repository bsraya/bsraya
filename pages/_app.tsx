import 'katex/dist/katex.min.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from '../styles/style'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
