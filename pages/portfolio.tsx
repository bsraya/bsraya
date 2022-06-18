import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import Posts from './../components/Posts'
import { Heading } from '@chakra-ui/react'
import type { IPost } from '../types/post.type'

export default function Portfolio({ portfolios }: { portfolios: IPost[] }): JSX.Element {
    return (
        <Layout>
            <Heading as="h2" size="md" mb={3}>Portfolio</Heading>
            <Posts posts={portfolios} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get all folders' in content/portfolios
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'portfolios'))
    
    // iterate through all the folders
    const portfolios = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'portfolios', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    return {
        props: {
            portfolios
        }
    }
}