import { extendTheme, type ThemeConfig, theme as base, textDecoration } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

// customize fonts add "config" to the theme as well
const theme = extendTheme(config, {
    ...extendTheme,
    fonts: {
        // set body font family to 'Cormorant Garamond', serif
        body: `Alice, serif`,
        heading: `Montserrat`,
        mono: "Fira Code",
    },
    // colors: {
    //     lighter: "#E9D8FD",
    //     light: "#B794F4",
    //     dark: "#6B46C1",
    //     darker: "#44337A"
    // },
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