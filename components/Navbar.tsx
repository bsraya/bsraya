import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Text,

} from '@chakra-ui/react'
import Navlink from './Navlink'
import Link from 'next/link'
import Switch from './Switch'

export default function Navigation(): JSX.Element {
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
                        Logo
                    </Link>
                </Flex>
                <Flex marginLeft="auto">
                    <Flex
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Navlink href="/about">About</Navlink>
                        <Navlink href="/portfolio">Portfolio</Navlink>
                    </Flex>
                    <Switch />
                    <Menu>
                        <MenuButton
                            display={{ base: 'none', md: 'none', sm: 'flex' }}
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                        >
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
                            <Link href="/about">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="/portfolio">
                                Portfolio
                            </Link>
                        </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    )
}