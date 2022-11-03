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
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                        rel="stylesheet">
                    </link>
                    <link
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