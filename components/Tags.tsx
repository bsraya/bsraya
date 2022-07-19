import NextLink from 'next/link'
import { Button, Flex, Text } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
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
                                    color: 'gray.800',
                                    bg: "pink.100"
                                }}
                            >
                                <Text color={"pink.300"} _dark={{color: "pink.600"}}>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}