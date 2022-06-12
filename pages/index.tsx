import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import Layout from '../components/Layout'

const Home: NextPage = () => {
    return (
        <Layout>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background="gray.100" p={12} rounded={6}>
                    <h1>Hello Next.js</h1>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Home