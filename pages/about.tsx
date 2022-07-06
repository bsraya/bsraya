import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Skillset from '../components/Skillset'
import {  Heading, Link, Stack, Text } from '@chakra-ui/react'

export default function About(): JSX.Element {
    return (
        <Layout>
            <Stack>
                <Heading as="h1">
                    About me
                </Heading>
                <Text lineHeight="taller">
                    Hey, I am Bijon Setyawan Raya! I am a graduate Computer Science student at National Tsing Hua University in Hsinchu, Taiwan. So far, I have been living in Taiwan for six years, and I am on my way to get my master&rsquo;s degree in Computer Science.
                </Text>
            </Stack>

            <Experience />

            <Skillset />

            <Text mt={10} mb={5}>
                For more details, my resume can be downloaded <Link href={process.env.RESUME_URL} color="#fc909f" isExternal>here</Link>.
            </Text>
        </Layout>
    )
}