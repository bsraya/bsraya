import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/layouts/Page'
import { Box, Heading, Text } from '@chakra-ui/react'

interface Portfolio {
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

export default function Portfolio({portfolios}: {portfolios: Portfolio[]}) {
    return (
        <Layout>
            <Heading>This is Portfolio page</Heading>
            {
                portfolios.map((portfolio) => {
                    return (
                        <Box key={portfolio.slug} mb={3}>   
                            <Text>{portfolio.frontMatter.title}</Text> 
                            <Text>{portfolio.frontMatter.description}</Text>
                            <Text>{portfolio.frontMatter.tags}</Text>
                        </Box>
                    )
                })
            }
        </Layout>
    )
}

export const getStaticProps = async () => {
    // get all the files in /content/posts
    const files = fs.readdirSync(path.join('content', 'portfolios'))
    
    // iterate through all the files in /content/posts
    const portfolios = files.map(filename => {
        const slug = filename.replace('.mdx', '')
        const content = fs.readFileSync(path.join('content', 'portfolios', filename), 'utf-8')
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