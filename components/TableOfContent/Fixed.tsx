import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useColorModeValue,
    Icon, Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

function CustomLink({ heading }: { heading: string }) {
    const hoverColor = useColorModeValue("dark", "light")
    const router = useRouter()
    const id = heading.toLowerCase().replace(/\s+/g, '-')

    // smooth scroll to heading
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
        <Heading
            as="h2"
            mt={4}
            mb={5}
            ml={10}
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
    const fontColor = useColorModeValue('dark', 'light')
    return (
        <>
            {
                // if mdxSource.headings is not null, then render the headings
                headings !== null && headings.length > 0 && (
                    <Accordion allowToggle my={10}>
                        <AccordionItem>
                            <AccordionButton>
                                <Flex>
                                    <Icon
                                        as={AiOutlineMenuUnfold}
                                        my="auto"
                                        mr={4}
                                        color={fontColor}
                                        // set size
                                        w={8}
                                        h={8}
                                    />
                                    <Heading color={fontColor} as="h2" size="lg" mt={4} mb={3}>
                                        Table of Contents
                                    </Heading>
                                </Flex>
                                <AccordionIcon ml="auto" />
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
            }
        </>
    )
}