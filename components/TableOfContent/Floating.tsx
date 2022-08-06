import {
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function FloatingLink ({ heading }: { heading: string }) {
    const hoverColor = useColorModeValue("dark", "light")
    const id = heading.toLowerCase().replace(/\s+/g, '-')
    const router = useRouter()

    const handleClick = () => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                block: 'start',
            })
        }
        router.push(`#${id}`)
    }

    return (
        <Text
            mt={4}
            mb={1}
            ml={2}
            fontSize="md"
            fontWeight="bold"
            cursor="pointer"
            textDecoration="none"
            _hover={{
                textDecoration: 'underline',
                color: hoverColor
            }}
            onClick={handleClick}
        >
            # {heading}
        </Text>
    )
}

export default function FloatingToC({ headings }: { headings: string[] }) {
    const bgColor = useColorModeValue('white', 'gray.800')
    const fontColor = useColorModeValue('black', 'white')
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
        <>
            {
                // if mdxSource.headings is not null, then render the headings
                headings !== null && headings.length > 0 && (
                    <Box
                        p={5}
                        top={5}
                        right={5}
                        zIndex={10}
                        bg={bgColor}
                        width="300px"
                        position="fixed"
                        borderRadius={10}
                        border="2px solid"
                        borderColor={fontColor}
                        display={isVisible ? 'block' : 'none'}
                        boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                        // set box shadow for dark mode
                        _dark={{
                            boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <Accordion
                            allowToggle
                            my={10}
                            // remove top and bottom border line
                            border="none"
                        >
                            <AccordionItem>
                                <AccordionButton>
                                    <Text size="lg" my={4} fontWeight="bold">
                                        Table of Content
                                    </Text>
                                    <AccordionIcon ml="auto" />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {
                                        headings.map((heading, index) => (
                                            <FloatingLink
                                                key={index}
                                                heading={heading}
                                            />
                                        ))
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                )
            }
        </>
    )
}