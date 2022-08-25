import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        body: `Inter, sans-serif`,
        heading: `Montserrat, serif`,
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
            body: {
                fontSize: "18px",
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