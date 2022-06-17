import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/layouts/Page'
import { Flex, LinkBox, LinkOverlay, Heading, Text, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

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

export default function Portfolio({ portfolios }: { portfolios: Portfolio[] }) {
    const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
    return (
        <Layout>
            <Heading as="h2" size="md" mb={3}>Portfolio</Heading>
            {
                portfolios.map((portfolio) => {
                    return (
                        <LinkBox as="article" p='5' my={5} borderWidth='1px' rounded="md" key={portfolio.slug} >   
                            <Text
                                fontSize="sm"
                                color="gray.500"
                            >
                                {portfolio.frontMatter.date} - {portfolio.frontMatter.readingTime} reading time
                            </Text>
                            <NextLink href={'/portfolio/' + portfolio.slug} passHref>
                                <LinkOverlay >
                                    <Heading as="h1">
                                        {portfolio.frontMatter.title}
                                    </Heading>
                                </LinkOverlay>  
                            </NextLink>
                            <Text my={5}>{portfolio.frontMatter.description}</Text>
                            <Flex>
                                {
                                    portfolio.frontMatter.tags.map((tag) => {
                                        var randomColor = colors[Math.floor(Math.random() * colors.length)]
                                        return (
                                            <Button
                                                key={tag}
                                                background="white"
                                                mr={2}
                                                border='2px'
                                                borderColor={randomColor+'.700'}
                                                _hover={{
                                                    // background 50% opacity
                                                    bg: `${randomColor}.200`,
                                                }}
                                            >
                                                <Text
                                                    // get random color from "colors" array
                                                    color={randomColor+'.700'}
                                                >#</Text>
                                                <Text>{tag}</Text>
                                            </Button>
                                        )
                                    })
                                }
                            </Flex>
                        </LinkBox>
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