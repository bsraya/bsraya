import {
    Box,
    Button,
    List,
    ListItem,
    Heading,
    Link,
    Text,
    Divider,
    useColorMode,
    Kbd,
    Textarea,
    Alert,
    Stack,
    AlertIcon,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    chakra,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Series from './Series'
import NextImage from 'next/image';
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'

const CustomLink = (props: any) => {
    const href = props.href;
    const isInternalLink = href && href.startsWith('/');
    const isInternalLinkHeader = href && href.startsWith('#');

    if (isInternalLinkHeader) {
        return (
            <NextLink {...props} href={href} passHref>
                <Link
                    {...props}
                    color="#fc909f"
                    _dark={{
                        color: "#f8afa6"
                    }}
                />
            </NextLink>
        );
    }

    if (isInternalLink) {
        return (
            <NextLink {...props} href={href} passHref>
                <>
                    <Link
                        {...props}
                        color="#fc909f"
                        _dark={{
                            color: "#f8afa6"
                        }}
                    />
                    <LinkIcon mx='5px' mb="8px" />
                </>
            </NextLink>
        )
    }

    return (
        <>
            <Link
                {...props}
                color="#fc909f"
                _dark={{
                    color: "#f8afa6"
                }}
            /><ExternalLinkIcon mx='5px' mb="4px" />
        </>
    )
};

const ChakraImage = chakra(NextImage, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height', 'quality', 'layout', 'loading'].includes(prop),
})

const CustomImages = (props: any) => {
    if (props.title !== undefined) {
        return (
            <Box
                style={{
                    display: 'block',
                    backgroundColor: 'white',
                    borderRadius: `0.5rem`,
                }}
                my={5}
            >
                <figure>
                    <ChakraImage
                        src={props.src}
                        alt={props.alt}
                        width={128}
                        height={86}
                        quality={80}
                        sizes="50vw"
                        layout="responsive"
                        loading='lazy'
                    />
                    <figcaption
                        style={{
                            textAlign: "center",
                            fontSize: "0.9rem",
                            color: 'gray'
                        }}
                    >
                        {props.title}
                    </figcaption>
                </figure>
            </Box>
        );
    } else {
        return (
            <Box my={5}>
                <ChakraImage
                    src={props.src}
                    alt={props.alt}
                    width={128}
                    height={86}
                    quality={80}
                    sizes="50vw"
                    layout="responsive"
                    loading='lazy'
                />
            </Box>
    );
    }
}

const Quote = (props: any) => {
    return (
        <Alert
            mt={4}
            w="98%"
            bg="blue.50"
            _dark={{
                bg: 'blue.900',
            }}
            variant="left-accent"
            status="info"
            css={{
                '> *:first-of-type': {
                marginTop: 0,
                marginLeft: 8
                }
            }}
            {...props}
        />
    );
};

const DocsHeading = (props: any) => {
    return (
        <Heading
            css={{
                scrollMarginTop: '100px',
                scrollSnapMargin: '100px', // Safari
                '&[id]': {
                    pointerEvents: 'none'
                },
                '&[id]:before': {
                    display: 'block',
                    visibility: 'hidden',
                    content: `""`
                },
                '&[id]:hover a': { opacity: 1 }
            }}
            {...props}
            mt="1.5em"
        >
            <Box pointerEvents="auto">
                {props.children}
                {props.id && (
                    <Box
                        aria-label="anchor"
                        as="a"
                        color="#fc909f"
                        _dark={{ color: '#f8afa6' }}
                        fontWeight="normal"
                        outline="none"
                        _focus={{
                            opacity: 1,
                            boxShadow: 'outline'
                        }}
                        opacity="0"
                        ml="0.375rem"
                        href={`#${props.id}`}
                    >
                        #
                    </Box>
                )}
            </Box>
        </Heading>
    )
}

const Hr = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.400',
        dark: 'gray.600'
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponent = {
    i: (props: any) => <Text as="i" {...props} />,
    br: (props: any) => <Box height="24px" {...props} />,
    small: (props: any) => <Text as="small" {...props} />,
    p: (props: any) => <Text as="p" my={5} lineHeight="taller" {...props} />,
    strong: (props: any) => <Text as="strong" fontWeight="semibold" {...props} />,
    
    li: (props: any) => <ListItem ml={6} {...props} />,
    ul: (props: any) => <List as="ul" styleType="circle" my={1} spacing={1} {...props} />,
    ol: (props: any) => <List as="ol" styleType="decimal" my={1} spacing={1} {...props} />,
    
    h1: (props: any) => <DocsHeading as="h1" size="xl" fontWeight="bold" {...props} />,
    h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
    h3: (props: any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
    h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
    h5: (props: any) => <DocsHeading as="h5" size="xs" fontWeight="bold" {...props} />,
    h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
    
    // for table
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th {...props} />,
    td: (props: any) => <Td {...props} />,
    thead: (props: any) => <Thead  {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tfoot: (props: any) => <Tfoot {...props} />,
    caption: (props: any) => <TableCaption {...props} />,
    table: (props: any) => <TableContainer><Table variant="striped" __css={{ overflowX: `auto`, minWidth: `100%` }} {...props} /></TableContainer>,
    
    Kbd,
    Text,
    Stack,
    Textarea,
    AlertIcon,
    Box,
    Button,
    NextLink,
    Series,
    hr: Hr,
    a: CustomLink,
    blockquote: Quote,
    img: (props: any) => <CustomImages {...props} />,
    Alert: (props: any) => <Alert my={5} {...props} />,
};

export default MDXComponent;