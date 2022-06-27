import Tags from './Tags'
import NextLink from 'next/link'
import { Color } from '../utils/color'
import type { IPost } from '../types/post.type'
import { Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import ViewCounter from './ViewCounter'

export default function Posts({ posts, type }: { posts: IPost[]; type: string }) {
    var randomColor: string = Color()
    return (
        <>
            {
                posts.map((post) => {
                    if (post.frontMatter.publish === true) {
                        return(
                            <LinkBox
                                as="article"
                                p='5'
                                my={5}
                                borderWidth='2px'
                                rounded="md"
                                key={post.slug}
                                borderColor="transparent"
                                _hover={{
                                    border: '2px solid',
                                    borderColor: randomColor + ".500",
                                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.2s ease-in-out',
                                    transform: 'translateY(-10px)',
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
                                {
                                    post.frontMatter.tags && (
                                        <Tags
                                            tags={
                                                post.frontMatter.tags
                                            }
                                            color={randomColor}
                                        />
                                    )
                                }
                                <ViewCounter slug={post.slug} blogPage={false} />
                            </LinkBox>
                        )
                    }
                })
            }
        </>
    )
}