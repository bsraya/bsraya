export type MdxPage = {
    frontMatter: { [key: string]: any; };
    mdxSource: any;
    headings: any;
    slug: string;
    relatedPosts: Post[] | null;
};

export type Post =  {
    frontMatter: { [key: string]: any; };
    slug: string;
}

export type Views = {
    total: number;
};