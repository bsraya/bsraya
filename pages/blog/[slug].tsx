import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import { Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Tags from './../../components/Tags'
import type { IMdxPage } from '../../types/mdx.type'

export default function Blog ({ frontMatter, mdxSource }: IMdxPage): JSX.Element {
    return (
        <Layout>
            <Text
                fontSize="sm"
                color="gray.500"
            >
                {frontMatter.date} - {frontMatter.readingTime} reading
            </Text>
            <Heading as="h1">{frontMatter.title}</Heading>
            <Tags tags={frontMatter.tags} />
            <MDXRemote {...mdxSource} components={{}} />
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    const paths = folders.map(name => ({
        params: {
            slug: name
        }
    }))

    return {
        paths,
        fallback: false
    }
}

// slug is the id of the post, which is a string
export const getStaticProps = async ( { params: { slug } }: { params: { slug: string } } ) => {
    const markdownWithMeta = fs.readFileSync(path.join('content', 'posts',
        slug, 'index.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)

    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            mdxSource
        }
    }
}