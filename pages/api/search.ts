import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const slugs = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))

// iterate through all the files in /content/posts
const frontmatters = slugs.map(slug => {
    const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
    const { data: frontMatter } = matter(content)
    return {
        frontMatter,
        slug: slug
    }
})

type Data = {
    retults: string[], 
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts = frontmatters
    const results = req.query.q
        ? posts.filter((post) => post.frontMatter.title.toLowerCase().includes(req.query.q.toString()))
        : posts

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ results }))
}