import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        body: `Open Sans, sans-serif`,
        heading: `Open Sans, sans-serif`,
        mono: "Fira Code",
    },
    colors: {
        lighter: "#9DECF9",
        light: "#76E4F7",
        dark: "#00A3C4",
        darker: "#086F83",
    },
    styles: {
        global: () => ({
            "*": {
                borderStyle: "none",
            },
            body: {
                fontSize: "22px",
                lineHeight: "2",
            },
            a: {
                textUnderlinePosition: "under",
                fontStyle: "italic",
            }
        })
    }
})


export default theme