import { extendTheme } from "@chakra-ui/react"
import { ptSans, firaCode } from "./fonts"

// customize fonts add "config" to the theme as well
const theme = extendTheme({
    ...extendTheme,
    fonts: {
        body: `${ptSans.style.fontFamily}, sans-serif`,
        heading: `${firaCode.style.fontFamily}, sans-serif`,
        mono: `${firaCode.style.fontFamily}, monospace`,
    },
    styles: {
        global: () => ({
            "*": {
                borderStyle: "none",
            },
            p: {
                fontSize: "20px",
                lineHeight: "1.5",
            },
            h1: {
                lineHeight: "1.2",
            },
            h2: {
                lineHeight: "1.2",
            },
            h3: {
                lineHeight: "1.2",
            },
            h4: {
                lineHeight: "1.2",
            },
            h5: {
                lineHeight: "1.2",
            },
            h6: {
                lineHeight: "1.2",
            },
            a: {
                textUnderlinePosition: "under"
            }
        })
    }
})


export default theme