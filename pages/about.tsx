import { Button, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Experience from '../components/About/Experience'
import Skillset from '../components/About/Skillset'
import {
    LinkIcon
} from '@chakra-ui/icons';

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/19T0UwJQ3l_v4mStC_3-2g5jRJxYTkZKK/view?usp=sharing"

    return (
        <Layout>
            <Seo title="About" type="website" />
            <Stack mt="5rem" spacing="1rem">
                <Heading as="h1">
                    Hey!
                </Heading>
                <Text color="gray.500">
                    I am Bijon Setyawan Raya. I am a fullstack developer, currently a Computer Science graduate student at National Tsing Hua University in Hsinchu, Taiwan.
                </Text>
                <Text color="gray.500">
                    In my graduate degree, I focus on Numerical Optimization and Cloud Computing. Due to the necessity of my lab, I created a distributed deep learning system that can be used to train deep learning models efficiently on a cluster of machines.
                    For more details, <Link textDecoration="underline" _hover={{textDecoration: "none"}}><NextLink href="/portfolio/schedulearn" legacyBehavior>read here</NextLink><LinkIcon mx='5px' mb="8px" /></Link>.
                </Text>
                <Button
                    width="fit-content"
                    colorScheme="blue"
                    mx="auto"
                    onClick={() => {
                    window.open(
                        resumeLink,
                            '_blank'
                        );
                    }}
                    fontFamily="Fira Code"
                >
                    Download resume
                </Button>
            </Stack>
            <Experience />
            <Skillset />
        </Layout>
    )
}