import {
    Box,
    Link,
    Flex,
    useColorMode,
    useBreakpointValue,
    IconButton,
} from '@chakra-ui/react'
import Image from 'next/image'
import Nextlink from 'next/link'
import Dropdown from './Dropdown'
import Navlink from './Link'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
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
                mt={5}
                fontFamily="Montserrat, sans-serif"
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
                            <Flex mr="auto">
                                <Dropdown />
                            </Flex>
                            <Switch />
                        </>
                    )
                }
            </Flex>
        </Box>
    )
}