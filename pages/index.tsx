import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    useBreakpointValue,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import type { Post } from '../lib/types'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'
import Image from 'next/image'

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <Layout>
            <Seo title="Home" type="website" />
            <VStack
                spacing="10rem"
                align="left"
                justify="left"
            >
                <Box my={ isDesktop ? "15rem" : "10rem"}>
                    <Heading as="h1" fontSize="5rem">
                    A Fullstack Developer
                    </Heading>
                    <VStack
                        mt={3}
                        spacing={2}
                        align="left"
                        justify="left"
                    >
                        <Text>
                            Bijon develops both frontend and backend applications.
                        </Text>
                        <Text>
                            Based in Taipei, Taiwan.
                        </Text>
                    </VStack>
                </Box>
                
                <Box>
                    <Heading as="h2" fontSize="3rem">
                        Latest Project
                    </Heading>
                    <SimpleGrid
                        // when the screen is smaller than 600px, the grid will be 1 column
                        // when the screen is larger than 600px, the grid will be 2 columns
                        columns={ isDesktop ? 2 : 1 }
                        spacing="10"
                        mt="5"
                    >
                        <Box>
                            <Image
                                src="/images/portfolios/personal-website/dark-mode.png"
                                alt="Next.js"
                                width={500}
                                height={500}
                            />
                        </Box>
                        <LinkBox
                            as='article'
                        >
                            <Box>
                                <Heading as="h3" fontSize="2rem" mb={3}>
                                    <LinkOverlay href="/portfolio/schedulearn" _hover={{ color: "#023C72" }}>
                                        Schedulearn
                                    </LinkOverlay>
                                </Heading>
                                <Text>
                                    Schedulearn is a smart deep learning scheduling system, and it is easy to setup. No Kubernetes needed. Sending a training request is as easy as sending a JSON file, and this is to ensure users can focus more on developing their models.
                                </Text>
                            </Box>
                        </LinkBox>
                    </SimpleGrid>
                </Box>
                
                <Box>
                    <Heading as="h2" fontSize="3rem">
                        Latest Posts
                    </Heading>
                    <SimpleGrid
                        columns={ isDesktop ? 3 : 1 }
                        spacing="10"
                        mt="5"
                    >
                        {posts.map((post) => (
                            <LinkBox
                                as='article'
                                key={post.slug}
                            >
                                <Box key={post.slug} p="5">
                                    <Image
                                        src="/images/portfolios/personal-website-v2/pw.png"
                                        alt="Next.js"
                                        width={500}
                                        height={500}
                                        style={{ marginLeft: "auto", marginRight: "auto" }}
                                    />
                                    <Heading as="h3" fontSize="2rem" my={3}>
                                        <LinkOverlay href={`/blog/${post.slug}`} _hover={{ color: "#023C72" }}>
                                            {post.frontMatter.title}
                                        </LinkOverlay>
                                    </Heading>
                                    <Text fontSize="1rem">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum reprehenderit dicta praesentium vel omnis sunt soluta deleniti quia eligendi est eaque tenetur sed at, voluptas officia quis nulla placeat numquam.
                                    </Text>
                                </Box>
                            </LinkBox>
                        ))}
                    </SimpleGrid>
                </Box>
            </VStack>
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get the name of all folders in /content/posts
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'posts'))

    // iterate through all the files in /content/posts
    var posts: Post[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)

        return {
            frontMatter,
            slug: slug
        }
    })

    posts = posts.filter((post: Post) => post.frontMatter.publish)

    // sort the posts by date
    posts = sortPosts(posts)

    posts = posts.slice(0, 3)

    return {
        props: {
            posts
        }
    }
}