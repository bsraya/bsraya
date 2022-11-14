import {
    Tr,
    Th,
    Td,
    Kbd,
    Box,
    Link,
    List,
    Text,
    Alert,
    Stack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Button,
    Heading,
    Divider,
    Textarea,
    ListItem,
    AlertIcon,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import {
    LinkIcon,
    ExternalLinkIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import Series from './Series';
import Image from 'next/image'

const CustomLink = (props: any) => {
    const href = props.href;
    const isInternalLink = href && href.startsWith('/');
    const isInternalLinkHeader = href && href.startsWith('#');

    if (isInternalLinkHeader) {
        return (
            <NextLink {...props} href={href} passHref>
                <Link
                    {...props}
                    color="dark"
                    _dark={{
                        color: "light"
                    }}
                    // text set to not italic
                    fontStyle="normal"
                />
            </NextLink>
        );
    }

    if (isInternalLink) {
        return (
            <NextLink
                {...props}
                href={href}
                passHref
            >
                <Link
                    {...props}
                    color="dark"
                    _dark={{
                        color: "light"
                    }}
                    textDecoration="underline"
                    _hover={{
                        textDecoration: "none"
                    }}
                >
                    {props.children}<LinkIcon mx='5px' mb="8px" />
                </Link>
            </NextLink>
        )
    }

    return (
        <Link
            {...props}
            color="dark"
            _dark={{
                color: "light"
            }}
            display="inline"
            textDecoration="underline"
            _hover={{
                textDecoration: "none"
            }}
        >
            {props.children}<ExternalLinkIcon mx='5px' mb="4px" />
        </Link>
    )
};

const CustomImages = (props: any) => {
    if (props.title !== undefined) {
        return (
            <Box
                my={10}
                p={5}
                borderRadius="md"
                _dark={{
                    opacity: 0.9
                }}
                style={{
                    display: 'block',
                    backgroundColor: 'white',

                }}
            >
                <figure>
                    <img 
                        src={props.src}
                        alt={props.alt}
                        width="80%"
                        height="auto"
                        loading='lazy'
                        style={{
                            margin: 'auto',
                        }}
                    />
                    <figcaption
                        style={{
                            marginTop: '1rem',
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
            <Box
                p={5}
                my={5}
                borderRadius="0.5rem"
                _dark={{
                    opacity: 0.9
                }}
            >
                <img 
                    src={props.src}
                    alt={props.alt}
                    width="60%"
                    height="auto"
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
            variant="left-accent"
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
            mt="2.5em"
        >
            <Box pointerEvents="auto">
                {props.children}
                {props.id && (
                    <Box
                        aria-label="anchor"
                        as="a"
                        color="dark"
                        _dark={{
                            color: "light"
                        }}
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
    return <Divider borderColor="gray.300" _dark={{ borderColor: 'gray.600' }} my={4} w="100%" />;
};

const MDXComponent = {
    i: (props: any) => <Text as="i" {...props} />,
    br: (props: any) => <Box height="24px" {...props} />,
    small: (props: any) => <Text as="small" {...props} />,
    strong: (props: any) => <Text as="strong" fontWeight="semibold" {...props} />,
    p: (props: any) => <Text as="p" mt={5} mb={10} mx="5rem"  wordBreak={'break-word'} {...props} />,
    
    li: (props: any) => <ListItem ml={6} {...props} />,
    ul: (props: any) => <List as="ul" styleType="circle" mx="5rem" my="1.5rem" {...props} />,
    ol: (props: any) => <List as="ol" styleType="decimal" mx="5rem" my="1.5rem" {...props} />,
    
    h2: (props: any) => <DocsHeading as="h2" size="xl" mx="5rem" fontWeight="bold" {...props} />,
    h3: (props: any) => <DocsHeading as="h3" size="lg" mx="5rem" fontWeight="bold" {...props} />,
    h4: (props: any) => <DocsHeading as="h4" size="md" mx="5rem" fontWeight="bold" {...props} />,
    h5: (props: any) => <DocsHeading as="h5" size="sm" mx="5rem" fontWeight="bold" {...props} />,
    h6: (props: any) => <DocsHeading as="h6" size="xs" mx="5rem" fontWeight="bold" {...props} />,
    
    // for table
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th {...props} />,
    td: (props: any) => <Td {...props} />,
    thead: (props: any) => <Thead  {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tfoot: (props: any) => <Tfoot {...props} />,
    caption: (props: any) => <TableCaption {...props} />,
    table: (props: any) => (
        <TableContainer
            sx={{
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '0.5rem',
                    height: '0.5rem',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: "gray.400",
                },
            }}
        >
            <Table
                {...props}
                variant="striped"
            />
        </TableContainer>
    ),
    
    Box,
    Kbd,
    Text,
    Stack,
    Series,
    Button,
    Textarea,
    NextLink,
    AlertIcon,
    hr: Hr,
    a: CustomLink,
    blockquote: Quote,
    img: (props: any) => <CustomImages {...props} />,
    Alert: (props: any) => <Alert my={5} {...props} />,
};

export default MDXComponent;