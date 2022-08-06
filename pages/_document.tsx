import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html
                lang="en"
                style={{
                    scrollBehavior: 'smooth'
                }}
            >
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        as="font"
                        rel="preload"
                        crossOrigin="anonymous"
                        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                    />
                    <link
                        as="font"
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    />
                    <link
                        as="font"
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
                    />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}