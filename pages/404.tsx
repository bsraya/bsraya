import { Heading, Text, Button } from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'

function _404(): JSX.Element {
    return (
        <Layout>
            <Heading as="h1">404 Not Found</Heading>
            <Text my={5}>Chill ... You are just lost</Text>
            <Button colorScheme="blue"><NextLink href="/">Go to Home</NextLink></Button>
        </Layout>
    )
}

export default _404
