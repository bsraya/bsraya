import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Color } from '../utils/color'

// pass props as an object
export default function Tags({ tags }: { tags: string[] }) {
    return (
        <Flex>
            {
                tags.map((tag: string, index: any) => {
                    var randomColor = Color()
                    return (
                        <NextLink
                            href={'/tag/' + tag}
                            key={index}
                            passHref
                        >
                            <Button
                                mr={2}
                                background='inherit'
                                _hover={{
                                    bg: `${randomColor}.100`,
                                    color: 'rgba(26,32,44)',
                                    borderColor: `${randomColor}.700`,
                                }}
                            >
                                <Text color={randomColor + '.700'}>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}