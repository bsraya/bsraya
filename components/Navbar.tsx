import {
    Box,
    Flex,
    Text,
    useMediaQuery,
} from '@chakra-ui/react'
import Navlink from './Navlink'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
    return (
        <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            width="100%"
            as="nav"
        >
            <Flex
                py={2}
                px={5}
                maxW="container.sm"
                align="center"
                mx="auto"
            >
                <Flex>
                    <Link href="/" passHref>
                        <Text
                            css={{
                                fontFamily: "Virgil"
                            }}
                            
                            _hover={{
                                cursor: 'pointer',
                            }}
                        >Bijon S.R.</Text>
                    </Link>
                </Flex>
                <Flex marginLeft="auto">
                    {
                        isMobile ? (
                            <>
                                <Switch />
                                <Dropdown />
                            </>
                        ): (
                            <>
                                <Flex>
                                    <Navlink href="/about">About</Navlink>
                                    <Navlink href="/portfolio">Portfolio</Navlink>
                                </Flex>
                                <Switch />
                            </>
                        )
                    }
                </Flex>
            </Flex>
        </Box>
    )
}