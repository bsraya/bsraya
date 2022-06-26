import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DateTime } from 'luxon'
import { FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement, CloseButton, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import type { IPost } from '../types/post.type'
import Posts from '../components/Posts'
import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Blog({ posts }: { posts: IPost[] }): JSX.Element {
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
            <Heading>Blog</Heading>
            <FormControl mt={5}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        fontSize="1.2em"
                        px={0}
                        children={<FiSearch aria-hidden />}
                    />
                    <Input
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        placeholder="Search articles"
                    />
                    {
                        search.length > 1 && (
                            <InputRightElement
                                children={
                                    <CloseButton
                                        rounded="full"
                                        size="sm"
                                        onClick={() => setSearch('')}
                                    />
                                }
                            />
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
    var posts = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    posts.sort((a, b) => {
        const aDate = DateTime.fromFormat(a.frontMatter.date, "LLLL dd, yyyy")
        const bDate = DateTime.fromFormat(b.frontMatter.date, "LLLL dd, yyyy")
        return bDate - aDate
    })

    return {
        props: {
            posts
        }
    }
}