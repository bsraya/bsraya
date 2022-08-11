import {
    Link,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    Box,
    IconButton,
    useColorModeValue,
    VStack,
    Icon
} from '@chakra-ui/react'
import { FaBookmark } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

function CustomButton({ onOpen }: { onOpen: () => void }) {
    const color = useColorModeValue("dark", "light")
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
            cursor="pointer"
            onClick={onOpen}
            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
            borderRadius="md"
            _focus={{
                outline: 'none',
            }}
            _disabled={{
                opacity: 0.5,
                cursor: 'not-allowed',
            }}
            // set box shadow for dark mode
            _dark={{
                boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
            }}
        >
            <IconButton
                aria-label='Table of contents button'
                icon={
                    // <ChevronRightIcon color={color} />
                    <Icon as={FaBookmark} color={color} />
                }
                colorScheme="transparent"
                border="2px solid"
                borderColor={color}
                bgColor="white"
                _dark={{
                    bgColor: "gray.800",
                }}
            />
        </Box>
    )
}

function CustomLink({ heading, onClose }: { heading: string, onClose: () => void }) {
    const color = useColorModeValue("dark", "light")
    return (
        <Link
            as="a"
            color="gray.500"
            variant="ghost"
            width="100%"
            fontSize="md"
            fontWeight="bold"
            textDecoration="none"
            cursor="pointer"
            _hover={{
                color: color,
                textDecoration: 'underline'
            }}
            onClick={() => {
                const id = heading.toLowerCase().replace(/\s+/g, '-')
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({
                        block: 'start',
                    })
                }
                setTimeout(() => {
                    onClose()
                }, 700)
            }}
        >
            # {heading}
        </Link>
    )
}

export default function MobileToC({ headings }: { headings: string[] }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            position="fixed"
            bottom={20}
            right={5}
            zIndex={10}
        >
            <CustomButton onOpen={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontWeight="bold">Table of Contents</DrawerHeader>
                    <DrawerBody>
                        <VStack>
                        {
                            headings.map((heading: string, index: number) => (
                                <CustomLink key={index} heading={heading} onClose={onClose} />
                            ))
                        }
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}