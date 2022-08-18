import NextLink from 'next/link'
import { DateTime } from 'luxon'
import ViewCounter from './Counter/View'
import type { Post } from '../lib/types'
import { BiTime } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import {
    Box,
    Text,
    Flex,
    Icon,
    HStack,
    LinkBox,
    Heading,
    LinkOverlay,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'

export default function Posts({ posts, type }: { posts: Post[]; type: string }) {
    const isDesktop = useBreakpointValue({ base: false, md: true })
    const fontSize = isDesktop ? 'md' : 'sm'
    const tagFontColor = useColorModeValue('gray.500', 'gray.200')
    const tagBg = useColorModeValue('gray.200', 'gray.500')
    return (
        <>
            {
                posts.map((post: Post) => {
                    return(
                        <LinkBox
                            as="article"
                            my={5}
                            rounded="md"
                            key={post.slug}
                            borderWidth="1px"
                            p={5}
                        >
                            <NextLink href={'/'+ type + '/' + post.slug} passHref>
                                <LinkOverlay fontStyle="normal">
                                    <HStack>
                                        <Text color="gray.500" fontSize="md" fontFamily="heading">
                                            {DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy")}
                                        </Text>
                                        {
                                            post.frontMatter.series && (
                                                <Box
                                                    h={7}
                                                    pl={2}
                                                    pr={2}
                                                    bg={tagBg}
                                                    display="flex"
                                                    borderRadius="md"
                                                >
                                                    <Text
                                                        m="auto"
                                                        color={tagFontColor}
                                                        fontSize="sm"
                                                        fontFamily="heading"
                                                    >
                                                        Series
                                                    </Text>
                                                </Box>
                                            )
                                        }
                                    </HStack>
                                    <Heading as="h2" fontFamily="heading" fontSize="2rem" fontWeight="bold">
                                        {post.frontMatter.title}
                                    </Heading>
                                    <HStack my={2} spacing={5} fontFamily="heading">
                                        <Flex>
                                            <Icon as={BiTime} h={5} w={5} mr={2} my="auto" color="dark" />
                                            <Text fontSize={fontSize}>
                                                {post.frontMatter.readingTime}
                                            </Text>
                                        </Flex>

                                        {
                                            type === 'blog' && (
                                                <Flex>
                                                    <Icon as={BsEye} h={5} w={5} mr={2} my="auto" color="dark" />
                                                    <Text fontSize={fontSize}><ViewCounter slug={post.slug} blogPage={false} /> views</Text>
                                                </Flex>
                                            )
                                        }
                                    </HStack>
                                </LinkOverlay>  
                            </NextLink>
                            <Text as="p" color="gray.500" mt={5}>{post.frontMatter.description}</Text>
                        </LinkBox>
                    )
                })
            }
        </>
    )
}