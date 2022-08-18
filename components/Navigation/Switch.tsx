import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, IconButton } from '@chakra-ui/react'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            isRound
            {...props}
            bg="transparent"
            color='gray.800'
            _dark={{
                color: 'whiteAlpha.900',
            }}
            onMouseDown={toggleColorMode}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        />
    )
}