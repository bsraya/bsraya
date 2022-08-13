import Tags from './Tags'
import NextLink from 'next/link'
import { DateTime } from 'luxon'
import ViewCounter from './Counter/View'
import type { Post } from '../lib/types'
import { BsBook, BsEye, BsCalendar4 } from 'react-icons/bs'
import { Box, Heading, LinkBox, LinkOverlay, Text, useColorModeValue, Flex, useBreakpointValue, Icon, HStack } from '@chakra-ui/react'

export default function Posts({ posts, type }: { posts: Post[]; type: string }) {
    const borderColor = useColorModeValue('gray.200', 'gray.500')
    const hoveredBorderColor = useColorModeValue('light', 'dark')
    const isDesktop = useBreakpointValue({ base: false, md: true })
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
                                    <Heading as="h2" fontFamily="heading" fontSize="2rem" fontWeight="bold">
                                        {post.frontMatter.title}
                                    </Heading>
                                    <HStack my={2} spacing={5} fontFamily="heading">
                                        <Flex>
                                            <Icon as={BsCalendar4} h={5} w={5} mr={2} mt={1} color="dark" />
                                            <Text fontSize="sm" mr={2}>
                                                {DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy")}
                                            </Text>
                                        </Flex>

                                        <Flex>
                                            <Icon as={BsBook} h={5} w={5} mr={2} mt={1} color="dark" />
                                            <Text fontSize="sm">
                                                {post.frontMatter.readingTime} reading
                                            </Text>
                                        </Flex>

                                        {
                                            type === 'blog' && (
                                                <Flex>
                                                    <Icon as={BsEye} h={5} w={5} mr={2} mt={1} color="dark" />
                                                    <ViewCounter slug={post.slug} blogPage={false} />
                                                </Flex>
                                            )
                                        }
                                    </HStack>
                                </LinkOverlay>  
                            </NextLink>
                            <Text as="p" color="gray.500">{post.frontMatter.description}</Text>
                        </LinkBox>
                    )
                })
            }
        </>
    )
}