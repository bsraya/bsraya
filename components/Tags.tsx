import NextLink from 'next/link'
import { Button, Flex, Text } from '@chakra-ui/react'

export default function Tags({ tags }: { tags: string[] }) {
    return (
        <Flex>
            {
                tags.map((tag: string, index: any) => {
                    return (
                        
                            <Button
                                mr={2}
                                variant="ghost"
                                px={3}    
                                _dark={{
                                    color: "gray.100",
                                    bg: 'gray.600',
                                    '&:hover': {
                                        bg: 'gray.500'
                                    },
                                    boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                                }}
                                bg="white"
                                _hover={{
                                    bgColor: 'gray.50'
                                }}
                                color="gray.500"
                                fontFamily="Fira Code"
                                boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                        >
                            <NextLink
                                passHref
                                key={index}
                                href={'/tag/' + tag}
                            >
                                {tag}
                            </NextLink>
                        </Button>
                    )
                })
            }
        </Flex>
    )
}