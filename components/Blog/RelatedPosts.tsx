import NextLink from 'next/link'
import type { Post } from '../../lib/types'
import {
    Box,
    Text,
    Stack,
    HStack,
    LinkBox,
    Heading,
    LinkOverlay,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react'

function Cards({ posts, type }: { posts: Post[], type: string }) {
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
                        boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                        _dark={{
                            boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.1)',
                            '&:hover': {
                                bg: 'gray.500'
                            },
                        }}
                        _hover={{
                            bg: 'gray.50'
                        }}
                    >
                        <NextLink href={'/' + type + '/' + post.slug} passHref>
                            <LinkOverlay fontStyle="normal">
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
                                        _dark={{
                                            color: "gray.300"
                                        }}
                                    >
                                        {post.frontMatter.description}
                                    </Text>
                                    {
                                        post.frontMatter.series && (
                                            <Box
                                                px={padding}
                                                borderRadius="md"
                                                bg="inherit"
                                                _dark={{
                                                    borderColor: 'gray.400'
                                                }}
                                                border="1px solid"
                                                borderColor="gray.500"
                                                width="fit-content"
                                                ml={0}
                                            >
                                                <Text
                                                    fontSize={fontSize}
                                                    color="gray.500"
                                                    _dark={{
                                                        color: "gray.100"
                                                    }}
                                                    fontFamily="Montserrat, sans-serif"
                                                    fontWeight={600}
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
                ))
            }
        </Stack>
    )
}

export default function RelatedPosts({ posts, type }: { posts: Post[]; type: string }) {
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