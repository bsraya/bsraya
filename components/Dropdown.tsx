import {
    Avatar,
    Button,
    Center,
    LinkBox,
    LinkOverlay,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Dropdown(): JSX.Element {
    return (
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
                <LinkBox>
                    <MenuItem>
                        <NextLink href="/" passHref>
                            <LinkOverlay>
                                Home
                            </LinkOverlay>
                        </NextLink>
                    </MenuItem>
                </LinkBox>
                <LinkBox>
                    <MenuItem>
                        <NextLink href="/about" passHref>
                            <LinkOverlay>
                                About
                            </LinkOverlay>
                        </NextLink>
                    </MenuItem>
                </LinkBox>
                <LinkBox>
                    <MenuItem>
                        <NextLink href="/portfolio" passHref>
                            <LinkOverlay>
                                portfolio
                            </LinkOverlay>
                        </NextLink>
                    </MenuItem>
                </LinkBox>
            </MenuList>
        </Menu>
    )
}