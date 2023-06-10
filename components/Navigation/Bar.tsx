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
                    fontFamily="heading"
                    fontSize="2xl"
                    fontWeight="700"
                    transform='translateY(0px)'
                    transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
                    _hover={{
                        transform: 'translateY(-5px)'
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