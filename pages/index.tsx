import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import type { IPost } from '../types/post.type'
import NextLink from 'next/link'
import { Alert, AlertIcon, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <Layout>
            <Heading as="h1">Bijon Setyawan Raya</Heading>
            <Text>Graduate student at National Tsing Hua University</Text>

            <Alert mt={10} variant="left-accent" status='info'>
                {/* make AlertIcon stays on top */}
                <AlertIcon
                    mt={3}
                    mb="auto"
                />
                <Box lineHeight="taller">
                    {/* write
                        "I am currently a TA in a **Linear Algebra** course at **National Tsing Hua University**."
                    */}
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
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))
    
    // iterate through all the files in /content/posts
    const posts = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
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