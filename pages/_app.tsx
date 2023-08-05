import 'katex/dist/katex.min.css'
import theme from '../styles/theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            <Analytics />
        </ChakraProvider>
    )
}