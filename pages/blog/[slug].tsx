import {
    Box,
    Icon,
    Flex,
    Text,
    Stack,
    Image,
    HStack,
    Heading,
    Divider,
    useBreakpointValue,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'
import { BiTime, BiCalendar } from 'react-icons/bi'
import getHeadings from '../../lib/headings'
import { getPostsByTags } from '../../lib/posts'

// components
import Seo from '../../components/Seo'
import Tags from './../../components/Tags'
import Layout from '../../components/Layout'
import Authors from '../../components/Blog/Authors'
import MDXComponents from '../../components/Blog/MDXComponent'
import MobileToC from '../../components/TableOfContent/Mobile'
import SideToC from '../../components/TableOfContent/Side'

// interface 
import type { IMdxPage } from '../../lib/types'

// remark plugins
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from '@fec/remark-a11y-emoji'
import remarkUnwrapImages from 'remark-unwrap-images'

// rehype plugins
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismDiff from 'rehype-prism-diff'
import RelatedPosts from '../../components/Blog/RelatedPosts'

export default function Blog({ mdxSource }: IMdxPage) {
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
                    {
                        mdxSource.frontmatter.series && (
                            <Box
                                h={7}
                                pl={2}
                                pr={2}
                                borderRadius="md"
                                bg="gray.100"
                                boxShadow="5px 5px 0px rgba(0, 0, 0, 0.1)"
                                width="fit-content"
                                mb="0.5rem"
                            >
                                <Text
                                    m="auto"
                                    fontSize="sm"
                                    fontFamily="heading"
                                    color="gray.500"
                                >
                                    Series
                                </Text>
                            </Box>
                        )
                    }
                    <Heading as="h1" size='2xl'>{mdxSource.frontmatter.title}</Heading>
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
            <Image
                src={mdxSource.frontmatter.img}
                alt={mdxSource.frontmatter.description}
                borderRadius="2rem"
                padding="1rem"
            />
            <MDXRemote {...mdxSource} components={MDXComponents} />
            <RelatedPosts posts={mdxSource.relatedPosts} type="blog" />
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

    var headings: string[] = getHeadings(source)

    // @ts-ignore
    var relatedPosts = getPostsByTags(mdxSource.frontmatter.tags)
    relatedPosts = relatedPosts.filter(post => post.slug !== slug)
    // get 3 random posts
    relatedPosts = relatedPosts.sort(() => Math.random() - 0.5).slice(0, 3)

    return {
        props: {
            mdxSource: {
                ...mdxSource,
                headings,
                slug,
                relatedPosts
            }
        }
    }
}