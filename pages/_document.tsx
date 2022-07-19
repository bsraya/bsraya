import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        as="font"
                        rel="preload"
                        crossOrigin="anonymous"
                        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
                    />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}