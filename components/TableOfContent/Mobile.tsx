import {
    Box,
    Text,
    Link,
    Icon,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    MenuDivider,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'

export default function MobileToC({ headings }: { headings: string[] }) {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const color = useColorModeValue('gray.800', 'whiteAlpha.900')
    const [isVisible, setIsVisible] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 450
            if (isTop !== isAtTop) {
                setIsAtTop(isTop)
            }
            if (isTop !== isScrolling) {
                setIsScrolling(isTop)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isAtTop, isScrolling])

    useEffect(() => {
        if (isAtTop) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }, [isAtTop])

    return (
        <Box
            position="fixed"
            bottom={20}
            right={5}
            zIndex={10}
            display={isVisible ? 'block' : 'none'}
        >
            {
                isMobile && (
                    <Menu isLazy>
                        <MenuButton
                            as={IconButton}
                            icon={
                                <Icon as={AiOutlineMenuUnfold} color={color} />
                            }
                            variant="ghost"
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="md"
                            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                            colorScheme="transparent"
                            bgColor="white"
                        />
                        <MenuList
                            zIndex={5}
                            border="1px solid"
                            borderColor="gray.200"
                            alignItems={["center", "flex-start"]}
                            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                            fontFamily="heading"
                        >
                            <Text
                                size="md"
                                mx={3}
                                fontWeight="bold"
                            >
                                Table of Contents
                            </Text>
                            <MenuDivider />
                            {
                                headings.map((heading, index) => (
                                    <NextLink
                                        href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                                        key={index}
                                        onClick={() => {
                                            const id = heading.toLowerCase().replace(/\s+/g, '-')
                                            console.log(id)
                                            const element = document.getElementById(id)
                                            if (element) {
                                                element.scrollIntoView({
                                                    block: 'start',
                                                })
                                            }
                                        }}
                                    >
                                        <MenuItem fontSize="md" color={color}>
                                            {heading}
                                        </MenuItem>
                                    </NextLink>
                                ))
                            }
                        </MenuList>
                    </Menu>
                )
            }
        </Box>
    )
}