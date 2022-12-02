import {
    Text,
    Link,
    Stack,
    Avatar,
    WrapItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'

type author = {
    name: string,
    image: string,
    url: string,
}

export default function Authors(props: any): JSX.Element {
    const authors: author[] = [
        {
            name: "Bijon Setyawan Raya",
            image: "https://bsraya.com/images/avatar.png",
            url: "/",
        },
        {
            name: "Annabella Putri Dirgo",
            image: "https://i.ibb.co/FhfYZ8L/logo.png",
            url: "https://bellapd.vercel.app",
        },
        {
            name: "Marcelino Gilbert Tagore",
            image: "",
            url: "https://marcelinogilbertt.vercel.app",
        }
    ]

    // if an author both exists in props.authors and authors, then it will be rendered
    const citedAuthors: author[] = authors.filter((author: author) => {
        return props.authors.includes(author.name)
    })

    return (
        <Stack mb={5}>
            {
                (citedAuthors.length === 1 && citedAuthors[0].name === authors[0].name) ?
                (
                    <WrapItem>
                        <NextLink
                            passHref
                            href={authors[0].url}
                        >
                            <Avatar
                                src={authors[0].image}
                                name={authors[0].name}
                                _hover={{
                                    cursor: "pointer",
                                }}
                            />
                        </NextLink>
                        <Text
                            fontSize="md"
                            ml={3}
                            my="auto"
                            fontFamily="Fira Code"  
                        >{authors[0].name}</Text>
                    </WrapItem>
                ) : (
                    citedAuthors.map((author: author) => {
                        return (
                            <WrapItem>
                                <Link
                                    href={author.url}
                                    target="_blank"
                                    isExternal
                                >
                                    <Avatar
                                        src={author.image}
                                        name={author.name}
                                        _hover={{
                                            cursor: "pointer",
                                        }}
                                    />
                                </Link>
                                <Text
                                    fontSize="md"
                                    ml={3}
                                    my="auto"
                                    fontFamily="Fira Code"  
                                >{author.name}</Text>
                            </WrapItem>
                        )
                    })
                )
            }
        </Stack>
    )
}