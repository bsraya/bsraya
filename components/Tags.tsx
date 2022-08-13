import NextLink from 'next/link'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    const color = useColorModeValue('gray.500', 'gray.500')
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
                                px={3}
                                color="gray.100"
                                bg={color}
                                _hover={{
                                    bgColor: 'gray.400'
                                }}
                                fontFamily="Montserrat, sans-serif"
                            >
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}