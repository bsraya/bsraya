import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            color={color}
            bg="transparent"
            onMouseDown={toggleColorMode}
            {...props}
        />
    )
}