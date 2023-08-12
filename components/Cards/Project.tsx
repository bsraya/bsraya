import { Box, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";
import Techs from "../Techs";

export default function Card(
  { img_location, link, title, techs }:
    { img_location: string, link: string, title: string, techs: string[] }
) {
  return (
    <LinkBox
      p="1.5rem"
      as='article'
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      boxShadow="0 1rem 1rem rgba(0,0,0,.2)"
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
          <Heading as="h3" fontSize="1.25rem" mb={3} >
              {title}
          </Heading>
        </LinkOverlay>
        <Techs techs={techs} />
      </Box>
    </LinkBox>
  )
}