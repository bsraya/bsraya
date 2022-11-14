import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Skill from './Skill';
import SQLite from "../../icons/sqlite";
import Go from "../../icons/go";
import Python from "../../icons/python";
import Typescript from "../../icons/typescript";
import React from "../../icons/react";
import Linux from "../../icons/linux";
import Kubernetes from "../../icons/kubernetes";
import Docker from "../../icons/docker";
import Git from "../../icons/git";
import Next from "../../icons/next";
import Cypress from "../../icons/cypress";
import ChakraUI from "../../icons/chakraui";
import Firebase from "../../icons/firebase";
import Anaconda from "../../icons/anaconda";
import Keras from "../../icons/keras";
import Horovod from "../../icons/horovod";
import Ruby from "../../icons/ruby";
import Rails from "../../icons/rails";

export default function Skillset(): JSX.Element {
    return (
        <Stack mt="4rem">
            <Heading as="h2" size="md">
                Other technologies
            </Heading>
            <Flex mt={3} mb={5} wrap="wrap">
                <Skill name="Anaconda" icon={Anaconda} />
                <Skill name="Go" icon={Go} />
                <Skill name="Kubernetes" icon={Kubernetes} />
                <Skill name="Firebase" icon={Firebase} />
                <Skill name="Git" icon={Git} />
                <Skill name="Linux" icon={Linux} />
            </Flex>
        </Stack>
    )
}