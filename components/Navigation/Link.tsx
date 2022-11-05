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
        <NextLink href={href}>
            <Link
                m={5}
                variant="ghost"
                fontWeight="700"
                color={isActive ? "#023C72" : 'gray.300'}
                _hover={{ color: "#023C72" }}
                _active={{ color: "#023C72" }}
                letterSpacing="1px"
            >{children}</Link>
        </NextLink>
    )
}