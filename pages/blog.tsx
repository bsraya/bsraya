import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DateTime } from 'luxon'
import { Box, Heading, Input, Text } from '@chakra-ui/react'
import Layout from '../components/Layout'
import type { IPost } from '../types/post.type'
import Posts from '../components/Posts'
import { useCallback, useRef, useState } from 'react'

export default function Blog({ posts }: { posts: IPost[] }): JSX.Element {
    const searchRef = useRef(null) as React.MutableRefObject<HTMLInputElement | null>
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState<IPost[]>([])
    const searchEndpoint = (query: string) => `/api/search?q=${query}`

    const onChange = useCallback((event: any) => {
        const query = event.target.value
        setQuery(query)
        if (query.length) {
            fetch(searchEndpoint(query))
                .then((res) => res.json())
                .then((res) => {
                    setResults(res.results)
                })
        }
        setResults([])
    }, [])

    const onFocus = () => {
        setActive(true)
        window.addEventListener('click', onClick)
    }

    const onClick = useCallback((event: any) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            setQuery('')
            setResults([])
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <Layout>
            <Heading>Blog</Heading>
            <>
                <Input
                    size='lg'
                    placeholder='Search articles'
                    ref={searchRef}
                    type='text'
                    value={query}
                    onChange={onChange}
                    onFocus={onFocus}
                />
                {
                    active && query.length > 0 && results.length > 0 && (
                        <Box ref={searchRef}>
                        <Posts posts={results} type="blog" />
                        </Box>
                    )
                }
                {
                    active && query.length > 0 && results.length === 0 && (
                        <Text>No results found</Text>
                    )
                }
            </>
            {
                !active && query.length === 0 && <Posts posts={posts} type="blog" />
            }
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