import NextLink from 'next/link'
import { Button, Flex, Text, useColorModeValue} from '@chakra-ui/react'
import { Color } from '../lib/color'

// pass props as an object
export default function Tags({ tags, color }: { tags: string[], color: string }) {
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
                                    bg: color + ".200",
                                }}
                            >
                                <Text color={color + '.700'}>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}