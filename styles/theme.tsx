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
        // links: "#6a94ac",
        // links: "#4e23d8",
        // links: "#9b89b4",
        links: "#a46aff",
    },
    styles: {
        global: () => ({
            "*": {
                borderStyle: "none",
            },
            body: {
                fontSize: "20px",
                lineHeight: "1.75",
            },
            a: {
                textUnderlinePosition: "under"
            }
        })
    }
})


export default theme