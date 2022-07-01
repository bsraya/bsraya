import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    var bgColor = useColorModeValue('#fdd2d8', '#b0646f')
    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            variant="ghost"
            onMouseDown={toggleColorMode}
            mr={2}
            _hover={{
                // if theme == light, set background to #fdd2d8
                backgroundColor: bgColor,
            }}
            {...props}
        />
    )
}