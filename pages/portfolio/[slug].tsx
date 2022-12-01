import {
    Flex,
    Icon,
    Text,
    Stack,
    HStack,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'
import { BiTime } from 'react-icons/bi'
import getHeadings from '../../lib/headings'

// components
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Authors from '../../components/Blog/Authors'
import MDXComponents from '../../components/Blog/MDXComponent'
import FixedToC from '../../components/TableOfContent/Fixed'
import MobileToC from '../../components/TableOfContent/Mobile'

// interface 
import type { IMdxPage } from '../../lib/types'

// remark plugins
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from '@fec/remark-a11y-emoji'
import remarkUnwrapImages from 'remark-unwrap-images'

// rehype pluings
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePrismDiff from 'rehype-prism-diff'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default function Portfolio({ mdxSource }: IMdxPage) {
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
            <Stack mt="5rem">
                <Text color="gray.500" fontSize="md" fontFamily="heading">
                    {DateTime.fromISO(mdxSource.frontmatter.date).toFormat("LLLL dd, yyyy")}
                </Text>
                <Heading as="h1" size='2xl' mt={1} mb={3}>{mdxSource.frontmatter.title}</Heading>
                <HStack my={2} spacing={5} fontFamily="heading">
                    <Flex>
                        <Icon as={BiTime} h={5} w={5} mr={2} my="auto" color="dark" />
                        <Text fontSize={fontSize}>
                            {mdxSource.frontmatter.readingTime}
                        </Text>
                    </Flex>
                </HStack>
                <Authors authors={mdxSource.frontmatter.authors} />
            </Stack>
            { isMobile && <MobileToC headings={mdxSource.headings} /> }
            <MDXRemote { ...mdxSource } components={ MDXComponents } />
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
                        { behavior: 'wrap', properties: { className: ['anchor'] } }
                    ],
                    rehypeKatex,
                    rehypePrismPlus,
                    rehypePrismDiff,
                ],
            }
        }
    )

    var headings: string[] = getHeadings(source)

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