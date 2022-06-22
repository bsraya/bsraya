import {
    Box,
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
} from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import Series from './Series'

const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: 'blue.500',
        dark: 'blue.500'
    };

    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
        <NextLink href={href} passHref>
            <Link color={color[colorMode]} {...props} />
        </NextLink>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
    const { colorMode } = useColorMode();
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900'
    };

    return (
        <Alert
            mt={4}
            w="98%"
            bg={bgColor[colorMode]}
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

const DocsHeading = (props: any) => (
    <Heading
        css={{
            scrollMarginTop: '100px',
            scrollSnapMargin: '100px', // Safari
            '&[id]': {
                pointerEvents: 'none'
            },
            '&[id]:before': {
                display: 'block',
                height: ' 6rem',
                marginTop: '-6rem',
                visibility: 'hidden',
                content: `""`
            },
            '&[id]:hover a': { opacity: 1 }
        }}
        {...props}
        mb="1em"
        mt="2em"
    >
        <Box pointerEvents="auto">
        {props.children}
        {props.id && (
            <Box
                aria-label="anchor"
                as="a"
                color="blue.500"
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
    );

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
    p: (props: any) => <Text as="p" my={5} lineHeight="tall" {...props} />,
    strong: (props: any) => <Text as="strong" fontWeight="semibold" {...props} />,
    
    li: (props: any) => <ListItem ml={10} {...props} />,
    ul: (props: any) => <List styleType="arrow" spacing={1} {...props} />,
    ol: (props: any) => <List as="ol" styleType="decimal" spacing={1} {...props} />,
    
    h1: (props: any) => <DocsHeading as="h1" size="xl" fontWeight="bold" {...props} />,
    h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
    h3: (props: any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
    h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
    h5: (props: any) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
    h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
    
    // for table
    tr: (props: any) => <Tr {...props} />,
    th: (props: any) => <Th fontSize="md" {...props} />,
    td: (props: any) => <Td {...props} />,
    thead: (props: any) => <Thead  {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    tfoot: (props: any) => <Tfoot {...props} />,
    caption: (props: any) => <TableCaption {...props} />,
    table: (props: any) => <TableContainer><Table variant="striped" {...props} /></TableContainer>,
    
    Kbd,
    Text,
    Stack,
    Textarea,
    AlertIcon,
    Series,
    hr: Hr,
    a: CustomLink,
    blockquote: Quote,
    image: (props: any) => <NextImage {...props} layout='responsive' priority loading='lazy' />,
    Alert: (props: any) => <Alert my={5} borderRadius="0.5rem" {...props} />,
};

export default MDXComponent;