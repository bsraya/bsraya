import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Posts from '../../components/Posts'
import type { IPost } from '../../types/post.type'

function Tag({ posts, tag }: { posts: IPost[], tag: string }) {
    return (
        <Layout>
            <Heading as="h1" size="xl">
                <Flex>
                    {posts.length} posts tagged with
                    <Text
                        as="p"
                        // pick a color from the "colors" array
                        color='tagColor'
                    >&nbsp;#</Text><Text as="p">{tag}</Text>
                </Flex>
            </Heading>
            <Posts posts={posts} type="blog" />
        </Layout>
    )
}

const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    const obj: Record<string, boolean> = {}

    // get all tags from all posts
    folders.forEach(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)
        frontMatter.tags.forEach(
            // tag is string type
            (tag: string) => obj[`/tag/${tag}`] = true
        )
    })

    return {
        paths: Object.keys(obj),
        fallback: false
    }
}

const getStaticProps = async ({ params: { tag } }: any) => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // get all posts' front matter with a specific tag
    const filtered = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        if (frontMatter.tags.includes(tag)) {
            return {
                frontMatter,
                slug: slug
            }
        }
    })

    // remove undefined elements in the "posts" array
    const posts = filtered.filter(Boolean)

    return {
        props: {
            posts,
            tag
        }
    }
}

export { getStaticProps, getStaticPaths }
export default Tag