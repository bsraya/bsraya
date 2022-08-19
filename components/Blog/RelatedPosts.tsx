import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import SortPost from '../../lib/sortPost'
import type { Post } from '../../lib/types'
import { Box, Heading } from "@chakra-ui/react";
import { DateTime } from 'luxon'

function SortPost(posts: Post[]) {
    return posts.sort((a: Post, b: Post) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}

export default function RelatedPosts({ tags }: { tags: string[] }) {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // get all posts' front matter with a specific tag
    var posts: Post[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug
        }
    })

    posts = posts.filter((post: Post) => post.frontMatter.publish)

    // filter out the posts that don't have the tags
    posts = posts.filter((post: Post) => {
        return post.frontMatter.tags.some((tag: string) => tags.includes(tag))
    })
    
    var sortedPosts = SortPost(posts)

    // take the first 3
    sortedPosts = sortedPosts.slice(0, 3)

    return (
        <Box>
            <Heading>
                Related Posts
            </Heading>
            {
                sortedPosts.map((post: Post) => {
                    return (
                        <Box key={post.slug}>
                            <a href={`/blog/${post.slug}`}>{post.frontMatter.title}</a>
                        </Box>
                    )
                })
            }
        </Box>
    )
}
