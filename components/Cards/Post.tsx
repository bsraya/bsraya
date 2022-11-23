import {
  Box,
  Text,
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import Tags from '../Tags'
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
            transform='translateY(-5px)'
            boxShadow="0 1rem 1rem rgba(0,0,0,.2)"
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
                    backgroundSize="cover"
                    backgroundImage={`url(https://images.unsplash.com/photo-1667513993054-9335374c6b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)`}
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
                    <LinkOverlay fontStyle="normal">
                        <HStack>
                            <Text color="gray.500" fontSize="md" fontFamily="heading">
                                {DateTime.fromISO(post.frontMatter.date).toFormat("LLLL dd, yyyy")}
                            </Text>
                            {
                                post.frontMatter.series && (
                                  <Type />
                                )
                            }
                        </HStack>
                        <Text as="p" color="gray.500" mt={3}>{post.frontMatter.description}</Text>
                    </LinkOverlay>  
                </Box>
            </NextLink>
        </LinkBox>
    )
}