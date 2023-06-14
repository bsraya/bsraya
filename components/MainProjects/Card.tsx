import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import Techs from "../Techs";

export default function Card(
  { img_location, link, title, description, techs }:
    { img_location: string, link: string, title: string, description: string, techs: string[] }
) {
  return (
    <LinkBox
      as='article'
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="1.5rem"
      borderRadius="md"
      boxShadow="md"
      transition="all .15s ease-in-out"
      _hover={{ boxShadow: "lg" }}
    >
      <Image
        src="/images/portfolios/schedulearn/schedulearn-architecture.png"
        alt="Personal project"
        loading='lazy'
        width={1200}
        height={700}
        placeholder="blur"
        blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Box p="0.5rem">
        <LinkOverlay href="/portfolio/schedulearn" _hover={{ color: "gray.800" }}>
            <Heading as="h3" fontSize="1.75rem" mb={3} >
                Schedulearn
            </Heading>
        </LinkOverlay>
        <Text mb={3}>Deep Learning Scheduling System</Text>
        <Techs techs={techs} />
      </Box>
    </LinkBox>
  )
}