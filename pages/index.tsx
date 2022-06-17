import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/layouts/Page'
import { LinkBox, LinkOverlay, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Post {
    frontMatter: {
        title: string
        date: string
        readingTime: string
        description: string
        tags: string[]
        publish: boolean
    }
    slug: string
}

export default function Home ({ posts }: { posts: Post[] }) {
    return (
        <Layout>
            <Heading as="h2" size="md" mb={3}>Recent posts</Heading>
            {
                posts.map((post) => {
                    return (
                        <LinkBox as="article" p='5' my={5} borderWidth='1px' rounded="md" key={post.slug}>   
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                {post.frontMatter.date} - {post.frontMatter.readingTime} reading time
                            </Text>
                            <NextLink href={'/blog/' + post.slug} passHref>
                                <LinkOverlay >
                                    <Heading as="h1">
                                        {post.frontMatter.title}
                                    </Heading>
                                </LinkOverlay>  
                            </NextLink>
                            <Text my={5}>{post.frontMatter.description}</Text>
                            {
                                post.frontMatter.tags.map((tag) => {
                                    return (
                                        <Text as="span" key={tag} mr={2}>{"#" + tag}</Text>
                                    )
                                })
                            }
                        </LinkBox>
                    )
                })
            }
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get all the files in /content/posts
    const files = fs.readdirSync(path.join('content', 'posts'))
    
    // iterate through all the files in /content/posts
    const posts = files.map(filename => {
        const slug = filename.replace('.mdx', '')
        const content = fs.readFileSync(path.join('content', 'posts', filename), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    return {
        props: {
            posts
        }
    }
}