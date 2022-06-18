import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Switch(): JSX.Element{
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button
            onClick={toggleColorMode}
            backgroundColor={
                useColorModeValue('gray.200', 'gray.700')
            }
            mx={2}
        >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}