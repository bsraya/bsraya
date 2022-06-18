import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import { Heading } from '@chakra-ui/react'
import type { IPost } from '../types/post.type'

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <Layout>
            <Heading as="h2" size="md" mb={3}>Recent posts</Heading>
            <Posts posts={posts} />
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