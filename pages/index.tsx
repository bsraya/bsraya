import {
    Box,
    Text,
    VStack,
    Heading,
    LinkBox,
    keyframes,
    SimpleGrid,
    useBreakpointValue,
    usePrefersReducedMotion,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { IPost } from '../lib/types'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import NextLink from 'next/link'
import MainProject from '../components/Cards/Project'

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    const mainProjects = [
        {
            img_location: "/images/portfolios/schedulearn/schedulearn-architecture.png",
            link: "/portfolio/schedulearn",
            title: "Schedulearn",
            techs: ["Python", "FastAPI", "Horovod", "SQLite"]
        },
        {
            img_location: "/images/portfolios/recommendation-system/spotify.webp",
            link: "/portfolio/recommendation-system-data-collection",
            title: "Music Recommendation System",
            techs: ["Python", "Scikit Learn"]
        }
    ]

    const isDesktop = useBreakpointValue({ base: false, md: true })
    const upAndDown = keyframes`
        from { transform: translateX(0); }
        to { transform: translateX(10px); }
    `
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${upAndDown} 0.5s ease-in-out infinite alternate`
    
    return (
        <Layout>
            <Seo title="Home" type="website" />
            <VStack
                mt="3rem"
                spacing="5rem"
                align="left"
            >    
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <Text
                        as="h1"
                        fontSize="2rem"
                        fontWeight="700"
                        width="fit-content"
                        bgGradient="linear-gradient(to right, #7474bf, #348ac7)"
                        bgClip="text"
                    >
                        BIJON SETYAWAN RAYA
                    </Text>
                    <Text>
                        I am a fullstack developer. Based in Taipei, Taiwan.
                    </Text>
                </Box>
                
                <Box>
                    <Text
                        as="h2"
                        fontSize="1.5rem"
                        fontWeight="400"
                        mb="1"
                    >
                        Recent Projects
                    </Text>
                    <SimpleGrid
                        columns={ isDesktop ? 2 : 1 }
                        spacing="5"
                    >
                        {
                            mainProjects.map((project, index) => {
                                return (
                                    <MainProject
                                        key={index}
                                        img_location={project.img_location}
                                        link={project.link}
                                        title={project.title}
                                        techs={project.techs}
                                    />
                                )
                            }
                        )}
                    </SimpleGrid>
                </Box>
                
                <Box>
                    <Text
                        as="h2"
                        fontSize="1.5rem"
                        fontWeight="400"
                        mb="1"
                    >
                        Latest Posts
                    </Text>
                    <Posts posts={posts} type="blog" />
                    <LinkBox 
                        mt="2rem"
                        _hover={{
                            '& > *': {
                                transform: 'translateX(10px)',
                                animation: animation,
                            }
                        }}
                        width="130px"
                    >
                        <NextLink passHref href="/blog">
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