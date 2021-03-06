import Tags from './Tags'
import NextLink from 'next/link'
import { DateTime } from 'luxon'
import ViewCounter from './ViewCounter'
import type { Post } from '../lib/types'
import { Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'

export default function Posts({ posts, type }: { posts: Post[]; type: string }) {
    const borderColor = useColorModeValue('gray.200', 'gray.500')
    const hoveredBorderColor = useColorModeValue('light', 'dark')
    return (
        <>
            {
                posts.map((post: Post) => {
                    return(
                        <LinkBox
                            as="article"
                            p='5'
                            my={5}
                            borderWidth='2px'
                            rounded="md"
                            key={post.slug}
                            borderColor={borderColor}
                            _hover={{
                                border: '2px solid',
                                borderColor: hoveredBorderColor,
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.2s ease-in-out',
                                transform: 'translateY(-10px)',
                            }}
                        >   
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                { DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy") } - { post.frontMatter.readingTime } reading
                            {
                                type === 'blog' ? (
                                    <> • <ViewCounter slug={post.slug} blogPage={false} /></>
                                ): (<></>)
                            }
                            </Text>
                            <NextLink href={'/'+ type + '/' + post.slug} passHref>
                                <LinkOverlay >
                                    <Heading>
                                        {post.frontMatter.title}
                                    </Heading>
                                </LinkOverlay>  
                            </NextLink>
                            {
                                post.frontMatter.tags ? (
                                    <>
                                        <Text as="p" my={5} color="gray.500">{post.frontMatter.description}</Text>
                                        <Tags
                                            tags={
                                                post.frontMatter.tags
                                            }
                                        />
                                    </>
                                ) : (
                                    <Text as="p" mt={5} color="gray.500">{post.frontMatter.description}</Text>
                                )
                            }
                        </LinkBox>
                    )
                })
            }
        </>
    )
}