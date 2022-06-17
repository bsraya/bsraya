import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/layouts/Page'
import { Heading, Box, Text } from '@chakra-ui/react'

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
            <Heading as="h1">This home page</Heading>
            {
                posts.map((post) => {
                    return (
                        <Box key={post.slug} mb={3}>   
                            <Text>{post.frontMatter.title}</Text> 
                            <Text>{post.frontMatter.description}</Text>
                            <Text>{post.frontMatter.tags}</Text>
                        </Box>
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