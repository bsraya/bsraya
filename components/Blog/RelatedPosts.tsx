import NextLink from 'next/link'
import ViewCounter from '../Counter/View'
import type { Post } from '../../lib/types'
import {
    Box,
    Text,
    Flex,
    Icon,
    Stack,
    HStack,
    VStack,
    LinkBox,
    Heading,
    LinkOverlay,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'

export default function RelatedPosts({ posts, type }: { posts: Post[]; type: string }) {
    const isDesktop = useBreakpointValue({ base: false, md: true })
    const fontSize = isDesktop ? 'md' : 'sm'
    const bgColor = useColorModeValue('white', 'gray.500')
    return (
        <Stack
            spacing={2}
            direction={isDesktop ? 'row' : 'column'}
            
        >
            {
                posts.map((post: Post) => {
                    return(
                        <LinkBox
                            as="article"
                            key={post.slug}
                            borderRadius="md"
                            p={5}
                            width="100%"
                            bg={bgColor}
                            borderWidth="1px"
                            boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                            _dark={{
                                boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <NextLink href={'/'+ type + '/' + post.slug} passHref>
                                <LinkOverlay fontStyle="normal">
                                    <Heading as="h2" fontFamily="heading" fontSize="1.5rem" fontWeight="bold">
                                        {post.frontMatter.title}
                                    </Heading>
                                    <HStack spacing={5} mt={3}>
                                        <Text
                                            fontSize={fontSize}
                                            color="gray.500"
                                            _dark={{
                                                color: "gray.300"
                                            }}
                                        >
                                            {post.frontMatter.description}
                                        </Text>
                                        {
                                            post.frontMatter.series && (
                                                <Box
                                                    h={7}
                                                    pl={2}
                                                    pr={2}
                                                    borderRadius="md"
                                                    bg="gray.200"
                                                    _dark={{
                                                        bg: 'gray.600'
                                                    }}
                                                >
                                                    <Text
                                                        m="auto"
                                                        fontSize="sm"
                                                        fontFamily="heading"
                                                        color="gray.700"
                                                        _dark={{
                                                            color: "gray.200"
                                                        }}
                                                    >
                                                        Series
                                                    </Text>
                                                </Box>
                                            )
                                        }
                                    </HStack>
                                </LinkOverlay>  
                            </NextLink>
                        </LinkBox>
                    )
                })
            }
        </Stack>
    )
}