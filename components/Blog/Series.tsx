import {
    Box,
    Text,
    Flex,
    LinkBox,
    Divider,
    Heading,
    IconButton,
    LinkOverlay,
} from "@chakra-ui/react";
import NextLink from 'next/link';

interface IPost {
    title: string;
    slug: string;
}

const CurrentPost = ({ index, title }: { index: number, title: string }) => {
    return (
        <Flex width="100%" px={2}>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                isRound
                background="gray.800"
                color="purple.50"
                mr={3}
                _hover={{
                    background: "gray.800"
                }}
            />
            <Text
                my="auto"
                fontWeight="bold"
                fontStyle="normal"
                fontFamily="heading"
                css={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }}
            >
                {title}
            </Text>
        </Flex>
    )
}

const NotCurrentPost = ({ index, title }: { index: number, title: string }) => {
    return (
        <Flex width="100%" px={2}>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                mr={3}
                isRound
                background='gray.200'
                color="gray.700"
                _hover={{
                    bgColor: 'none'
                }}
            />
            <Text
                my="auto"
                color="gray.700"
                fontStyle="normal"
                fontFamily="heading"
                css={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }}
            >
                {title}
            </Text>
        </Flex>
    )
}

// "Series" is a component that displays a list of related posts, just like the one from the "dev.to" website
export default function Series({ series, posts, currentPost }: { series: string, posts: IPost[], currentPost: string }) {
    return (
        <Box
            my={10}
            borderRadius="lg"
            display="block"
            border="1px solid"
            background="white"
            borderColor="gray.300"
            maxW="768px"
        >   
            <Heading
                p={3}
                mx={2}
                fontSize="lg"
                color="dark"
            >
                {series} ({posts.length} Parts)
            </Heading>
            <Divider borderColor="gray.300" w="100%" />
            {
                posts.map((post: IPost) => {
                        var index = posts.indexOf(post) + 1;
                        return (
                            <NextLink key={index} href={"/blog/" + post.slug} >
                                <LinkBox
                                    key={post.slug}
                                    _hover={{
                                        cursor: "pointer",
                                        bgColor: "gray.100",
                                    }}
                                    borderBottomRadius={index === posts.length ? "md" : "none"}
                                >
                                    <Flex mx={3} py={3}>
                                        {
                                            post.title === currentPost ?
                                                <CurrentPost index={index} title={post.title} />
                                                :
                                                <NotCurrentPost index={index} title={post.title} />
                                        }
                                    </Flex>
                                </LinkBox>
                            </NextLink>
                        )
                    }
                )
            }
        </Box>
    )
}
