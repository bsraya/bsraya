import {
    Box,
    Heading,
    Text,
    Link,
    Flex
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import type { Post } from '../lib/types'
import NextLink from 'next/link'
import SortPost from '../lib/sortPost'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Seo from '../components/Seo'
import MyAvatar from '../components/MyAvatar'

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
    return (
        <Layout>
            <Seo title="Home" type="website" />
            <Box display={{ md: 'flex' }}>
                <Box mr={7} my={2}>
                    <MyAvatar size="6rem" />
                </Box>
                <Box my="auto">
                    <Heading as="h1" fontWeight="bold" fontFamily="heading">Bijon Setyawan Raya</Heading>
                    <Text fontSize="md" mt={1}>
                        A Computer Science graduate student at National Tsing Hua University
                    </Text>
                </Box>
            </Box>

            <Heading as="h2" size="md" mt="4rem" mb={3}>Recent posts</Heading>
            <Posts posts={posts} type="blog" />
            <NextLink href="/blog" passHref>
                <Link textDecoration="underline" _hover={{textDecoration: "none"}}>
                    <Flex>
                        <Text fontStyle="normal" fontFamily="heading">Read all posts</Text>
                        <ArrowForwardIcon
                            ml={2}
                            my="auto"
                        />
                    </Flex>
                </Link>
            </NextLink>
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get the name of all folders in /content/posts
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))

    // iterate through all the files in /content/posts
    var posts: Post[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug: slug
        }
    })

    posts = posts.filter((post: Post) => post.frontMatter.publish)

    // sort the posts by date
    posts = SortPost(posts)

    posts = posts.slice(0, 3)

    return {
        props: {
            posts
        }
    }
}