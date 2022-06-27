import { useEffect } from 'react';
import useSWR from 'swr';
import { Text } from '@chakra-ui/react';

type Views = {
    total: number;
};

async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
}

export default function ViewCounter({ slug, blogPage }: { slug: string, blogPage: boolean }) {
    const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
    const views = new Number(data?.total);

    useEffect(() => {
        if (blogPage) {
            fetch(`/api/views/${slug}`, {
                method: 'POST'
            });
        }
    }, [slug, blogPage]);

    return <Text display="inline-block" fontSize="sm" color="gray.500">{`${views > 0 ? views.toLocaleString() : '–––'} views`}</Text>;
}