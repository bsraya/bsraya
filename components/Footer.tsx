import {
    Box,
    Flex,
    Text,
    Link,
    Icon,
} from '@chakra-ui/react'
import Github from "../icons/github"
import LinkedIn from "../icons/linkedin"
import Mail from "../icons/mail"

export default function Footer(): JSX.Element {
    const links = [
        {
            name: 'Email',
            url: 'mailto:nathan.setyawan96@gmail.com',
            icon: <Mail />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/bsraya',
            icon: <Github />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/bijonsetyawan/',
            icon: <LinkedIn />
        },
    ]

    return (
        <Box
            w="95%"
            fontSize="1rem"
            fontFamily="Fira Code"
            as="footer"
            mt="5rem"
            mb="2rem"
        >
            <Flex mb="1rem">
                {links.map((item) => (
                    <Link
                        key={item.name}
                        as="a"
                        mr="1rem"
                        isExternal
                        href={item.url}
                        fontStyle="normal"
                        target="_blank"
                    >
                        <Icon
                            w={10}
                            h={10}
                            transform='translateY(5px)'
                            transition="box-shadow .15s ease-in-out, transform .15s ease-in-out"
                            _hover={{
                                transform: 'translateY(0)'
                            }}
                        >
                            {item.icon}
                        </Icon>
                    </Link>
                ))}
            </Flex>
            <Text>
                © Bijon S. Raya {new Date().getFullYear()}
            </Text>
        </Box>
    );
}