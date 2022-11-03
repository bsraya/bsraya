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
        <Flex
            mt={5}
            as="nav"
            align="center"
            fontFamily="Open Sans, sans-serif"
        >
            <Nextlink href="/" passHref>
                <Text
                    fontFamily="PT Serif, serif"
                    fontWeight="bold"
                    fontSize="2xl"
                    ml="2rem"
                    _hover={{
                        transform: "translateY(-2px)",
                        transition: "all 0.2s ease-in-out",
                        cursor: "pointer",
                    }}
                >Bijon S. Raya</Text>
            </Nextlink>
            {
                isDesktop ? (
                    <Flex ml="auto" mr="2rem" border="1px solid" borderColor="gray.200">
                        <Navlink href="/">Home</Navlink>
                        <Navlink href="/about">About</Navlink>
                        <Navlink href="/blog">Blog</Navlink>
                        <Navlink href="/portfolio">Portfolio</Navlink>
                    </Flex>
                ) : (
                    <Flex ml="auto" mr="2rem">
                        <Switch />
                        <Dropdown />
                    </Flex>
                )
            }
        </Flex>
    )
}