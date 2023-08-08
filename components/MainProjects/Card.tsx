import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import Techs from "../Techs";

export default function Card(
  { img_location, link, title, techs }:
    { img_location: string, link: string, title: string, techs: string[] }
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
      <Box height="200px">
        <Image
          src={img_location}
          alt={title}
          loading='lazy'
          width={1200}
          height={700}
          placeholder="blur"
          blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
          style={{ margin: "auto" }}
        />
      </Box>
      <Box p="0.5rem">
        <LinkOverlay href={link} _hover={{ color: "gray.800" }}>
          <Heading as="h3" fontSize="1.75rem" mb={3} >
              {title}
          </Heading>
        </LinkOverlay>
        <Techs techs={techs} />
      </Box>
    </LinkBox>
  )
}