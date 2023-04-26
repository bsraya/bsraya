import {
    Box,
    Text,
    HStack,
    Heading,
    LinkBox,
} from '@chakra-ui/react'
import Type from './Type'
import NextLink from 'next/link'
import { DateTime } from 'luxon'
import type { IPost } from '../../lib/types'

export default function Post({ post, type }: { post: IPost; type: string }) {
    return (
        <LinkBox
            key={post.slug}
            as="article"
            my={5}
            border="1px"
            borderRadius="md"
            borderColor="gray.100"
            boxShadow="0 1rem 1rem rgba(0,0,0,.2)"
            transform='translateY(-5px)'
            transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
            _hover={{
                transform: 'translateY(0)'
            }}
        >
            <NextLink href={'/' + type + '/' + post.slug} passHref>
                <Box
                    height={200}
                    display="flex"
                    borderTopRadius="md"
                    style={{
                        background: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%), url(${post.frontMatter.img})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <Heading
                        as="h2"
                        mt="auto"
                        mb="0.5rem"
                        ml="1.25rem"
                        color="white"
                        fontSize="1.5rem"
                        fontWeight="bold"
                        fontFamily="heading"
                    >
                        {post.frontMatter.title}
                    </Heading>
                </Box>
                <Box p={5}>
                    <HStack>
                        <Text
                            fontSize="md"
                            color="gray.500"
                            fontFamily="heading"
                        >
                            {DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy")}
                        </Text>
                        {
                            post.frontMatter.series && (
                                <Type />
                            )
                        }
                    </HStack>
                    <Text as="p" color="gray.500" mt={3}>{post.frontMatter.description}</Text>
                </Box>
            </NextLink>
        </LinkBox>
    )
}