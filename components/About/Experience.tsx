import {
    Box,
    Flex,
    Text,
    Stack,
    Heading,
} from "@chakra-ui/react";
import Skill from './Skill';
import Ruby from "../../icons/ruby";
import Rails from "../../icons/rails";
import Typescript from "../../icons/typescript";
import Python from "../../icons/python";
import Keras from "../../icons/keras";
import Horovod from "../../icons/horovod";
import Next from "../../icons/next";
import ChakraUI from "../../icons/chakraui";
import Docker from "../../icons/docker";
import React from "../../icons/react";
import SQLite from "../../icons/sqlite";
import Vue from "../../icons/vue";
import FastAPI from "../../icons/fastapi";
import MySQL from "../../icons/mysql";
import ElasticSearch from "../../icons/elasticsearch";
import JavaScript from "../../icons/javascript";

export default function Experience(): JSX.Element {
    return (
        <Stack spacing="1rem" my="4rem">
            <Heading as="h2" size="xl">Experience</Heading>
            <Box my={10}>
                <Text ml="auto" style={{ fontStyle: "italic" }}> October 2022 - present</Text>
                <Heading as="h2" size="lg">Intermediate Fullstack Developer</Heading>
                <Text mb={2} style={{ fontStyle: "italic" }}>
                    Faria Education Group - Taipei, Taiwan
                </Text>
                <Stack>
                    <Heading as="h2" size="md">
                        Technologies
                    </Heading>
                    <Flex mt={3} mb={5} wrap="wrap">
                        <Skill name="Ruby" icon={Ruby} />
                        <Skill name="Vue.js" icon={Vue} />
                        <Skill name="JavaScript" icon={JavaScript} />
                        <Skill name="Typescript" icon={Typescript} />
                        <Skill name="Ruby on Rails" icon={Rails} />
                        <Skill name="MySQL" icon={MySQL} />
                        <Skill name="ElasticSearch" icon={ElasticSearch} />
                    </Flex>
                </Stack>
            </Box>

            <Box my={10}>
                <Text ml="auto" style={{ fontStyle: "italic" }}> February 2021 - Present</Text>
                <Heading as="h2" size="lg">Graduate Research Assistant</Heading>
                <Text mb={2} style={{ fontStyle: "italic" }}>
                    National Tsing Hua University - Hsinchu, Taiwan
                </Text>
                <Stack>
                    <Heading as="h2" size="md">
                        Technologies
                    </Heading>
                    <Flex mt={3} mb={5} wrap="wrap">
                        <Skill name="FastAPI" icon={FastAPI} />
                        <Skill name="Python" icon={Python} />
                        <Skill name="Docker" icon={Docker} />
                        <Skill name="Horovod" icon={Horovod} />
                        <Skill name="SQLite" icon={SQLite} />
                        <Skill name="React" icon={React} />
                        <Skill name="Next.js" icon={Next} />
                        <Skill name="ChakraUI" icon={ChakraUI} />
                    </Flex>
                </Stack>
            </Box>

            <Box my={10}>
                <Text ml="auto" style={{ fontStyle: "italic" }}> July 2021 - August 2021</Text>
                <Heading as="h2" size="lg">Software Engineer (Intern)</Heading>
                <Text mb={2} style={{ fontStyle: "italic" }}>
                    Richtek Technology Corp. - Zhubei, Taiwan
                </Text>
                <Stack>
                    <Heading as="h2" size="md">
                        Technologies
                    </Heading>
                    <Flex mt={3} mb={5} wrap="wrap">
                        <Skill name="Python" icon={Python} />
                        <Skill name="Keras" icon={Keras} />
                    </Flex>
                </Stack>
            </Box>
        </Stack>       
    )
}