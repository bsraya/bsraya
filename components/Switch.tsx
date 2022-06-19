import { useColorMode, IconButton, IconButtonProps } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            onMouseDown={toggleColorMode}
            {...props}
        />
    )
}