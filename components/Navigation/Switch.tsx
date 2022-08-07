import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    const fontColor = useColorModeValue('dark', 'light')
    const hoveredBgColor = useColorModeValue('lighter', 'darker')
    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            colorScheme="transparent"
            color={fontColor}
            onMouseDown={toggleColorMode}
            _hover={{
                bgColor: hoveredBgColor
            }}
            {...props}
        />
    )
}