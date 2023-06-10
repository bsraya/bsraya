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
            body: {
                fontSize: "18px",
                lineHeight: "1.75",
            },
            a: {
                textUnderlinePosition: "under"
            }
        })
    }
})


export default theme