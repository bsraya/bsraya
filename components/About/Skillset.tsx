import {
    Flex,
    Stack,
    Heading,
} from "@chakra-ui/react";
import Skill from './Skill';
import Go from "../../icons/go";
import React from "../../icons/react";
import Linux from "../../icons/linux";
import Kubernetes from "../../icons/kubernetes";
import Git from "../../icons/git";
import Firebase from "../../icons/firebase";
import PostgreSQL from "../../icons/postgresql";
import Julia from "../../icons/julia";

export default function Skillset(): JSX.Element {
    return (
        <Stack spacing="1rem" my="4rem">
            <Heading as="h2" fontSize="2rem">
                Other technologies
            </Heading>
            <Flex
                mt={3}
                mb={5}
                wrap="wrap"
            >
                <Skill name="Git" icon={Git} />
                <Skill name="Linux" icon={Linux} />
                <Skill name="Go" icon={Go} />
                <Skill name="Kubernetes" icon={Kubernetes} />
                <Skill name="Firebase" icon={Firebase} />
                <Skill name="PostgreSQL" icon={PostgreSQL} />
                <Skill name="Julia" icon={Julia} />
            </Flex>
        </Stack>
    )
}