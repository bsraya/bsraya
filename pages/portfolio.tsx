import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout'
import Posts from './../components/Posts'
import { Heading } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import type { IPost } from '../types/post.type'

export default function Portfolio({ portfolios }: { portfolios: IPost[] }): JSX.Element {
    return (
        <Layout>
            <Heading as="h2" size="md" mb={3}>Portfolio</Heading>
            <Posts posts={portfolios} type="portfolio" />
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get the name of all folders in /content/portfolios
    const files = fs.readdirSync(path.join(process.cwd(), 'content', 'portfolios'))
    
    // iterate through all the folders
    var portfolios = files.map(slug => {
        const content = fs.readFileSync(path.join('content', 'portfolios', slug, 'index.mdx'), 'utf-8')
        const { data: frontMatter } = matter(content)
        return {
            frontMatter,
            slug: slug
        }
    })

    portfolios.sort((a, b) => {
        const aDate = DateTime.fromFormat(a.frontMatter.date, "LLLL dd, yyyy")
        const bDate = DateTime.fromFormat(b.frontMatter.date, "LLLL dd, yyyy")
        return bDate - aDate
    })

    return {
        props: {
            portfolios
        }
    }
}