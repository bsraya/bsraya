import fs from 'fs'
import path from 'path'
import {
    Text,
    Heading,
    useBreakpointValue,
    Flex,
    Icon,
    HStack
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'
import { BsBook, BsEye, BsCalendar4 } from 'react-icons/bs'

// components
import Seo from '../../components/Seo'
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import Authors from '../../components/Blog/Authors'
import ViewCounter from '../../components/Counter/View'
import MDXComponents from '../../components/Blog/MDXComponent'
import FixedToC from '../../components/TableOfContent/Fixed'
import MobileToC from '../../components/TableOfContent/Mobile'
import SideToC from '../../components/TableOfContent/Side'

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
    const fontSize = isDesktop ? 'md' : 'sm'
    return (
        <Layout>
            <Seo
                type="article"
                publish={ publishDate }
                title={ mdxSource.frontmatter.title }
                description={ mdxSource.frontmatter.description }
            />
            <Heading as="h1" size='2xl' mt={1} mb={3}>{mdxSource.frontmatter.title}</Heading>
            <HStack my={2} spacing={3} fontFamily="heading">
                <Flex>
                    <Icon as={BsCalendar4} h={5} w={5} mr={2} my="auto" color="dark" />
                    <Text fontSize={fontSize}>
                        {DateTime.fromISO(mdxSource.frontmatter.date).toFormat("LLL dd, yyyy")}
                    </Text>
                </Flex>

                <Flex>
                    <Icon as={BsBook} h={5} w={5} mr={2} my="auto" color="dark" />
                    <Text fontSize={fontSize}>
                        {mdxSource.frontmatter.readingTime}
                    </Text>
                </Flex>
                
                <Flex>
                    <Icon as={BsEye} h={5} w={5} mr={2} my="auto" color="dark" />
                    <Text fontSize={fontSize}><ViewCounter slug={mdxSource.slug} blogPage={false} /> views</Text>
                </Flex>
            </HStack>
            <Authors authors={ mdxSource.frontmatter.authors } />
            
            <FixedToC headings={mdxSource.headings} />
            { isMobile && <MobileToC headings={mdxSource.headings} /> }
            { isDesktop && <SideToC headings={mdxSource.headings} /> }
            <MDXRemote {...mdxSource} components={MDXComponents} />
            
            <Heading as="h1" fontSize="2rem" mt={10} mb={5}>
                Tags
            </Heading>
            <Tags tags={mdxSource.frontmatter.tags} />
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