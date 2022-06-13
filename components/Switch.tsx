import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Switch: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            aria-label="Toggle dark mode"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        />
    )
}

export default Switch