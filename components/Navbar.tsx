import {
    Box,
    Flex,
    useColorMode,
    useBreakpointValue,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react'
import Nextlink from 'next/link'
import Dropdown from './DropdownMenu'
import Navlink from './Navlink'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDesktop = useBreakpointValue({ base: false, md: true })
    const hoveredBgColor = useColorModeValue('lighter', 'darker')
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
                                <IconButton
                                    aria-label="Home button"
                                    icon={
                                        colorMode === 'dark' ? <img src="/images/light.png" alt="logo" width={20} height={20} />
                                        : <img src="/images/dark.png" alt="logo" width={20} height={20} />
                                    }
                                    isRound
                                    colorScheme="transparent"
                                    _hover={{
                                        bgColor: hoveredBgColor
                                    }}
                                />   
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