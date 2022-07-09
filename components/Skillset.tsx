import { Flex, Heading, Stack } from "@chakra-ui/react";
import Skill from './Skill';
import PostgreSQL from "../icons/postgresql";
import MongoDB from "../icons/mongodb";
import GraphQL from "../icons/graphql";
import Go from "../icons/go";
import Python from "../icons/python";
import Typescript from "../icons/typescript";
import Javascript from "../icons/javascript";
import React from "../icons/react";
import Linux from "../icons/linux";
import Kubernetes from "../icons/kubernetes";
import Docker from "../icons/docker";
import Git from "../icons/git";
import Next from "../icons/next";
import Gatsby from "../icons/gatsby";
import Cypress from "../icons/cypress";
import ChakraUI from "../icons/chakraui";
import Firebase from "../icons/firebase";
import Anaconda from "../icons/anaconda";
import Keras from "../icons/keras";
import Tensorflow from "../icons/tensorflow";
import Horovod from "../icons/horovod";
import Kubeflow from "../icons/kubeflow";

export default function Skillset(): JSX.Element {
    return (
        <>
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
                    <Skill name="Javascript" icon={Javascript} />
                    <Skill name="Typescript" icon={Typescript} />
                </Flex>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Web technologies
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="React" icon={React} />
                    <Skill name="Next.js" icon={Next} />
                    <Skill name="Gatsby.js" icon={Gatsby} />
                    <Skill name="ChakraUI" icon={ChakraUI} />
                    <Skill name="Cypress" icon={Cypress} />
                    <Skill name="Firebase" icon={Firebase} />
                </Flex>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Tools
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Git" icon={Git} />
                    <Skill name="Docker" icon={Docker} />
                    <Skill name="Kubernetes" icon={Kubernetes} />
                    <Skill name="Linux" icon={Linux} />
                </Flex>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md" >
                    Database framework
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="GraphQL" icon={GraphQL} />
                    <Skill name="MongoDB" icon={MongoDB} />
                    <Skill name="PostgresQL" icon={PostgreSQL} />
                </Flex>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md" >
                    ML / DL Technologies
                </Heading>
                <Flex mt={3} mb={5} wrap="wrap">
                    <Skill name="Anaconda" icon={Anaconda} />
                    <Skill name="Keras" icon={Keras} />
                    <Skill name="Tensorflow" icon={Tensorflow} />
                    <Skill name="Horovod" icon={Horovod} />
                    <Skill name="Kubeflow" icon={Kubeflow} />
                </Flex>
            </Stack>
        </>
    )
}