import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'

interface Props {
    frontMatter: any
    mdxSource: any
}

const PostPage = ({ frontMatter, mdxSource }: Props) => {
    return (
        <div>
            <h1>{frontMatter.title}</h1>
            <h2>{frontMatter.date}</h2>
            <MDXRemote {...mdxSource} components={{}} />
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content', 'posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

// slug is the id of the post, which is a string
const getStaticProps = async ( { params: { slug } }: any ) => {
    const markdownWithMeta = fs.readFileSync(path.join('content', 'posts',
        slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage