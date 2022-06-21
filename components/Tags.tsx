import NextLink from 'next/link'
import { Button, Flex, Text, useColorModeValue} from '@chakra-ui/react'

// pass props as an object
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
                                    bg: useColorModeValue('blue.200', 'blue.600'),
                                }}
                            >
                                <Text color={useColorModeValue('blue.600', 'blue.200')}>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}