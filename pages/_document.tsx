import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css" />
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}