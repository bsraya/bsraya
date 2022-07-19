import 'katex/dist/katex.min.css'
import theme from '../styles/theme'
import type { AppProps } from 'next/app'
import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from '@chakra-ui/react'
import { NextApiRequest } from 'next'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider
            theme={theme}
            colorModeManager={
                typeof pageProps.cookies === 'string'
                ? cookieStorageManagerSSR(pageProps.cookies)
                : localStorageManager
            }
        >
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export const getInitialProps = (req: NextApiRequest) => {
    const cookies = req.headers.cookie
    return {
        cookies,
    }
}