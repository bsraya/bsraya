import useSWR from 'swr';
import { useEffect } from 'react';
import type { Views } from '../lib/types';
import {fetcher} from '../lib/fetcher'

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

    return <>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</>
}