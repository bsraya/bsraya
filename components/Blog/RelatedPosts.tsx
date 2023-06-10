import {
    Box,
    Text,
    Stack,
    HStack,
    LinkBox,
    Heading,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { IPost } from '../../lib/types'

function Cards({ posts, type }: { posts: IPost[], type: string }) {
    const isDesktop = useBreakpointValue({ base: false, md: true })
    const fontSize = isDesktop ? 'md' : 'sm'
    const padding = isDesktop ? '3' : '2'
    const bgColor = useColorModeValue('white', 'gray.600')
    return (
        <Stack
            spacing={5}
            direction={isDesktop ? 'row' : 'column'}
        >
            {
                posts.map((post) => (
                    <LinkBox
                        as="article"
                        key={post.slug}
                        borderRadius="md"
                        p={5}
                        width="100%"
                        bg={bgColor}
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                        _hover={{
                            bg: 'gray.50'
                        }}
                    >
                        <NextLink href={'/' + type + '/' + post.slug} passHref>
                            <Heading 
                                as="h2" 
                                fontSize="1.5rem"
                                fontWeight="bold"
                                fontFamily="heading" 
                            >
                                {post.frontMatter.title}
                            </Heading>
                            <HStack
                                spacing={isDesktop ? 0 : 3}
                                mt={3}
                                display={isDesktop ? 'block' : 'flex'}
                            >
                                <Text
                                    fontSize={fontSize}
                                    color="gray.500"
                                >
                                    {post.frontMatter.description}
                                </Text>
                                {
                                    post.frontMatter.series && (
                                        <Box
                                            px={padding}
                                            borderRadius="md"
                                            bg="inherit"
                                            border="1px solid"
                                            borderColor="gray.200"
                                            width="fit-content"
                                            ml={0}
                                        >
                                            <Text
                                                fontSize={fontSize}
                                                color="gray.500"
                                                fontFamily="Montserrat, sans-serif"
                                                fontWeight={600}
                                            >
                                                Series
                                            </Text>
                                        </Box>
                                    )
                                }
                            </HStack>
                        </NextLink>
                    </LinkBox>
                ))
            }
        </Stack>
    )
}

export default function RelatedPosts({ posts, type }: { posts: IPost[]; type: string }) {
    return (
        <>
            {
                posts.length > 0 && (
                    <Box>
                        <Heading as="h1" fontSize="4xl" mt={10} mb="1rem">
                            Related Posts
                        </Heading>
                        <Cards posts={posts} type={type} />
                    </Box>
                )
            }
        </>
    )
}