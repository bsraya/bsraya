import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Seo({ title, publish, description, type }: { title: string, publish?: string, description?: string, type: string }): JSX.Element {
    const router = useRouter();
    const meta = {
        author: "Bijon Setyawan Raya",
        description: 'A junior fullstack developer.',
        image: 'https://bsraya.com/public/images/avatar.jpg',
    }
    return (
        <Head>
            <title>{title} - {meta.author}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={meta.description} />
            <meta name="author" content={meta.author} />
            <meta name="robots" content="follow, index" />
            <meta property="og:url" content={`https://bsraya.com${router.asPath}`} />
            <link rel="canonical" href={`https://bsraya.com${router.asPath}`} />
            {
                !description ? <meta content={meta.description} name="description" /> 
                    : <meta content={description} name="description" />
            }
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={meta.author} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={title + " - " + meta.author} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title + " - " + meta.author} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {publish && (
                <meta property="article:published_time" content={publish} />
            )}
        </Head>
    )
}