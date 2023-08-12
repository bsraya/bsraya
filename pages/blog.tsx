import {
    Text,
    Input,
    Heading,
    InputGroup,
    CloseButton,
    FormControl,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import type { IPost } from '../lib/types'
import Posts from '../components/Posts'
import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'
import getUniqueTags from '../lib/tags'
import Tags from '../components/Tags'

export default function Blog({ posts, uniqueTags }: { posts: IPost[], uniqueTags: string[] }) {
    const [search, setSearch] = useState('')
    const filteredPosts = useMemo(() => {
        return posts.filter(
            post =>
                post.frontMatter.title.toLowerCase().includes(search.toLowerCase()) ||
                post.frontMatter.description.toLowerCase().includes(search.toLowerCase())
        )
    }, [posts, search])

    return (
        <Layout>
            <Seo title="Blog" type="website" />
            <Heading mt="5rem" fontSize="2rem">Blog</Heading>
            <Tags tags={uniqueTags} type="blog" />
            <FormControl mt={5}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        fontSize="1.2em"
                        px={0}
                        zIndex={0}
                    >
                        <FiSearch aria-hidden />
                    </InputLeftElement>
                    <Input
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        placeholder="Search articles"
                        fontFamily="heading"
                    />
                    {
                        search.length > 1 && (
                            <InputRightElement>
                                <CloseButton
                                    rounded="full"
                                    size="sm"
                                    onClick={() => setSearch('')}
                                />
                            </InputRightElement>
                        )
                    }
                </InputGroup>
            </FormControl>
            {
                filteredPosts.length > 0 && (
                    <Posts posts={filteredPosts} type="blog" />
                )
            }
            {filteredPosts.length === 0 && <Text my={12} fontSize="md">No posts found</Text>}
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

    return {
        props: {
            posts: posts,
            uniqueTags: getUniqueTags()
        }
    }
}