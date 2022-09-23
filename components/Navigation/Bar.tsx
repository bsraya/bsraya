import {
    Box,
    Flex,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
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
                mb="5rem"
                mx="auto"
                align="center"
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
                            <Nextlink href="/" passHref>
                                <Text
                                    fontFamily="Fira Code, monospace"
                                    fontWeight="bold"
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        transition: "all 0.2s ease-in-out",
                                        cursor: "pointer",
                                    }}
                                >@bsraya</Text>
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