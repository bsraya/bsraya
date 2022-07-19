import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    fonts: {
        body: "Inter, system-ui, sans-serif",
        heading: "Inter, system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    colors: {
        lighter: "#E9D8FD",
        light: "#B794F4",
        dark: "#6B46C1",
        darker: "#44337A"
    },
})


export default theme