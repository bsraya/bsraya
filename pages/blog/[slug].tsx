import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

// components
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import MDXComponents from '../../components/MDXComponent'

// interface 
import type { IMdxPage } from '../../types/mdx.type'

// remark plugins
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

// rehype pluings
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismDiff from 'rehype-prism-diff'

export default function Blog({ frontMatter, mdxSource }: IMdxPage): JSX.Element {
    return (
        <Layout>
            <Text
                fontSize="sm"
                color="gray.500"
            >
                {frontMatter.date} - {frontMatter.readingTime} reading
            </Text>
            <Heading as="h1" size='3xl' my={5}>{frontMatter.title}</Heading>
            <Tags tags={frontMatter.tags} />
            <MDXRemote {...mdxSource} components={MDXComponents} />
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

    const mdxSource = await serialize(
        content, 
        {
            mdxOptions: {
                remarkPlugins: [
                    remarkGfm,
                    remarkMath,
                ],
                rehypePlugins: [
                    rehypeSlug,
                    rehypeCodeTitles,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    rehypeKatex,
                    rehypePrismPlus,
                    rehypePrismDiff
                ],
                format: 'mdx'
            }
        }
    )

    return {
        props: {
            frontMatter,
            mdxSource
        }
    }
}