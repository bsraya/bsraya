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

function textAnimation({event, interval, letters}: {event: any, interval: NodeJS.Timeout, letters: string}) {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML
            .split('')
            .map((letter: string, index: number) => {
                if (index < iteration) {
                    return event.target.dataset.value[index]
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1/3
    }, 30);
}

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
                        data-value="BIJON SETYAWAN RAYA"
                        width="fit-content"
                        bgGradient="linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
                        bgClip="text"
                        onMouseEnter={(event) => {
                            let interval: any = null;
                            textAnimation({ event, interval, letters })
                        }}
                    >
                        BIJON SETYAWAN RAYA
                    </Text>
                    <VStack
                        mt={2}
                        spacing={0}
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
                        fontSize="1.5rem"
                        fontWeight="400"
                    >
                        Recent Projects
                    </Heading>
                    <SimpleGrid
                        columns={ isDesktop ? 2 : 1 }
                        spacing="5"
                        mt="5"
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
                    <Heading
                        as="h2"
                        fontSize="1.5rem"
                        fontWeight="400"
                    >
                        Latest Posts
                    </Heading>
                    <Posts posts={posts} type="blog" />
                    <LinkBox 
                        mt="1rem"
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