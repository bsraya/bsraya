import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Experience from '../components/About/Experience'
import Skillset from '../components/About/Skillset'

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/19T0UwJQ3l_v4mStC_3-2g5jRJxYTkZKK/view?usp=sharing"

    return (
        <Layout>
            <Seo title="About" type="website" />
            <Box maxWidth="720px" mx={5}>
                <Stack>
                    <Heading as="h1">
                        About me
                    </Heading>
                    <Text color="gray.500">
                        Hey, I am Bijon Setyawan Raya. I am a fullstack developer, and also a Computer Science graduate student at National Tsing Hua University in Hsinchu, Taiwan.
                    </Text>
                    <Text color="gray.500">
                        In my graduate program, I am focusing on Deep Learning. Due to the necessity of my lab, I created a distributed deep learning system that can be used to train deep learning models efficiently on a cluster of machines.
                        I also created a web application that can be used to monitor the status of the trainig jobs, as well as the machines in the cluster.
                    </Text>
                    <Text color="gray.500">
                        Down there, you will be able to see my experience as a developer, as well as the technologies that I am and have used in the past. Those technologies are shown as icons, and please hover over the icons to see its description.
                        For more details, my resume can be seen or downloaded <><Link href={resumeLink} color="dark" _dark={{ color: "light" }} isExternal textDecoration="underline" _hover={{ textDecoration: "none" }}>here</Link><ExternalLinkIcon mx="5px" mb="4px" /></>.
                    </Text>
                </Stack>
            </Box>
            <Box mx={5}>
                <Experience />
                <Skillset />
            </Box>
        </Layout>
    )
}