import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light"
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        body: `PT Serif, serif`,
        heading: `Fira Code, sans-serif`,
        mono: "Fira Code, , sans-serif",
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