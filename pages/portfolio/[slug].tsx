import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/layouts/Article'
import { Heading } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

interface Props {
    frontMatter: any
    mdxSource: any
}

const Portfolio = ({ frontMatter, mdxSource }: Props) => {
    return (
        <Layout>
            <Heading as="h1">{frontMatter.title}</Heading>
            <h2>{frontMatter.date}</h2>
            <MDXRemote {...mdxSource} components={{}} />
        </Layout>
    )
}

const getStaticPaths = async () => {
    const folders = fs.readdirSync(path.join('content', 'portfolios'))

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

// slug is the id of the post, which is a string
const getStaticProps = async ( { params: { slug } }: any ) => {
    const markdownWithMeta = fs.readFileSync(path.join('content', 'portfolios',
        slug, slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default Portfolio