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
    useMediaQuery
} from '@chakra-ui/react'
import Navlink from './Navlink'
import Link from 'next/link'
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
                        >Bijon Setyawan Raya</Text>
                    </Link>
                </Flex>
                <Flex marginLeft="auto">
                    {
                        isMobile ? (
                            <>
                                <Switch />
                                <Menu>
                                    <MenuButton
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
                                    <MenuItem my={5} _hover={{ backgroundColor: 'transparent' }}>
                                        <Link href="/about">
                                            About
                                        </Link>
                                    </MenuItem>
                                    <MenuItem my={5} _hover={{ backgroundColor: 'transparent' }}>
                                        <Link href="/portfolio">
                                            Portfolio
                                        </Link>
                                    </MenuItem>
                                    </MenuList>
                                </Menu>
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