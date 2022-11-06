import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        body: `PT Serif, serif`,
        heading: `Fira Code, sans-serif`,
        mono: "Fira Code, , sans-serif",
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
                lineHeight: "1.5",
            },
            a: {
                textUnderlinePosition: "under"
            }
        })
    }
})


export default theme