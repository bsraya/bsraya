import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { IPost } from './types'
import { DateTime } from 'luxon'

export function getPostsByTag(tag: string): IPost[] {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // get all posts' front matter with a specific tag
    var posts: IPost[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug
        }
    })

    posts = posts.filter((post: IPost) => post.frontMatter.publish)

    // if tags is a string, then return all posts with that tag
    return posts.filter((post: IPost) => post.frontMatter.tags.includes(tag))
}

export function getPostsByTags(tags: string[]):IPost[] {
    const posts: IPost[] = []
    tags.forEach(tag => {
        posts.push(...getPostsByTag(tag))
    })

    // remove duplicate posts
    const uniquePosts = posts.filter((post, index, self) =>
        index === self.findIndex((p) => (
            p.slug === post.slug
        ))
    )

    return uniquePosts
}

export function sortPosts(posts: IPost[]): IPost[] {
    return posts.sort((a: IPost, b: IPost) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}