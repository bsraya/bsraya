import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en" style={{scrollBehavior: 'smooth'}}>
                <Head>
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