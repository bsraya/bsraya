import { Heading, Box, Text, Stack } from '@chakra-ui/react'

export default function Conference(): JSX.Element {
    return (
        <Stack spacing="1rem" my="4rem">
        <Heading as="h2" size="xl">Conference</Heading>
        <Box>
            <Text fontStyle="italic">December 13, 2022 - December 16, 2022</Text>
            <Heading as="h2" size="lg">IEEE Cloud Com 2022</Heading>
            <Text fontStyle="italic">Bangkok, Thailand</Text>
        </Box>
        </Stack>
    )
}