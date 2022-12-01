import { Heading, Link, Stack, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Experience from '../components/About/Experience'
import Skillset from '../components/About/Skillset'

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/19T0UwJQ3l_v4mStC_3-2g5jRJxYTkZKK/view?usp=sharing"

    return (
        <Layout>
            <Seo title="About" type="website" />
            <Stack mt="5rem">
                <Heading as="h1">
                    Hey!
                </Heading>
                <Text color="gray.500">
                    I am Bijon Setyawan Raya. I am a fullstack developer, currently a Computer Science graduate student at National Tsing Hua University in Hsinchu, Taiwan.
                </Text>
                <Text color="gray.500">
                    In my graduate degree, I focus on Numerical Optimization and Cloud Computing. Due to the necessity of my lab, I created a distributed deep learning system that can be used to train deep learning models efficiently on a cluster of machines.
                    For more details, read <><NextLink href="/portfolio/schedulearn">here</NextLink></>.
                </Text>
                <Text color="gray.500">
                    For more details, my resume can be seen or downloaded <><Link href={resumeLink} isExternal textDecoration="underline" _hover={{ textDecoration: "none" }}>here</Link><ExternalLinkIcon mx="5px" mb="4px" /></>.
                </Text>
            </Stack>
            <Experience />
            <Skillset />
        </Layout>
    )
}