import fs from 'fs'
import path from 'path'
import { Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'

// components
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import MDXComponents from '../../components/MDXComponent'
import ViewCounter from '../../components/ViewCounter'
import Authors from '../../components/Authors'
import Seo from '../../components/Seo'

// interface 
import type { MdxPage } from '../../lib/types'

// remark plugins
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from '@fec/remark-a11y-emoji'
import remarkUnwrapImages from 'remark-unwrap-images'

// rehype pluings
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismDiff from 'rehype-prism-diff'

export default function Blog({ mdxSource }: MdxPage) {
    const publishDate = DateTime.fromISO(mdxSource.frontmatter.date).toFormat('LLLL dd, yyyy')
    return (
        <Layout>
            <Seo
                type="article"
                publish={ publishDate }
                title={ mdxSource.frontmatter.title }
                description={ mdxSource.frontmatter.description }
            />
            <Text fontSize="sm" color="gray.500">
                { publishDate } - { mdxSource.frontmatter.readingTime } reading • <ViewCounter slug={ mdxSource.slug } blogPage={ true } />
            </Text>
            
            <Heading as="h1" size='2xl' mt={1} mb={3}>{ mdxSource.frontmatter.title }</Heading>
            <Authors authors={ mdxSource.frontmatter.authors } />
            <Tags tags={ mdxSource.frontmatter.tags } />
            <MDXRemote { ...mdxSource } components={ MDXComponents } />
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
    const source = fs.readFileSync(path.join('content', 'posts',
        slug, 'index.mdx'), 'utf-8')

    const mdxSource = await serialize(
        source,
        {
            parseFrontmatter: true,
            mdxOptions: {
                format: 'mdx',
                remarkPlugins: [
                    remarkGfm,
                    remarkMath,
                    remarkUnwrapImages,
                    remarkEmoji,
                ],
                rehypePlugins: [
                    rehypeSlug,
                    rehypeCodeTitles,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    rehypeKatex,
                    rehypePrismPlus,
                    rehypePrismDiff,
                ],
            }
        }
    )

    return {
        props: {
            mdxSource: {
                ...mdxSource,
                slug
            }
        }
    }
}