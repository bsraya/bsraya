import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import { Heading } from '@chakra-ui/react'
import Posts from '../../components/Posts'
import type { Post } from '../../lib/types'
import sortPost from '../../lib/sortpost'
import Seo from '../../components/Seo'

function Tag({ posts, tag }: { posts: Post[], tag: string }) {
    return (
        <Layout>
            <Seo title="Blog" type="website" />
            <Heading as="h1" size="xl">
                {posts.length} post(s) tagged with #{tag}
            </Heading>
            <Posts posts={posts} type="blog" />
        </Layout>
    )
}

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params: { tag } }: any) => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))

    // get all posts' front matter with a specific tag
    var posts: Post[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug
        }
    })

    // only show published posts
    posts = posts.filter((post: Post) => post.frontMatter.publish)

    // filter out posts that don't have the tag
    posts = posts.filter((post: Post) => post.frontMatter.tags.includes(tag))

    posts = sortPost(posts)

    return {
        props: {
            posts,
            tag
        }
    }
}

export default Tag