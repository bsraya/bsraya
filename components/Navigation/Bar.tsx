import {
    Box,
    Flex,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import Navlink from './Link'
import Nextlink from 'next/link'
import Dropdown from './Dropdown'

export default function Navigation(): JSX.Element {
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <Flex
            mt="1.5rem"
            as="nav"
        >
            <Nextlink href="/" passHref>
                <Text
                    fontFamily="Fira Code"
                    fontSize="2rem"
                    ml="1rem"
                    _hover={{
                        color: "#023C72",
                        cursor: "pointer",
                    }}
                >bsraya</Text>
            </Nextlink>
            
            <Box ml="auto">
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
            </Box>
        </Flex>
    )
}