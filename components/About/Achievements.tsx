import { Heading, Box, Text, Stack } from '@chakra-ui/react'

export default function Achievements(): JSX.Element {
  return (
    <Stack spacing="1rem" my="4rem">
      <Heading as="h2" size="xl">Achievements</Heading>
      <Box>
          <Text fontStyle="italic">December 2018</Text>
        <Heading as="h2" size="lg">Civil IoT Taiwan 2018</Heading>
        <Text fontStyle="italic">3rd place - Taipei, Taiwan</Text>
      </Box>
    </Stack>
  )
}