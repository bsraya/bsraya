import {
  Box,
  Text,
  Menu,
  Link,
  HStack,
  VStack,
  IconButton,
  MenuItem,
  MenuList,
  MenuButton,
  MenuDivider,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiPencil } from "react-icons/bi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiGithub, FiHome, FiUser, FiFolder } from "react-icons/fi";

export default function Dropdown(): JSX.Element {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Box>
      {
        isMobile && (
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              icon={
                <HamburgerIcon
                  color='gray.800'
                  _dark={{
                    color: 'whiteAlpha.900'
                  }}
                />
              }
              isRound
              variant="ghost"
            />
            <MenuList
              zIndex={5}
              border="2px solid"
              borderColor="gray.800"
              alignItems={["center", "flex-start"]}
              boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
              _dark={{
                borderColor: 'whiteAlpha.900',
                boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
              }}
            >
              <Link href="https://github.com/bsraya" _hover={{ textDecoration: 'none' }} isExternal>
                <MenuItem>
                  <HStack >
                    <FiGithub size="1.5rem" style={{marginRight: `0.5rem`}}/>
                    <VStack justify="start" alignItems="left">
                      <Text fontWeight="500">Bijon Setyawan Raya</Text>
                      <Text size="sm" color="gray.500" mt="0 !important">
                        @bsraya
                      </Text>
                    </VStack>
                  </HStack>
                </MenuItem>
              </Link>
              <MenuDivider />
              <NextLink href="/">
                <MenuItem fontWeight="500">
                  <FiHome /><Text ml={2}>Home</Text>
                </MenuItem>
              </NextLink>
              <NextLink href="/about">
                <MenuItem fontWeight="500">
                  <FiUser /><Text ml={2}>About</Text>
                </MenuItem>
              </NextLink>
              <NextLink href="/blog" passHref>
                <MenuItem fontWeight="500">
                  <BiPencil /><Text ml={2}>Blog</Text>
                </MenuItem>
              </NextLink>
              <NextLink href="/portfolio" passHref>
                <MenuItem fontWeight="500">
                  <FiFolder /><Text ml={2}>Portfolio</Text>
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        )
      }
    </Box>
  )
}