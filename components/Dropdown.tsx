import { HamburgerIcon } from "@chakra-ui/icons";
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
  Text,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Dropdown(): JSX.Element {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant={"link"}
      ></MenuButton>
      <MenuList alignItems={"center"}>
        <LinkBox>
          <MenuItem>
            <NextLink href="/" passHref>
              <LinkOverlay>Home</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <NextLink href="/about" passHref>
              <LinkOverlay>About</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
        <LinkBox>
          <MenuItem>
            <NextLink href="/portfolio" passHref>
              <LinkOverlay>Portfolio</LinkOverlay>
            </NextLink>
          </MenuItem>
        </LinkBox>
      </MenuList>
    </Menu>
  );
}
