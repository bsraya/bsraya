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
import Anaconda from "../../icons/anaconda";

export default function Skillset(): JSX.Element {
    return (
        <Stack mt="4rem">
            <Heading
                as="h2"
                size="md"
            >
                Other technologies
            </Heading>
            <Flex
                mt={3}
                mb={5}
                wrap="wrap"
            >
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