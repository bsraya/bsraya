import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export default function SideToC({ headings }: { headings: string[] }) {
    const fontColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    const [isVisible, setIsVisible] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            // if the user has scrolled past the position of the table of contents
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
            zIndex={10}
            top="35%"
            left="0"
            position="fixed"
            display={isVisible ? 'block' : 'none'}
        >
            {
                headings.map((heading, index) => {
                    const id = heading.toLowerCase().replace(/\s+/g, '-')
                    return(
                        <Link
                            href={`#${id}`}
                            key={index}
                            color="gray.400"
                            _hover={{
                                textDecoration: 'none'
                            }}
                            onClick={() => {
                                const id = heading.toLowerCase().replace(/\s+/g, '-')
                                // get the position of the heading
                                const element = document.getElementById(id)
                                if (element) {
                                    element.scrollIntoView({
                                        block: 'start',
                                    })
                                }
                            }}
                        >
                            <Text
                                fontSize="md"
                                color="gray.400"
                                mb={5}
                                ml={-1}
                                _hover={{
                                    color: fontColor,
                                    fontSize: "xl"
                                }}
                                // smooth transition
                                transition="all 0.1s ease-in-out"
                            >
                                {/* {index+1}. {heading} */}
                                &mdash; {heading}
                            </Text>
                        </Link>
                    )
                })
            }
        </Box>
    )
}