interface IMdxPage {
    frontMatter: {
        title: string
        date: string
        readingTime: string
        description: string
        tags: string[]
        publish: boolean
    }
    mdxSource: any
}

export type { IMdxPage }; // export type { IMdxPage }