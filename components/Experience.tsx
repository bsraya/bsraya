import NextLink from 'next/link'
import { AiOutlineProject } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import { GiArchiveResearch } from 'react-icons/gi'
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md'
import { HStack, Heading, Divider, Text, useColorModeValue } from "@chakra-ui/react";

export default function Experience(): JSX.Element {
    const color = "gray.300"
    const linkColor = useColorModeValue("#fc909f", "#fdd2d8")

    return (
        <>
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
                            color: linkColor,
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
                            color: linkColor,
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
        </>       
    )
}