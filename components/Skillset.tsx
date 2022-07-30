import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Skill from './Skill';
import SQLite from "../icons/sqlite";
import Go from "../icons/go";
import Python from "../icons/python";
import Typescript from "../icons/typescript";
import React from "../icons/react";
import Linux from "../icons/linux";
import Kubernetes from "../icons/kubernetes";
import Docker from "../icons/docker";
import Git from "../icons/git";
import Next from "../icons/next";
import Cypress from "../icons/cypress";
import ChakraUI from "../icons/chakraui";
import Firebase from "../icons/firebase";
import Anaconda from "../icons/anaconda";
import Keras from "../icons/keras";
import Horovod from "../icons/horovod";

export default function Skillset(): JSX.Element {
    return (
        <Box mt="4rem">
            <Heading as="h1">
                Technical Skills
            </Heading>
            
            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Programming Languages
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Go" icon={Go} />
                    <Skill name="Python" icon={Python} />
                    <Skill name="Typescript" icon={Typescript} />
                </Flex>
            </Stack>

            <Stack mt={10}>
                <Heading as="h2" size="md">
                    Web Technologies
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="React" icon={React} />
                    <Skill name="Next.js" icon={Next} />
                    <Skill name="ChakraUI" icon={ChakraUI} />
                    <Skill name="Cypress" icon={Cypress} />
                </Flex>
            </Stack>

            <Stack mt={10}>
                <Heading as="h2" size="md" >
                    ML / DL Technologies
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Anaconda" icon={Anaconda} />
                    <Skill name="Keras" icon={Keras} />
                    <Skill name="Horovod" icon={Horovod} />
                </Flex>
            </Stack>

            <Stack mt={10}>
                <Heading as="h2" size="md">
                    Containerization
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Docker" icon={Docker} />
                    <Skill name="Kubernetes" icon={Kubernetes} />
                </Flex>
            </Stack>

            <Stack mt={10}>
                <Heading as="h2" size="md" >
                    Database
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Firebase" icon={Firebase} />
                    <Skill name="SQLite" icon={SQLite} />
                </Flex>
            </Stack>

            <Stack mt={10}>
                <Heading as="h2" size="md">
                    Tools
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Git" icon={Git} />
                    <Skill name="Linux" icon={Linux} />
                </Flex>
            </Stack>
        </Box>
    )
}