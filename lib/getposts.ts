import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post } from './types'

export function getPostsByTag(tag: string) {
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

    // if tags is a string, then return all posts with that tag
    return posts.filter((post: Post) => post.frontMatter.tags.includes(tag))
}

export function getPostsByTags(title: string, tags: string[]): Post[] {
    const posts: Post[] = []
    tags.forEach(tag => {
        posts.push(...getPostsByTag(tag))
    })
    return posts
}