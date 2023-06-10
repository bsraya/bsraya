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

export function getPostsByTags(tags: string[]): IPost[] {
    const allPosts = getAllPosts()
    let posts: IPost[] = []

    tags.forEach(tag => {
        posts = [...posts, ...getPostsByTag(tag, allPosts)]
    })

    if (posts.length === 0) {
        return []
    }

    const seen: { [key: string]: boolean } = {};
    const uniquePosts = posts.filter((post: IPost) => {
        if (seen[post.slug]) {
            return false;
        }
        seen[post.slug] = true;
        return true;
    });

    return sortPosts(uniquePosts)
}

export function sortPosts(posts: IPost[]): IPost[] {
    return posts.sort((a: IPost, b: IPost) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}