import fs from 'fs'
import path from 'path'
import {
    Text,
    Heading,
    useBreakpointValue
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'

// components
import Seo from '../../components/Seo'
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import Authors from '../../components/Blog/Authors'
import ViewCounter from '../../components/Counter/View'
import MDXComponents from '../../components/Blog/MDXComponent'
import FixedToC from '../../components/TableOfContent/Fixed'
import FloatingToC from '../../components/TableOfContent/Floating'
import MobileToC from '../../components/TableOfContent/Mobile'

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
    const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
    return (
        <Layout>
            <Seo
                type="article"
                publish={ publishDate }
                title={ mdxSource.frontmatter.title }
                description={ mdxSource.frontmatter.description }
            />
            <Text fontSize="md" color="gray.500">
                { publishDate } - { mdxSource.frontmatter.readingTime } reading • <ViewCounter slug={ mdxSource.slug } blogPage={ true } />
            </Text>
            
            <Heading as="h1" size='2xl' mt={1} mb={3}>{ mdxSource.frontmatter.title }</Heading>
            <Authors authors={ mdxSource.frontmatter.authors } />
            <Tags tags={mdxSource.frontmatter.tags} />
            <FixedToC headings={mdxSource.headings} />
            { isDesktop && <FloatingToC headings={mdxSource.headings} /> }
            { isMobile && <MobileToC headings={mdxSource.headings} /> }
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
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: 'wrap',
                            properties: { className: ['anchor'] }
                        }
                    ],
                    rehypeKatex,
                    rehypePrismPlus,
                    rehypePrismDiff,
                ],
            }
        }
    )

    // generate the regex to find sentence that starts like "## This is A Heading"
    const regex = new RegExp(/^##\s+(.*)/gm)
    const titleMatches = source.toString().match(regex)
    var headings: string[] = []

    // if there is one or more matches
    if (titleMatches !== null) {
        // remove "## " from the headings
        const titleWithoutHastags = titleMatches?.map(match => match.replace(/^##\s+/, ''))
    
        // remove symbols from the headings
        headings = titleWithoutHastags?.map(heading => heading.replace(/[^\w\s]/gi, ''))
    }

    return {
        props: {
            mdxSource: {
                ...mdxSource,
                headings,
                slug
            }
        }
    }
}