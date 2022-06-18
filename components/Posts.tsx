import Tags from './Tags'
import NextLink from 'next/link'
import type { IPost } from '../types/post.type'
import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

export default function Posts({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <LinkBox as="article" p='5' my={5} borderWidth='1px' rounded="md" key={post.slug}>   
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                {post.frontMatter.date} - {post.frontMatter.readingTime} reading
                            </Text>
                            <NextLink href={'/blog/' + post.slug} passHref>
                                <LinkOverlay >
                                    <Heading as="h1">
                                        {post.frontMatter.title}
                                    </Heading>
                                </LinkOverlay>  
                            </NextLink>
                            <Text as="p" my={5}>{post.frontMatter.description}</Text>
                            <Tags
                                tags={
                                    post.frontMatter.tags
                                }
                            />
                        </LinkBox>
                    )
                })
            }
        </>
    )
}