import * as React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'
import Switch from './Switch'

const Header: React.FC = () => {
    const navHoverBg = 'gray.600'

    const Nav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `
    
    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            minWidth={768}
            as="nav"
            px={[2, 6, 6]}
            py={2}
            mt={8}
            mb={[0, 0, 8]}
            mx="auto"
        >
            <Link href="/">
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg }}>
                    Home
                </Button> 
            </Link>
            <Link href="/about">
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg }}>
                    About
                </Button>     
            </Link>
            <Link href="/resume">
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg }}>
                    Resume
                </Button>    
            </Link>
            <Link href="/portfolio">
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg }}>
                    Portfolio
                </Button>   
            </Link>
            <Switch />
        </Flex>
    );
}

export default Header