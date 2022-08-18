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
                                bg="gray.200"
                                _dark={{
                                    bg: 'gray.500',
                                    '&:hover': {
                                        bg: 'gray.400'
                                    }
                                }}
                                _hover={{
                                    bgColor: 'gray.300'
                                }}
                                fontFamily="Montserrat, sans-serif"
                            >
                                <Text
                                    color="gray.500"
                                    _dark={{
                                        color: "gray.200"
                                    }}
                                    fontSize="sm"
                                >{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}