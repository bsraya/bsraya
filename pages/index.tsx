import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'

const Home: NextPage = () => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <h1>Hello Next.js</h1>
            </Flex>
        </Flex>
    )
}

export default Home