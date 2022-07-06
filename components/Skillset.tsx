import { Flex, Heading, Stack, Tooltip, Box, Icon } from "@chakra-ui/react";
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
                <Flex mt={3} mb={5}>
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
                <Flex mt={3} mb={5}>
                    <Skill name="React" icon={React} />
                    <Skill name="Next.js" icon={Next} />
                    <Skill name="Gatsby.js" icon={Gatsby} />
                    <Skill name="ChakraUI" icon={ChakraUI} />
                    <Skill name="Cypress" icon={Cypress} />
                </Flex>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Tools
                </Heading>
                <Flex mt={3} mb={5}>
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
                <Flex mt={3}>
                    <Skill name="GraphQL" icon={GraphQL} />
                    <Skill name="MongoDB" icon={MongoDB} />
                    <Skill name="PostgresQL" icon={PostgreSQL} />
                </Flex>
            </Stack>
        </>
    )
}