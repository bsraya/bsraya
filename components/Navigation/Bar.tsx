import {
    Box,
    Flex,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react'
import Nextlink from 'next/link'
import Dropdown from './Dropdown'
import Navlink from './Link'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <Flex
            mt="1.5rem"
            as="nav"
            align="center"
        >
            <Nextlink href="/" passHref>
                <Text
                    fontFamily="Open Sans, sans-serif"
                    fontSize="2rem"
                    ml="1rem"
                    fontWeight="700"
                    _hover={{
                        color: "#023C72",
                        cursor: "pointer",
                    }}
                >Bijon</Text>
            </Nextlink>
            
            <VStack
                ml="auto"
                position="fixed"
                top="1.5rem"
                right="5"
                bg="white"
                _dark={{
                    bg: "gray.700",
                }}
                alignItems="self-end"
            >
                {
                    isDesktop ? (
                        <>
                            <Navlink href="/">Home</Navlink>
                            <Navlink href="/about">About</Navlink>
                            <Navlink href="/blog">Blog</Navlink>
                            <Navlink href="/portfolio">Portfolio</Navlink>
                        </>
                    ) : (
                        <Dropdown />
                    )
                }
            </VStack>
        </Flex>
    )
}