import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Skillset from '../components/Skillset'
import Seo from '../components/Seo'
import { Heading, Link, Stack, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/1Je_YZylmlP-45oL8G7CJ1p7qlYYSbXvk/view?usp=sharing"

    return (
        <Layout>
            <Seo title="About" type="website" />
            <Stack>
                <Heading as="h1">
                    About me
                </Heading>
                <Text lineHeight="taller" color="gray.500">
                    Hey, I am Bijon Setyawan Raya! I am a graduate Computer Science student at National Tsing Hua University in Hsinchu, Taiwan.
                </Text>
                <Text lineHeight="taller" color="gray.500">
                    Here, I will mention briefly about my background and my skillset. For more details, my resume can be seen or downloaded <><Link href={resumeLink} color="dark" _dark={{color: "light"}} isExternal>here</Link><ExternalLinkIcon mx="5px" mb="4px" /></>.
                </Text>
            </Stack>
            <Experience />
            <Skillset />
        </Layout>
    )
}