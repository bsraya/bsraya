import NextLink from 'next/link'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FiAward, FiFolder } from 'react-icons/fi'
import { GiArchiveResearch } from 'react-icons/gi'
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md'
import { HStack, Heading, Divider, Text, Box } from "@chakra-ui/react";

export default function Experience(): JSX.Element {
    const color = "gray.300"

    return (
        <>
            <Box my={10}>
                <HStack>
                    <Heading as="h1">
                        2022
                    </Heading>
                    <Divider
                        orientation="horizontal"
                        borderColor={color}
                        borderStyle="solid"
                        borderWidth="1px"
                    />
                </HStack>

                <HStack my={5}>
                    <MdOutlineSchool size="2rem" />
                    <Text>Master&apos;s degree in CS</Text>
                </HStack>
                
                <HStack my={5}>
                    <FaChalkboardTeacher size="2rem" />
                    <Text>TA in a Linear Algebra class</Text>
                </HStack>

                <HStack my={5}>
                    <GiArchiveResearch size="2rem" />
                    <Text>Graduate research assistant</Text>
                </HStack>

                <HStack my={5}>
                    <FiFolder size="2rem" />
                    <NextLink
                        passHref
                        href="/portfolio/personal-website-v2"
                    >
                        <Text
                            as="a"
                            color="dark"
                            cursor="pointer"
                            _dark={{
                                color: "light"
                            }}
                            textDecoration="underline"
                            _hover={{
                                textDecoration: "none"
                            }}
                        >Personal website v2.0</Text>
                    </NextLink>
                </HStack>
            </Box>

            <Box my={10}>
                <HStack my={5}>
                    <Heading as="h1">
                        2021
                    </Heading>
                    <Divider
                        orientation="horizontal"
                        borderColor={color}
                        borderStyle="solid"
                        borderWidth="1px"
                    />
                </HStack>

                <HStack my={5}>
                    <MdOutlineSchool size="2rem" />
                    <Text>Bachelor&apos;s degree in CS</Text>
                </HStack>

                <HStack my={5}>
                    <FaChalkboardTeacher size="2rem" />
                    <Text>TA in an Intro. to C/C++ class</Text>
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
                    <FiFolder size="2rem" />
                    <NextLink
                        passHref
                        href="/portfolio/personal-website"
                    >
                        <Text
                            as="a"
                            color="dark"
                            cursor="pointer"
                            _dark={{
                                color: "light"
                            }}
                            textDecoration="underline"
                            _hover={{
                                textDecoration: "none"
                            }}
                        >Personal website</Text>
                    </NextLink>
                </HStack>
            </Box>

            <Box my={10}>
                <HStack my={5}>
                    <Heading as="h1">
                        2020
                    </Heading>
                    <Divider
                        orientation="horizontal"
                        borderColor={color}
                        borderStyle="solid"
                        borderWidth="1px"
                    />
                </HStack>

                <HStack my={5}>
                    <FaChalkboardTeacher size="2rem" />
                    <Text>TA in an Intro. to C/C++ class</Text>
                </HStack>

                <HStack my={5}>
                    <MdOutlineWorkOutline size="2rem" />
                    <Text>Front-end development intern</Text>
                </HStack>
            </Box>

            <Box my={10}>
                <HStack my={5}>
                    <Heading as="h1">
                        2018
                    </Heading>
                    <Divider
                        orientation="horizontal"
                        borderColor={color}
                        borderStyle="solid"
                        borderWidth="1px"
                    />
                </HStack>

                <HStack my={5}>
                    <MdOutlineWorkOutline size="2rem" />
                    <Text>Front-end development intern</Text>
                </HStack>
            </Box>
            
            <Box my={10}>
                <HStack my={5}>
                    <Heading as="h1">
                        2017
                    </Heading>
                    <Divider
                        orientation="horizontal"
                        borderColor={color}
                        borderStyle="solid"
                        borderWidth="1px"
                    />
                </HStack>

                <HStack mt={5} mb={10}>
                    <FiAward size="2rem" />
                    <Text>Civil IoT Taiwan 2017</Text>
                </HStack>
            </Box>
        </>       
    )
}