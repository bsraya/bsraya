import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

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
})


export default theme