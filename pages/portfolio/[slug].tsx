import {
    Box,
    Flex,
    Icon,
    Text,
    Stack,
    HStack,
    Heading,
    useBreakpointValue,
    Divider,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'
import { BiTime, BiCalendar } from 'react-icons/bi'
import getHeadings from '../../lib/headings'

// components
import Seo from '../../components/Seo'
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import Authors from '../../components/Blog/Authors'
import MDXComponents from '../../components/Blog/MDXComponent'
import SideToC from '../../components/TableOfContent/Side'
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
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
    const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })
    const largerThan1080 = useBreakpointValue({ base: false, md: false, lg: false, xl: true })
    const publishDate = DateTime.fromISO(mdxSource.frontmatter.date).toFormat('LLLL dd, yyyy')
    const fontSize = isDesktop ? 'md' : 'sm'

    return (
        <Layout>
            <Seo
                type="article"
                publish={ publishDate }
                title={ mdxSource.frontmatter.title } 
                description={ mdxSource.frontmatter.description }
            />
            <Stack spacing="1.5rem" mt="5rem" mb="3rem">
                <Box>
                    <Heading as="h1" size='2xl' mt={1} mb={3}>{mdxSource.frontmatter.title}</Heading>
                    <Text mt="1rem" fontStyle="italic">
                        {mdxSource.frontmatter.description}
                    </Text>
                </Box>
                <Divider />
                <Box>
                    <Authors authors={mdxSource.frontmatter.authors} />
                    <HStack spacing="2rem">
                        <Flex>
                            <Icon as={BiCalendar} h={5} w={5} mr={2} my="auto" />
                            <Text fontSize={fontSize} fontFamily="heading">
                                {DateTime.fromISO(mdxSource.frontmatter.date).toFormat("LLLL dd, yyyy")}
                            </Text>
                        </Flex>
                        <Flex mr="5rem">
                            <Icon as={BiTime} h={5} w={5} mr={2} my="auto" />
                            <Text fontSize={fontSize} fontFamily="heading">
                                {mdxSource.frontmatter.readingTime}
                            </Text>
                        </Flex>
                    </HStack>
                </Box>
                <Divider />
                <Tags tags={mdxSource.frontmatter.tags} />
            </Stack>
            {
                mdxSource.headings.length > 0 && (
                    <>
                        {isMobile && <MobileToC headings={mdxSource.headings} />}
                        {largerThan1080 && <SideToC headings={mdxSource.headings} />}
                    </>
                )
            }
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