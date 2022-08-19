import {
    Box,
    Icon,
    Flex,
    Text,
    HStack,
    Heading,
    useBreakpointValue
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { DateTime } from 'luxon'
import { BiTime } from 'react-icons/bi'
import { BsEye } from 'react-icons/bs'
import getHeadings from '../../lib/getHeadings'
import { getPostsByTags } from '../../lib/getposts'

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
import Posts from '../../components/Posts'

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
            <HStack>
                <Text color="gray.500" fontSize="md" fontFamily="heading">
                    {DateTime.fromISO(mdxSource.frontmatter.date).toFormat("LLLL dd, yyyy")}
                </Text>
                {
                    mdxSource.frontmatter.series && (
                        <Box
                            h={7}
                            pl={2}
                            pr={2}
                            borderRadius="md"
                            bg="gray.200"
                            _dark={{
                                bg: 'gray.500'
                            }}
                        >
                            <Text
                                m="auto"
                                fontSize="sm"
                                fontFamily="heading"
                                color="gray.500"
                                _dark={{
                                    color: "gray.200"
                                }}
                            >
                                Series
                            </Text>
                        </Box>
                    )
                }
            </HStack>
            <Heading as="h1" size='2xl' mt={1} mb={3}>{mdxSource.frontmatter.title}</Heading>
            <HStack my={2} spacing={5} fontFamily="heading">
                <Flex>
                    <Icon as={BiTime} h={5} w={5} mr={2} my="auto" color="dark" />
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
            
            <Heading as="h1" fontSize="4xl" mt={10} mb="2.5rem">
                Related Posts
            </Heading>
            <Posts posts={mdxSource.relatedPosts} type="blog" />

            <Heading as="h1" fontSize="4xl" mt={10} mb="2.5rem">
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

    var headings: string[] = getHeadings(source)

    // @ts-ignore
    var relatedPosts = getPostsByTags(mdxSource.frontmatter.tags)
    relatedPosts = relatedPosts.filter(post => post.slug !== slug)
    relatedPosts = relatedPosts.slice(0, 3)

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