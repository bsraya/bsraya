import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/layouts/Page'
import { Heading, Text } from '@chakra-ui/react'

interface Props {
    frontMatter: {
        title: string
        date: string
        readingTime: string
        description: string
        tags: string[]
        publish: boolean
    }
    slug: string
}

function Tag ({ frontMatter, slug }: Props) {
    return (
        <Layout>
            {
                frontMatter.title && (
                    <Heading as="h1">{frontMatter.title}</Heading>
                )
            }
        </Layout>
    )
}

const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'posts'))

    const paths = folders.map(name => ({
        params: {
            slug: name
        }
    }))

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { tag } }: any) => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join('content', 'posts'))

    // get all posts' front matter with a specific tag
    const posts = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'posts', slug, slug + '.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        if (frontMatter.tags.includes(tag)) {
            return {
                frontMatter,
                slug
            }
        }
    })

    return {
        props: {
            posts
        }
    }
}

export { getStaticProps, getStaticPaths }
export default Tag