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
    const { colorMode } = useColorMode()
    const isDesktop = useBreakpointValue({ base: false, md: true })
    const imgUrl = colorMode === 'light' ? '/images/icon-light.png' : '/images/icon-dark.png'
    
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
                fontFamily="heading"
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
                            <Dropdown />
                            <Flex mx="auto">
                                <Nextlink href="/">
                                    <Link cursor="pointer">    
                                        <IconButton
                                            aria-label="Logo"
                                            icon={
                                                <Image
                                                    src={imgUrl}
                                                    alt="Logo"
                                                    height={32}
                                                    width={64}
                                                    priority
                                                    loading='eager'
                                                />
                                            }
                                            bg="transparent"
                                            _hover={{ bg: 'transparent' }}
                                        />
                                    </Link>
                                </Nextlink>
                            </Flex>
                            <Switch />
                        </>
                    )
                }
            </Flex>
        </Box>
    )
}