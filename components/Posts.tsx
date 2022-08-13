import Tags from './Tags'
import NextLink from 'next/link'
import { DateTime } from 'luxon'
import ViewCounter from './Counter/View'
import type { Post } from '../lib/types'
import { BsBook, BsEye } from 'react-icons/bs'
import { Box, Heading, LinkBox, LinkOverlay, Text, useColorModeValue, Flex, useBreakpointValue, Icon } from '@chakra-ui/react'

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
                            <Text
                                fontSize="md"
                                color="gray.500"
                                fontFamily="Montserrat, sans-serif"
                            >
                                { DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy") }
                            </Text>
                            <NextLink href={'/'+ type + '/' + post.slug} passHref>
                                <LinkOverlay fontStyle="normal">
                                    <Heading as="h2" fontFamily="heading" fontSize="2rem" fontWeight="bold">
                                        {post.frontMatter.title}
                                    </Heading>
                                    <Flex my={2}>
                                        <Icon as={BsBook} mr={2} mt={2} color="dark" />
                                        <Text>
                                            {post.frontMatter.readingTime} reading
                                        </Text>
                                        
                                        {
                                            type === 'blog' && (
                                                <>
                                                    <Icon as={BsEye} ml={5} mr={2} mt={2} color="dark" /><ViewCounter slug={post.slug} blogPage={false} />
                                                </>
                                            )
                                        }
                                    </Flex>
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