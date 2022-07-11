import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Seo({ title, publish, description, type }: { title: string, publish?: string, description?: string, type: string }): JSX.Element {
    const router = useRouter();
    const meta = {
        author: "Bijon Setyawan Raya",
        description: 'A junior fullstack developer.',
        image: 'https://www.bsraya.com/images/avatar.png',
    }
    return (
        <Head>
            <title>{title} - {meta.author}</title>
            <meta name="viewport" content="width=device-width" />
            <meta name="description" content={meta.description} />
            <meta name="author" content={meta.author} />
            <meta name="robots" content="follow, index" />
            <link rel="canonical" href={`https://bsraya.com${router.asPath}`} />
            <link rel="icon" href="https://www.bsraya.com/images/avatar.png" />
            <meta property="og:url" content={`https://bsraya.com${router.asPath}`} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={meta.author} />
            <meta property="og:title" content={title + " - " + meta.author} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:site" content="@BijonRaya" />
            <meta name="twitter:creator" content={meta.author} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title + " - " + meta.author} />
            <meta name="twitter:image" content={meta.image} />
            {
                !description ? (
                    <>
                        <meta name="description" content={meta.description}  /> 
                        <meta property="og:description" content={meta.description} />
                        <meta name="twitter:description" content={meta.description} />
                    </>
                )
                : (
                    <>
                        <meta name="description" content={description} />
                        <meta property="og:description" content={description} />
                        <meta name="twitter:description" content={description} />
                    </>
                )
            }
            {
                publish && (
                    <meta property="article:published_time" content={publish} />
                )
            }
        </Head>
    )
}