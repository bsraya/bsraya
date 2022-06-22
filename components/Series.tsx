import { Heading, Box, Link, Button, Divider, Text, Flex, LinkBox, LinkOverlay, IconButton } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IPost {
    title: string;
    slug: string;
}

// "Series" is a component that displays a list of related posts, just like the one from the "dev.to" website
export default function Series({ series, posts, currentPost }: { series: string, posts: IPost[], currentPost: string }) {
    return (
        <Box
            display="block"
            background="gray.100"
            rounded="lg"
            color="gray.700"
            mt={5}
        >   
            <Heading fontSize="lg" p={3} mx={3} color="blue.500">{series} ({posts.length} Part)</Heading>
            <Divider />
            {
                posts.map((post: IPost) => {
                        var index = posts.indexOf(post) + 1;
                        return (
                            <NextLink key={index} href={"/blog/" + post.slug} >
                                <LinkBox key={post.slug} _hover={{ cursor: "pointer", background: "gray.50", color: "blue.500"}} rounded="lg">
                                    <LinkOverlay>
                                        <Flex ml={3} py={3}>
                                            <IconButton
                                                aria-label="post index"
                                                icon={<Text>{index}</Text>}
                                                isRound
                                                background="gray.300"
                                                color="gray.700"
                                                mr={3}
                                                _hover={{
                                                    background: "gray.300"
                                                }}
                                            />
                                            {
                                                post.title === currentPost ?
                                                    <Text my="auto" color="blue.500">{post.title}</Text>
                                                    :
                                                    <Text my="auto">{post.title}</Text>
                                            }
                                        </Flex>
                                    </LinkOverlay>
                                </LinkBox>
                            </NextLink>
                        )
                    }
                )
            }
        </Box>
    )
}