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
                _dark={{
                    color: 'gray.300',
                    bgColor: 'gray.700'
                }}
                _hover={{
                    bgColor: 'none'
                }}
            />
            <Text
                my="auto"
                color="gray.700"
                fontStyle="normal"
                fontFamily="heading"
                _dark={{
                    color: 'gray.300'
                }}
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
                                        // bgColor: "rgba(128, 90, 213, 0.3)"
                                        // bgColor set to 'dark' with 0.3 opacity
                                        bgColor: "rgba(0, 163, 196, 0.3)"
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
