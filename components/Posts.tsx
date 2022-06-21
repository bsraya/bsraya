import Tags from './Tags'
import NextLink from 'next/link'
import type { IPost } from '../types/post.type'
import { Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'

export default function Posts({ posts, type }: { posts: IPost[]; type: string }) {
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <LinkBox
                            as="article"
                            p='5'
                            my={5}
                            borderWidth='5px'
                            rounded="md"
                            key={post.slug}
                            borderColor={useColorModeValue('white', 'gray.800')}
                            _hover={{
                                border: '5px solid',
                                borderColor: useColorModeValue('blue.600', 'blue.300'),
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.2s ease-in-out',
                                transform: 'translateY(-5px)'
                            }}
                        >   
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                {post.frontMatter.date} - {post.frontMatter.readingTime} reading
                            </Text>
                            <NextLink href={'/'+ type + '/' + post.slug} passHref>
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