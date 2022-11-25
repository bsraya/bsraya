import {
    Box,
    Heading,
    Text,
    VStack,
    useBreakpointValue,
    LinkBox,
    LinkOverlay,
    Link,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import type { IPost } from '../lib/types'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import NextLink from 'next/link'

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <Layout>
            <Seo title="Home" type="website" />
            <VStack
                mt="5rem"
                spacing="5rem"
                align="left"
            >
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Heading
                        as="h1"
                        fontSize="3rem"
                        fontFamily="Fira Code"
                        fontWeight="700"
                    >
                        Bijon Setyawan Raya
                    </Heading>
                    <VStack
                        mt={3}
                        spacing={2}
                        align="left"
                        justify="left"
                    >
                        <Text>
                            I develop both frontend and backend applications.
                        </Text>
                        <Text>
                            Based in Taipei, Taiwan.
                        </Text>
                    </VStack>
                </Box>
                
                <Box>
                    <Heading
                        as="h2"
                        fontSize="2rem"
                        fontWeight="400"
                    >
                        Latest Project
                    </Heading>
                    <LinkBox as='article'>
                        <Image
                            src="/images/portfolios/personal-website/dark-mode.png"
                            alt="Next.js"
                            loading='lazy'
                            width={1200}
                            height={700}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                        <Box p="1.5rem">
                            <Heading as="h3" fontSize="2rem" mb={3}>
                                <LinkOverlay href="/portfolio/schedulearn" _hover={{ color: "gray.800" }}>
                                    Schedulearn
                                </LinkOverlay>
                            </Heading>
                            <Text>
                                Schedulearn is a smart deep learning scheduling system, and it is easy to setup. No Kubernetes needed. Sending a training request is as easy as sending a JSON file, and this is to ensure users can focus more on developing their models.
                            </Text>
                        </Box>
                    </LinkBox>
                </Box>
                
                <Box>
                    <Heading
                        as="h2"
                        fontSize="2rem"
                        fontWeight="400"
                    >
                        Latest Posts
                    </Heading>
                    <Posts posts={posts} type="home" />
                    <LinkBox 
                        mt="1rem"
                        _hover={{
                            '& > *': {
                                transform: 'translateX(10px)'
                            }
                        }}
                    >
                        <NextLink href="/blog">
                            More posts 
                        </NextLink>
                        <ArrowForwardIcon ml="0.25rem" translateX="0" transition="transform .15s ease-in-out" />
                    </LinkBox>
                </Box>
            </VStack>
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get the name of all folders in /content/posts
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))

    // iterate through all the files in /content/posts
    var posts: IPost[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug: slug
        }
    })

    posts = posts.filter((post: IPost) => post.frontMatter.publish)

    // sort the posts by date
    posts = sortPosts(posts)

    posts = posts.slice(0, 4)

    return {
        props: {
            posts
        }
    }
}