import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            colorScheme="transparent"
            color="pink.300"
            _dark={{
                color: "pink.600",
            }}
            onMouseDown={toggleColorMode}
            _hover={{
                bgColor: "pink.50"
            }}
            {...props}
        />
    )
}