import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        body: `Inter, ${base.fonts?.body}`,
        heading: `Montserrat, ${base.fonts?.heading}`,
        mono: "Fira Code",
    },
    colors: {
        lighter: "#E9D8FD",
        light: "#B794F4",
        dark: "#6B46C1",
        darker: "#44337A"
    },
    styles: {
        global: () => ({
            body: {
                fontSize: "18px",
                lineHeight: "2",
            },
            a: {
                textUnderlinePosition: "under"
            }
        })
    }
})


export default theme