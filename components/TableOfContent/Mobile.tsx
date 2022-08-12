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
import { IoBook } from 'react-icons/io5'
import React, { useState, useEffect } from 'react'

export default function MobileToC({ headings }: { headings: string[] }) {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const borderColor = useColorModeValue('dark', 'light')
    const bgColor = useColorModeValue('white', 'gray.800')
    const color = useColorModeValue('gray.800', 'gray,400')

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
                                <Icon as={IoBook} color={borderColor} />
                            }
                            variant="ghost"
                            border="2px solid"
                            borderColor={borderColor}
                            borderRadius="md"
                            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                            _dark={{
                                boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                            }}
                            colorScheme="transparent"
                            bgColor={bgColor}
                        />
                        <MenuList
                            zIndex={5}
                            border="2px solid"
                            borderColor={borderColor}
                            alignItems={["center", "flex-start"]}
                            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                            _dark={{
                                boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                            }}
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
                                    <Link
                                        href={`#${heading}`}
                                        key={index}
                                        _hover={{ textDecoration: 'none' }}
                                        onClick={() => {
                                            const id = heading.toLowerCase().replace(/\s+/g, '-')
                                            const element = document.getElementById(id)
                                            if (element) {
                                                element.scrollIntoView({
                                                    block: 'start',
                                                })
                                            }
                                        }}
                                    >
                                        <MenuItem fontSize="md" color={color}>
                                            {index+1}. {heading}
                                        </MenuItem>
                                    </Link>
                                ))
                            }
                        </MenuList>
                    </Menu>
                )
            }
        </Box>
    )
}