import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Heading,
    Text,
    Link,
    Flex,
    useMediaQuery,
    HStack,
    VStack
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Posts from '../components/Posts'
import Layout from '../components/Layout'
import type { Post } from '../lib/types'
import NextLink from 'next/link'
import sortPost from '../lib/sortpost'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export default function Home({ posts }: { posts: Post[] }): JSX.Element {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
    return (
        <Layout>
            {
                isMobile ? (
                    <VStack align="left">
                        <Box>
                            <Image 
                                alt="avatar"
                                height={100}
                                width={100}
                                layout="fixed"
                                priority
                                src="/images/avatar.png"
                            />
                        </Box>
                        <Box>
                            <Heading as="h1">Bijon Setyawan Raya</Heading>
                            <Text fontSize="sm" mt={1}>
                                A Computer Science graduate student at National Tsing Hua University
                            </Text>
                        </Box>
                    </VStack>
                ) : (
                    <HStack>
                        <Box mr={2}>
                            <Image
                                alt="avatar"
                                height={100}
                                width={100}
                                layout="fixed"
                                priority
                                src="/images/avatar.png"
                            />
                        </Box>
                        <Box>
                            <Heading as="h1">Bijon Setyawan Raya</Heading>
                            <Text fontSize="sm" mt={1}>
                                A Computer Science graduate student at National Tsing Hua University
                            </Text>
                        </Box>
                    </HStack>   
                )
            }
            <Alert mt={10} variant="left-accent" status='info'>
                <AlertIcon
                    mt={1}
                    mb="auto"
                />
                <Box lineHeight="taller">
                    I am currently a TA in a <Text display="inline-flex" fontWeight="bold">Linear Algebra</Text> course at National Tsing Hua University.
                    <Text>
                        Please click on the link below to see some of the topics I have covered.
                    </Text>
                    <Button
                        my={2}
                        colorScheme="blue"
                    >
                        <NextLink href="/blog/linear-algebra" passHref>
                            Bring it on!
                        </NextLink>
                    </Button>
                </Box>
            </Alert>

            <Heading as="h2" size="md" mt={10} mb={3}>Recent posts</Heading>
            <Posts posts={posts} type="blog" />
            <NextLink href="/blog" passHref>
                <Link _hover={{textDecoration: "none"}}>
                    <Flex >
                        <Text >Read all posts</Text><ArrowForwardIcon ml={2} my="auto" />
                    </Flex>
                </Link>
            </NextLink>
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
    posts = sortPost(posts)

    posts = posts.slice(0, 3)

    return {
        props: {
            posts
        }
    }
}