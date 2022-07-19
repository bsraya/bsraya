import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ColorModeSwitch({...props}): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            isRound
            variant="ghost"
            onMouseDown={toggleColorMode}
            _hover={{
                bgColor: "rgb(248, 175, 166, 0.2)"
            }}
            _pressed={{
                bgColor: "rgb(248, 175, 166, 0.2)"
            }}
            {...props}
        />
    )
}