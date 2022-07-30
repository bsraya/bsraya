import {
    Box,
    Link,
    Flex,
    useColorMode,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import Nextlink from 'next/link'
import Dropdown from './DropdownMenu'
import Navlink from './Navlink'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
    const { colorMode } = useColorMode()
    const isDesktop = useBreakpointValue({ base: false, md: true })
    return (
        <Box
            flexDirection="row"
            height="100%"
            width="100%"
            as="nav"
        >
            <Flex
                py={2}
                px={5}
                maxW="container.md"
                align="center"
                mx="auto"
            >
                {
                    isDesktop ? (
                        <>
                            <Flex mr="auto">
                                <Navlink href="/">Home</Navlink>
                                <Navlink href="/about">About</Navlink>
                                <Navlink href="/blog">Blog</Navlink>
                                <Navlink href="/portfolio">Portfolio</Navlink>
                            </Flex>
                            <Switch />
                        </>
                    ) : (
                        <>  
                            <Nextlink href="/">
                                <Link cursor="pointer">    
                                    {
                                        colorMode === 'dark' ? <img src="/images/icon-light.png" alt="logo" width={64} height={64} />
                                        : <img src="/images/icon-dark.png" alt="logo" width={64} height={64} />
                                    }
                                </Link>
                            </Nextlink>
                            
                            <Flex ml="auto">
                                <Switch />
                                <Dropdown />
                            </Flex>
                        </>
                    )
                }
            </Flex>
        </Box>
    )
}