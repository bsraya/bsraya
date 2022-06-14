import {
    Box,
    Flex,
    Avatar,
    Button,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center

} from '@chakra-ui/react'
import Navlink from './Navlink';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import styled from '@emotion/styled'

const Navbar = styled(Box)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
`

const Navigation: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Navbar
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
                maxW="container.md"
                align="center"
                mx="auto"
            >
                <Flex marginRight="auto">
                    <Navlink href="/">Home</Navlink>
                    <Navlink href="/about">About</Navlink>
                    <Navlink href="/resume">Resume</Navlink>
                    <Navlink href="/portfolio">Portfolio</Navlink>
                </Flex>
                <Stack direction={'row'} spacing={7}>
                    <Button
                        onClick={toggleColorMode}
                        backgroundColor={
                            useColorModeValue('gray.200', 'gray.700')
                        }
                    >
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Menu>
                        <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                            size={'sm'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <Text as="p">Bijon Setyawan Raya</Text>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>
                            <Link href="/">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/about">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/resume">
                                Resume
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/portfolio">
                                Portfolio
                            </Link>
                        </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </Navbar>
    )
}

export default Navigation