import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Navlink ({ href, children }: { href: string, children: React.ReactNode }): JSX.Element {
    const router = useRouter()
    var isActive = router.pathname === href

    if (href.includes("blog")) {
        isActive = router.pathname.includes("/blog")
    }

    if (href.includes("portfolio")) {
        isActive = router.pathname.includes("/portfolio")
    }

    return (
        <NextLink href={href} passHref legacyBehavior>
            <Link
                mr={5}
                variant="ghost"
                letterSpacing="1px"
                fontFamily="heading"
                _hover={{ color: "gray.800" }}
                _active={{ color: "gray.800" }}
                color={isActive ? "gray.800" : 'gray.300'}
                as="a"
            >
                {children}
            </Link>
        </NextLink>
    )
}