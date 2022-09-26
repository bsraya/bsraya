import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
    Icon,
    Flex,
    useMediaQuery,
    Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useEffect, useState } from 'react'



function CustomLink({ heading }: { heading: string }) {
    const hoverColor = useColorModeValue("dark", "light")
    const router = useRouter()
    const id = heading.toLowerCase().replace(/\s+/g, '-')

    // smooth scroll to heading
    const handleClick = () => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        }

        router.push(`#${id}`)
    }

    return (
        <Heading
            as="h2"
            my={5}
            ml={5}
            size="md"
            cursor="pointer"
            textDecoration="none"
            _hover={{
                textDecoration: 'underline',
                color: hoverColor
            }}
            onClick={handleClick}
        >
            {heading}
        </Heading>
    )
}

export default function FixedToC({ headings }: { headings: string[] }) {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const ifHeadingsExist = (headings !== null && headings.length > 0)

    // set the table of contents to be fixed on the top side of the screen
    // when user has scrolled passed 450px
    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box width={ isFixed ? "auto" : "100%" } height={ifHeadingsExist ? "96px" : "0px"} position="relative" zIndex={999}>
            <Flex mx="auto" px="4" width="inherit" position={isFixed ? (isLargerThan768 ? 'fixed' : 'relative') : 'relative'} left="0" top="0">
            {
                // if mdxSource.headings is not null, then render the headings
                ifHeadingsExist && (
                    <Accordion
                        height="auto"
                        border="1px"
                        borderColor="gray.300"
                        allowToggle
                        my={5}
                        bg="white"
                        borderRadius="xl"
                        width="inherit"
                        _dark={{
                            bg: "blue.800",
                            borderColor: "gray.600",
                            boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                        }}
                        boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                    >
                        <AccordionItem>
                            <AccordionButton ml="auto">
                                <Flex>
                                    <Icon
                                        as={AiOutlineMenuUnfold}
                                        my="auto"
                                        mx={2}
                                        w={8}
                                        h={8}
                                    />
                                    <Heading
                                        as="h2"
                                        size="md"
                                        my={5}
                                        mr="auto"
                                    >
                                        Table of Contents
                                    </Heading>
                                </Flex>
                                <AccordionIcon ml={10} />
                            </AccordionButton>
                            <AccordionPanel pb={6}>
                                {
                                    headings.map((heading, index) => {
                                        return (
                                            <Box key={index}>
                                                <CustomLink heading={heading} />
                                            </Box>
                                        )
                                    })
                                }
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                )
            }</Flex>
        </Box>
    )
}