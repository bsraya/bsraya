import { Heading, Stack, UnorderedList } from "@chakra-ui/react";
import Skill from './Skill';
import { FaReact } from 'react-icons/fa';
import { BsQuestion } from 'react-icons/bs';
import { SiGatsby, SiNextdotjs, SiChakraui, SiTypescript, SiPython, SiGit, SiDocker, SiKubernetes, SiLinux, SiGraphql, SiMongodb, SiPostgresql, SiCypress } from "react-icons/si";

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
                <UnorderedList mt={3} mb={5}>
                    <Skill tool="Go" icon={BsQuestion} />
                    <Skill tool="Python" icon={SiPython} />
                    <Skill tool="Typescript / Javascript" icon={SiTypescript} />
                </UnorderedList>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Web technologies
                </Heading>
                <UnorderedList mt={3} mb={5}>
                    <Skill tool="React" icon={FaReact} />
                    <Skill tool="Next.js" icon={SiNextdotjs} />
                    <Skill tool="Gatsby.js" icon={SiGatsby} />
                    <Skill tool="ChakraUI" icon={SiChakraui} />
                    <Skill tool="Cypress.js" icon={SiCypress} />
                </UnorderedList>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md">
                    Tools
                </Heading>
                <UnorderedList mt={3} mb={5}>
                    <Skill tool="Git" icon={SiGit} />
                    <Skill tool="Docker" icon={SiDocker} />
                    <Skill tool="Kubernetes" icon={SiKubernetes} />
                    <Skill tool="Linux / Unix" icon={SiLinux} />
                </UnorderedList>
            </Stack>

            <Stack mt={5}>
                <Heading as="h2" size="md" >
                    Database framework
                </Heading>
                <UnorderedList mt={3}>
                    <Skill tool="GraphQL" icon={SiGraphql} />
                    <Skill tool="MongoDB" icon={SiMongodb} />
                    <Skill tool="PostgresQL" icon={SiPostgresql} />
                </UnorderedList>
            </Stack>
        </>
    )
}