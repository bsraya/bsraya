import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import NextLink from 'next/link'
import Layout from '../../components/layouts/Page'
import { Button, Flex, Heading, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react'

interface Post {
    frontMatter: {
        title: string
        date: string
        readingTime: string
        description: string
        tags: string[]
        publish: boolean
    },
    slug: string
}

// take "posts" as the parameter
function Tag({ posts, tag }: { posts: Post[], tag: string }) {
    const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
    return (
        <Layout>
            <Heading as="h1" size="xl">
                <Flex>
                    {posts.length} posts tagged with
                    <Text
                        as="p"
                        // pick a color from the "colors" array
                        color={colors[Math.floor(Math.random() * colors.length)]}
                    >&nbsp;#</Text>{tag}
                </Flex>
            </Heading>
            {
                posts.map((post:Post) => (
                    post && (
                        <LinkBox as="article" p='5' my={5} borderWidth='1px' rounded="md" key={post.slug}>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                {post.frontMatter.date} - {post.frontMatter.readingTime} reading time
                            </Text>
                            <NextLink href={'/blog/' + post.slug} passHref>
                                <LinkOverlay >
                                    <Heading as="h1">
                                        {post.frontMatter.title}
                                    </Heading>
                                </LinkOverlay>  
                            </NextLink>
                            <Text my={5}>{post.frontMatter.description}</Text>
                            <Flex>
                                {
                                    post.frontMatter.tags.map((tag) => {
                                        var randomColor = colors[Math.floor(Math.random() * colors.length)]
                                        return (
                                            <NextLink
                                                href={'/tag/' + tag}
                                                key={tag}
                                                passHref
                                            >
                                                <Button
                                                    mr={2}
                                                    background={useColorModeValue(`white`, 'rgba(26,32,44)')}
                                                    _hover={{
                                                        bg: `${randomColor}.100`,
                                                        color: 'rgba(26,32,44)',
                                                        borderColor: `${randomColor}.700`,
                                                    }}
                                                >
                                                    <Text color={randomColor+'.700'}>#</Text>
                                                    <Text>{tag}</Text>
                                                </Button>
                                            </NextLink>
                                        )
                                    })
                                }
                            </Flex>
                        </LinkBox>
                    )
                ))
            }
        </Layout>
    )
}

const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // create a Set called "tags" to store all tags
    // so that there is no multiple tags in the set
    const set = new Set<string>()

    // get all tags from all posts
    folders.forEach(name => {
        const content = fs.readFileSync(path.join('content', 'posts', name, name + '.mdx'), 'utf8')
        const { data: frontMatter } = matter(content)
        frontMatter.tags.forEach(
            // tag is string type
            (tag: string) => set.add(tag)
        )
    })
    
    // create an array called "paths" with string type
    const paths: string[] = []

    // iterate through all the tags in "set"
    set.forEach(tag => {
        paths.push(`/tag/${tag}`)
    })

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { tag } }: any) => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // get all posts' front matter with a specific tag
    const filtered = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        if (frontMatter.tags.includes(tag)) {
            return {
                frontMatter,
                slug: slug
            }
        }
    })

    // remove undefined elements in the "posts" array
    const posts = filtered.filter(Boolean)

    return {
        props: {
            posts,
            tag
        }
    }
}

export { getStaticProps, getStaticPaths }
export default Tag