import NextLink from 'next/link'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    const color = useColorModeValue('dark', 'darker')
    const hoverColor = useColorModeValue('darker', 'light')
    const fontColor = useColorModeValue('gray.100', 'gray.600')
    return (
        <Flex>
            {
                tags.map((tag: string, index: any) => {
                    return (
                        <NextLink
                            href={'/tag/' + tag}
                            key={index}
                            passHref
                        >
                            <Button
                                mr={2}
                                variant="ghost"
                                _hover={{
                                    color: fontColor,
                                    bg: hoverColor
                                }}
                                px={3}
                                color="gray.100"
                                bg={color}
                                fontFamily="heading"
                            >
                                {/* <Text color="cyan.300" _dark={{color: "dark"}}>#</Text> */}
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}