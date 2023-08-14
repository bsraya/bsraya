import {
    Flex,
    Text,
    Stack,
    Button,
    Heading,
    Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Experience from '../components/About/Experience'
import Skillset from '../components/About/Skillset'
import Education from '../components/About/Education'
import Achievements from '../components/About/Achievements'
import Conference from '../components/About/Conference'

function Description(): JSX.Element {
    return (
        <>
            <Text style={{ color: "gray.500" }}>
                I am Bijon Setyawan Raya. I am a fullstack developer, currently a Computer Science graduate student at National Tsing Hua University in Hsinchu, Taiwan.
            </Text>
            <Text
                style={{
                    color: "gray.500"
                }}
            >
                In my graduate degree, I focus on Numerical Optimization and Cloud Computing. Due to the necessity of my lab, I created a distributed deep learning system that can be used to train deep learning models efficiently on a cluster of machines.
            </Text>
        </>
    )
}


export default function About(): JSX.Element {
    return (
        <Layout>
            <Seo title="About" type="website" />
            <Stack my="5rem" spacing="1rem">
                <Heading fontSize="2rem">
                    Hey!
                </Heading>
                <Description />
                <Flex
                    gap='3'
                    wrap='wrap'
                >
                    <Button
                        width="fit-content"
                        fontFamily="heading"
                        color="white"
                        bgGradient="linear-gradient(to right, #7474bf, #348ac7)"
                        _hover={{
                            filter: "brightness(1.2)"
                        }}
                    >
                        <NextLink
                            passHref
                            href="/portfolio/schedulearn"
                        >
                            Read Schedulearn
                        </NextLink>
                    </Button>
                    <Button
                        width="fit-content"
                        fontFamily="heading"
                        color="white"
                        bgGradient="linear-gradient(to right, #7474bf, #348ac7)"
                        _hover={{
                            filter: "brightness(1.2)"
                        }}
                    >
                        <Link
                            href={process.env.NEXT_PUBLIC_RESUME_URL || process.env.RESUME_URL}
                            isExternal
                            _hover={{
                                textDecoration: "none"
                            }}
                        >
                            View resume
                        </Link>
                    </Button>
                    
                    <Button
                        width="fit-content"
                        fontFamily="heading"
                        color="white"
                        bgGradient="linear-gradient(to right, #7474bf, #348ac7)"
                        _hover={{
                            filter: "brightness(1.2)"
                        }}
                    >
                        <NextLink
                            passHref
                            href="/portfolio"
                        >
                            See projects
                        </NextLink>
                    </Button>
                </Flex>
            </Stack>

            <Experience />
            <Skillset />
            <Education />
            <Achievements />
            <Conference />
        </Layout>
    )
}