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
    const color = useColorModeValue("dark", "light")
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
                color: color
            }}
            onClick={handleClick}
        >
            # {heading}
        </Text>
    )
}

export default function FloatingToC({ headings }: { headings: string[] }) {
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
                        position="fixed"
                        // put it on the right top corner
                        top={5}
                        right={5}
                        zIndex={10}
                        display={isVisible ? 'block' : 'none'}
                        // set the width of the floating table of contents to be dynamic
                        // based on the size of right side of the screen
                        width="300px"
                        p={5}
                        borderRadius={10}
                        bg="gray.900"
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