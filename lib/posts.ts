import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { IPost } from './types'
import { DateTime } from 'luxon'

export function getAllPosts(): IPost[] {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    return folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug
        }
    }).filter((post: IPost) => post.frontMatter.publish)
}

export function getPostsByTag(tag: string, posts: IPost[]): IPost[] {
    return posts.filter((post: IPost) => post.frontMatter.tags.includes(tag))
}

export function getPostsByTags(tags: string[]): (IPost | undefined)[] {
    const allPosts = getAllPosts()
    let posts: IPost[] = []

    tags.forEach(tag => {
        posts = [...posts, ...getPostsByTag(tag, allPosts)]
    })

    // remove duplicate posts
    const uniquePosts = Array.from(new Set(posts.map(post => post.slug)))
        .map(slug => posts.find(post => post.slug === slug))

    return uniquePosts
}

export function sortPosts(posts: IPost[]): IPost[] {
    return posts.sort((a: IPost, b: IPost) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}