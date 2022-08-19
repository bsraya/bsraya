import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Seo from '../../components/Seo'
import Posts from '../../components/Posts'
import Layout from '../../components/Layout'
import sortPost from '../../lib/sortPost'
import type { Post } from '../../lib/types'
import { Heading } from '@chakra-ui/react'
import { GetPostsByTag } from '../../lib/getPostsByTags'

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
    const postsWithTag = GetPostsByTag(tag)
    var posts = sortPost(postsWithTag)

    return {
        props: {
            posts,
            tag
        }
    }
}

export default Tag