import { Heading, Box, Text, Stack } from '@chakra-ui/react'

export default function Conference(): JSX.Element {
    return (
        <Stack spacing="1rem" my="4rem">
            <Heading as="h2" fontSize="2rem">Conference</Heading>
            <Box>
                <Text fontStyle="italic">December 13, 2022 - December 16, 2022</Text>
                <Heading as="h2" size="lg">IEEE Cloud Com 2022</Heading>
                <Text fontStyle="italic">Bangkok, Thailand</Text>
            </Box>
            <Box>
                <Text fontStyle="italic">May 11, 2023 - May 13, 2023</Text>
                <Heading as="h2" size="lg">Ruby Kaigi 2023</Heading>
                <Text fontStyle="italic">Nagano, Japan</Text>
            </Box>
        </Stack>
    )
}