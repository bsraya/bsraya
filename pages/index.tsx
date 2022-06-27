import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import type { Post } from '../lib/types'
import NextLink from 'next/link'
import { DateTime } from 'luxon'
import { Alert, AlertIcon, Box, Button, Heading, Text, Link, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
    return (
        <Layout>
            <Heading as="h1" mb={2}>Bijon Setyawan Raya</Heading>
            <Text>Graduate student at National Tsing Hua University</Text>

            <Alert mt={10} variant="left-accent" status='info'>
                <AlertIcon
                    mt={1}
                    mb="auto"
                />
                <Box lineHeight="taller">
                    I am currently a TA in a <Text display="inline-flex" fontWeight="bold">Linear Algebra</Text> course at National Tsing Hua University.
                    <Text>
                        Please click on the link below to see some of the topics I have covered.
                    </Text>
                    <Button
                        my={2}
                        colorScheme="blue"
                    >
                        <NextLink href="/blog/first-post" passHref>
                            Bring it on!
                        </NextLink>
                    </Button>
                </Box>
            </Alert>

            <Heading as="h2" size="md" mt={10} mb={3}>Recent posts</Heading>
            <Posts posts={posts} type="blog" />
            <NextLink href="/blog" passHref>
                <Link _hover={{textDecoration: "none"}}>
                    <Flex >
                        <Text >Read all posts</Text><ArrowForwardIcon ml={2} my="auto" />
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
    var posts = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    // sort the posts by date
    posts.sort((a, b) => {
        const aDate = DateTime.fromFormat(a.frontMatter.date, "LLLL dd, yyyy")
        const bDate = DateTime.fromFormat(b.frontMatter.date, "LLLL dd, yyyy")
        return bDate - aDate
    })

    // get the first three posts
    posts = posts.slice(0,3)

    return {
        props: {
            posts
        }
    }
}