import fs from 'fs'
import path from 'path'
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
import rehypePrismDiff from 'rehype-prism-diff'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default function Portfolio({ mdxSource }: IMdxPage) {
    return (
        <Layout>
            <Text
                fontSize="sm"
                color="gray.500"
            >
                {mdxSource.frontmatter.date} - {mdxSource.frontmatter.readingTime} reading
            </Text>
            <Heading as="h1" size='3xl' my={5}>{mdxSource.frontmatter.title}</Heading>
            <Tags tags={mdxSource.frontmatter.tags} />
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'portfolios'))

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

export const getStaticProps = async ( { params: { slug } }: { params: { slug: string } } ) => {
    const source = fs.readFileSync(path.join('content', 'portfolios',
        slug, 'index.mdx'), 'utf-8')

    const mdxSource = await serialize(
        source, 
        {
            parseFrontmatter: true,
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
                    rehypePrismDiff,
                ],
                format: 'mdx'
            }
        }
    )

    return {
        props: {
            mdxSource
        }
    }
}