import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DateTime } from 'luxon'
import { Heading } from '@chakra-ui/react'
import Layout from '../components/Layout'
import type { IPost } from '../types/post.type'
import Posts from '../components/Posts'

export default function Blog({ posts }: { posts: IPost[] }): JSX.Element {
    return (
        <Layout>
            <Heading>Blog</Heading>
            <Posts posts={posts} type="blog" />
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

    posts.sort((a, b) => {
        const aDate = DateTime.fromFormat(a.frontMatter.date, "LLLL dd, yyyy")
        const bDate = DateTime.fromFormat(b.frontMatter.date, "LLLL dd, yyyy")
        return bDate - aDate
    })

    return {
        props: {
            posts
        }
    }
}