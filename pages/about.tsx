import Layout from '../components/Layout'
import Experience from '../components/Experience'
import Skillset from '../components/Skillset'
import {  Heading, Link, Stack, Text } from '@chakra-ui/react'

export default function About(): JSX.Element {
    const resumeLink = "https://drive.google.com/file/d/1n2HO7mkmi0_TTvP5SyOY4Dj2nKUrKb80/view?usp=sharing"
    return (
        <Layout>
            <Stack>
                <Heading as="h1">
                    About me
                </Heading>
                <Text lineHeight="taller">
                    Hey, I am Bijon Setyawan Raya! I am a graduate Computer Science student at National Tsing Hua University in Hsinchu, Taiwan.
                </Text>
            </Stack>

            <Experience />

            <Skillset />

            <Text mt={10} mb={5}>
                For more details, my resume can be downloaded <Link href={resumeLink} color="#fc909f" isExternal>here</Link>.
            </Text>
        </Layout>
    )
}