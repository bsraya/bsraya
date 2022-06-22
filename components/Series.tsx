import { Box, Link, Button, Divider, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface IPost {
    title: string;
    slug: string;
}

// "Series" is a component that displays a list of related posts, just like the one from the "dev.to" website
export default function Series({ title, posts }: { title: string, posts: IPost[] }) {
    return (
        <Box
            display="block"
            background="gray.100"
            rounded="xl"
            color="gray.700"
        >   
            <Text p={3} ml={2}>{title} ({posts.length} Part)</Text>
            <Divider colorScheme="gray.100" />
            {
                posts.map((post: IPost) => {
                        var index = posts.indexOf(post) + 1;
                        return (
                            <Link
                                display="block"
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'gray.50',
                                }}
                                rounded="xl"
                            >   
                                <Box ml={2} py={2} >
                                    <Button mr={2}
                                        
                                        background="gray.300"
                                        _hover={{ background: "gray.300" }}
                                    >
                                        {index}
                                    </Button>
                                    <NextLink
                                        href={'/blog/' + post.slug}
                                        key={post.slug}
                                        passHref
                                    >   
                                        {post.title}
                                    </NextLink>
                                </Box>
                            </Link>
                        )
                    }
                )
            }
        </Box>
    )
}