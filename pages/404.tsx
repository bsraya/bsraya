import { Heading, Text, Button } from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import Seo from '../components/Seo'

function _404(): JSX.Element {
    return (
        <Layout>
            <Seo title="404" type="website" />
            <Heading as="h1">404 Not Found</Heading>
            <Text my={5}>You seem abit lost, but chill ...</Text>
            <Button colorScheme="blue" fontFamily="Fira Code">
                <NextLink passHref href="/">
                    Home
                </NextLink>
            </Button>
        </Layout>
    )
}

export default _404
