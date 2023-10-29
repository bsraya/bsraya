export type IMdxPage = {
    frontMatter: { [key: string]: any; };
    mdxSource: any;
    headings: any;
    slug: string;
    relatedPosts: IPost[] | null;
};

export type IPost =  {
    frontMatter: { [key: string]: any; };
    slug: string;
}