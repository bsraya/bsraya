import {
    Heading,
    Box,
    Divider,
    Text,
    Flex,
    LinkBox,
    LinkOverlay,
    IconButton,
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
                background="dark"
                color="purple.50"
                mr={3}
                _hover={{
                    background: "dark"
                }}
                _dark={{
                    background: "light",
                    color: "darker"
                }}
            />
            <Text
                my="auto"
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
                isRound
                background='gray.100'
                color="gray.500"
                _dark={{
                    color: 'gray.100',
                    bgColor: 'gray.500'
                }}
                mr={3}
                _hover={{
                    bgColor: 'none'
                }}
            />
            <Text
                my="auto"
                css={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }}
                _dark={{
                    color: 'gray.100'
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
            mx="auto"
            my={10}
            borderRadius="lg"
            display="block"
            border="1px solid"
            background="white"
            _dark={{
                bgColor: 'gray.800',
            }}
            borderColor="gray.300"
            width="90%"
        >   
            <Heading
                p={3}
                mx={2}
                fontSize="lg"
                color="dark"
                _dark={{
                    color: "light"   
                }}
            >{series} ({posts.length} Parts)</Heading>
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
                                        bgColor: "rgba(128, 90, 213, 0.3)"
                                    }}
                                    borderBottomRadius={index === posts.length ? "md" : "none"}
                                >
                                    <LinkOverlay>
                                        <Flex mx={3} py={3}>
                                            {
                                                post.title === currentPost ?
                                                    <CurrentPost index={index} title={post.title} />
                                                    :
                                                    <NotCurrentPost index={index} title={post.title} />
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
