import {
    Heading,
    Box,
    Divider,
    Text,
    Flex,
    LinkBox,
    LinkOverlay,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link';

interface IPost {
    title: string;
    slug: string;
}

const Title = ({ props, title }: { props: any, title: string }) => {
    return (
        <Text
            my="auto"
            css={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }}
            {...props}
        >
            {title}
        </Text>
    )
}

const CurrentPost = ({ index, title }: { index: number, title: string }) => {
    const fontColor = useColorModeValue('#fc909f', '#fdd2d8')
    return (
        <Flex>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                isRound
                background="#fdd2d8"
                color="gray.800"
                mx={3}
                _hover={{
                    background: "#fdd2d8"
                }}
            />
            <Title
                props={{
                    color: fontColor,
                    fontWeight: "bold"
                }}
                title={title}
            />
        </Flex>
    )
}

const NotCurrentPost = ({ index, title }: { index: number, title: string }) => {
    const fontColor = useColorModeValue('gray.700', 'gray.100')
    const bgColor = useColorModeValue('gray.100', 'gray.700')
    return (
        <Flex>
            <IconButton
                aria-label="post index"
                icon={<Text mx="auto">{index}</Text>}
                isRound
                background={bgColor}
                color={fontColor}
                mx={3}
                _hover={{
                    background: {bgColor}
                }}
            />
            <Title
                props={{
                    color: {fontColor}
                }}
                title={title}
            />
        </Flex>
    )
}

// "Series" is a component that displays a list of related posts, just like the one from the "dev.to" website
export default function Series({ series, posts, currentPost }: { series: string, posts: IPost[], currentPost: string }) {
    const bgColor = useColorModeValue('white', 'gray.800')
    const fontColor = useColorModeValue('#fc909f', '#fdd2d8')
    return (
        <Box
            mx="auto"
            my={10}
            borderRadius="lg"
            display="block"
            border="1px solid"
            background={bgColor}
            borderColor="gray.300"
            width="90%"
        >   
            <Heading
                p={3}
                mx={2}
                fontSize="lg"
                color={fontColor}
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
                                        color: fontColor
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
