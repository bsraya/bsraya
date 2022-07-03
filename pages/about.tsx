import Layout from '../components/Layout'
import { AiOutlineProject } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import { GiArchiveResearch } from 'react-icons/gi'
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md'
import { Box, Divider, Heading, HStack, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function About(): JSX.Element {
    const color = "gray.300"

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

            <HStack my={5}>
                <Heading as="h1">
                    2022
                </Heading>
                <Divider
                    orientation="horizontal"
                    __css={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: color
                    }}
                />
            </HStack>

            <HStack my={5}>
                <MdOutlineSchool size="2rem" />
                <Text>Expect to complete a graduate degree in CS</Text>
            </HStack>
            
            <HStack my={5}>
                <FaChalkboardTeacher size="2rem" />
                <Text>Teaching assistant in a Linear Algebra class</Text>
            </HStack>

            <HStack my={5}>
                <GiArchiveResearch size="2rem" />
                <Text>Graduate research assistant</Text>
            </HStack>

            <HStack my={5}>
                <AiOutlineProject size="2rem" />
                <NextLink
                    passHref
                    href="/portfolio/personal-website-v2"
                >
                    <Text
                        css={{
                            color: "#fc909f",
                            cursor: "pointer",
                            "&:hover": {
                                textDecoration: "underline"
                            }
                        }}
                    >Personal website v2.0</Text>
                </NextLink>
            </HStack>

            <HStack my={5}>
                <Heading as="h1">
                    2021
                </Heading>
                <Divider
                    orientation="horizontal"
                    __css={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: color
                    }}
                />
            </HStack>

            <HStack my={5}>
                <MdOutlineSchool size="2rem" />
                <Text>Completed an undergraduate degree in CS</Text>
            </HStack>

            <HStack my={5}>
                <FaChalkboardTeacher size="2rem" />
                <Text>Teaching assistant in an Intro. to C programming class</Text>
            </HStack>

            <HStack my={5}>
                <MdOutlineWorkOutline size="2rem" />
                <Text>Software engineering intern</Text>
            </HStack>

            <HStack my={5}>
                <GiArchiveResearch size="2rem" />
                <Text>Graduate research assistant</Text>
            </HStack>

            <HStack my={5}>
                <AiOutlineProject size="2rem" />
                <NextLink
                    passHref
                    href="/portfolio/personal-website"
                >
                    <Text
                        css={{
                            color: "#fc909f",
                            cursor: "pointer",
                            "&:hover": {
                                textDecoration: "underline"
                            }
                        }}
                    >Personal website</Text>
                </NextLink>
            </HStack>

            <HStack my={5}>
                <Heading as="h1">
                    2020
                </Heading>
                <Divider
                    orientation="horizontal"
                    __css={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: color
                    }}
                />
            </HStack>

            <HStack my={5}>
                <FaChalkboardTeacher size="2rem" />
                <Text>Teaching assistant in an Intro. to C programming class</Text>
            </HStack>

            <HStack my={5}>
                <MdOutlineWorkOutline size="2rem" />
                <Text>Front-end development intern</Text>
            </HStack>

            <HStack my={5}>
                <Heading as="h1">
                    2018
                </Heading>
                <Divider
                    orientation="horizontal"
                    __css={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: color
                    }}
                />
            </HStack>

            <HStack my={5}>
                <MdOutlineWorkOutline size="2rem" />
                <Text>Front-end development intern</Text>
            </HStack>

            <HStack my={5}>
                <Heading as="h1">
                    2017
                </Heading>
                <Divider
                    orientation="horizontal"
                    __css={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: color
                    }}
                />
            </HStack>

            <HStack mt={5} mb={10}>
                <FiAward size="2rem" />
                <Text>Civil IoT Taiwan 2017</Text>
            </HStack>

            <Heading as="h1">
                Technical Skills
            </Heading>

            <Heading as="h2" size="md" mt={3}>
                Programming Languages
            </Heading>
            <UnorderedList mt={3} mb={5}>
                <ListItem ml={5}>Python</ListItem>
                <ListItem ml={5}>Golang</ListItem>
                <ListItem ml={5}>Typescript / Javascript</ListItem>
            </UnorderedList>

            <Heading as="h2" size="md">
                Web technologies
            </Heading>
            <UnorderedList mt={3} mb={5}>
                <ListItem ml={5}>React</ListItem>
                <ListItem ml={5}>Next.js</ListItem>
                <ListItem ml={5}>Gatsby.js</ListItem>
                <ListItem ml={5}>ChakraUI</ListItem>
                <ListItem ml={5}>Cypress</ListItem>
            </UnorderedList>

            <Heading as="h2" size="md">
                Tools
            </Heading>
            <UnorderedList mt={3} mb={5}>
                <ListItem ml={5}>Git</ListItem>
                <ListItem ml={5}>Docker</ListItem>
                <ListItem ml={5}>Kubernetes</ListItem>
                <ListItem ml={5}>Linux / Unix</ListItem>
            </UnorderedList>
            
            <Heading as="h2" size="md">
                Database framework
            </Heading>
            <UnorderedList mt={3}>
                <ListItem ml={5}>GraphQL</ListItem>
                <ListItem ml={5}>MongoDB</ListItem>
                <ListItem ml={5}>PostgreSQL</ListItem>
            </UnorderedList>
        </Layout>
    )
}