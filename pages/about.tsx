import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Experience from '../components/About/Experience'
import Skillset from '../components/About/Skillset'
import Education from '../components/About/Education'
import Achievements from '../components/About/Achievements'
import Conference from '../components/About/Conference'

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/1d1zEAHY8f4UoPDdK-iaGi4FL1zskSiE7/view?usp=share_link"

    return (
        <Layout>
            <Seo title="About" type="website" />
            <Stack my="5rem" spacing="1rem">
                <Heading as="h1">
                    Hey!
                </Heading>
                <Text color="gray.500">
                    I am Bijon Setyawan Raya. I am a fullstack developer, currently a Computer Science graduate student at National Tsing Hua University in Hsinchu, Taiwan.
                </Text>
                <Text color="gray.500">
                    In my graduate degree, I focus on Numerical Optimization and Cloud Computing. Due to the necessity of my lab, I created a distributed deep learning system that can be used to train deep learning models efficiently on a cluster of machines.
                </Text>
                <HStack
                    flexWrap="wrap"
                    spacing={3}
                    rowGap={3}
                >
                    <Button
                        width="fit-content"
                        colorScheme="blue"
                        fontFamily="Fira Code"
                    >
                        <NextLink
                            href="/portfolio/schedulearn"
                        >
                            Read Schedulearn
                        </NextLink>
                    </Button>
                    <Button
                        width="fit-content"
                        colorScheme="blue"
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
                </HStack>
                <NextLink
                    href="/portfolio"
                >
                    <Button
                        width="fit-content"
                        colorScheme="blue"
                        fontFamily="Fira Code"
                    >
                        See projects
                    </Button>
                </NextLink>
            </Stack>

            <Experience />
            <Skillset />
            <Education />
            <Achievements />
            <Conference />
        </Layout>
    )
}