import {
    Box,
    Flex,
    Text,
    Link,
    Divider,
} from '@chakra-ui/react'

export default function Footer(): JSX.Element {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/bsraya',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bijonsetyawan/'
        },
        {
            name: 'Email',
            url: 'mailto:nathan.setyawan96@gmail.com',
        },
    ]

    return (
        <Box
            w="95%"
            mx="auto"
            fontSize="1rem"
            fontFamily="Fira Code"
        >
            <Divider/>
            <Flex
                as="footer"
                mt="0.5rem"
                mb="2rem"
            >
                <Text mr="auto">
                    © Bijon Setyawan Raya {new Date().getFullYear()}
                </Text>
                <Flex>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            as="a"
                            px={2}
                            isExternal
                            href={item.url}
                            fontStyle="normal"
                        >
                            <Text>{item.name}</Text>
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}