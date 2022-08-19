import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import Posts from './../components/Posts'
import { Heading } from '@chakra-ui/react'
import type { Post } from '../lib/types'
import { sortPosts } from '../lib/posts'
import Seo from '../components/Seo'

export default function Portfolio({ portfolios }: { portfolios: Post[] }): JSX.Element {
    return (
        <Layout>
            <Seo title="Portfolio" type="website" />
            <Heading>Portfolio</Heading>
            <Posts posts={portfolios} type="portfolio" />
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get the name of all folders in /content/portfolios
    const folders = fs.readdirSync(path.join(process.cwd(), 'content', 'portfolios'))
    
    // iterate through all the folders
    var portfolios: Post[] = folders.map(slug => {
        const content = fs.readFileSync(path.join('content', 'portfolios', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })
    
    portfolios = portfolios.filter((portfolio: Post) => portfolio.frontMatter.publish)

    portfolios = sortPosts(portfolios)

    return {
        props: {
            portfolios
        }
    }
}
