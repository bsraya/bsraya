import { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react'
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
                                variant="ghost"
                                _hover={{
                                    // append bgColor[number] with .100 to get a random color
                                    bg: 'blue.100',
                                    color: 'rgba(26,32,44)',
                                    borderColor: `${randomColor}.700`,
                                }}
                            >
                                <Text color='blue.600'>#</Text>
                                <Text>{tag}</Text>
                            </Button>
                        </NextLink>
                    )
                })
            }
        </Flex>
    )
}