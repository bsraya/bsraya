import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    Container,
    VStack,
    useBreakpointValue,
    LinkBox,
    LinkOverlay,
    Flex,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Post } from '../lib/types'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'
import Image from 'next/image'
import Navbar from "../components/Navigation/Bar"
import Footer from '../components/Footer'

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
    const isDesktop = useBreakpointValue({ base: false, md: true }) 
    return (
        <>
            <Navbar />
            <Container maxWidth="container.lg">
                <Seo title="Home" type="website" />
                <VStack
                    spacing="5rem"
                    align="left"
                >
                    <Box mt="5rem" display="flex" flexDirection="column" justifyContent="center">
                        <Heading
                            as="h1"
                            fontSize="4rem"
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
                        <SimpleGrid
                            columns={ isDesktop ? 2 : 1 }
                            spacing="5"
                            mt="5"
                        >
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
                            <LinkBox
                                as='article'
                            >
                                <Box p="2rem">
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
                        </SimpleGrid>
                    </Box>
                    
                    <Box>
                        <Heading
                            as="h2"
                            fontSize="2rem"
                            fontWeight="400"
                        >
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
                                    <Box
                                        key={post.slug}
                                        p="5"
                                    >
                                        <Heading as="h3" fontSize="2rem" my={1}>
                                            <LinkOverlay href={`/blog/${post.slug}`} _hover={{ color: "gray.800" }}>
                                                {post.frontMatter.title}
                                            </LinkOverlay>
                                        </Heading>
                                        <Text>
                                            {post.frontMatter.description}
                                        </Text>
                                        <Box>
                                            {
                                                post.frontMatter.tags.map((tag: string) => (
                                                    <Text
                                                        key={tag}
                                                        as="a"
                                                        fontSize="sm"
                                                        color="gray.500"
                                                        mr={2}
                                                        href={`/tags/${tag}`}
                                                        fontFamily="Fira Code"
                                                        _hover={{
                                                            textDecoration: "underline",
                                                        }}
                                                    >
                                                        #{tag}
                                                    </Text>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </LinkBox>
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>
            </Container>
            <Footer />
        </>
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

    posts = posts.slice(0, 6)

    return {
        props: {
            posts
        }
    }
}