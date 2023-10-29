import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/types').ContentLayerConfig}*/
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        published: {
            type: 'boolean',
            default: true,
        },
    },
    computedFields,
}))

export const Portfolio = defineDocumentType(() => ({
    name: 'Portfolio',
    filePathPattern: `portfolios/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        date:{
            type: 'string',
        },
        tags: {
            type: 'string',
            list: true,
        },
        published: {
            type: 'boolean',
            default: true,
        },
    },
    computedFields,
}))

export default makeSource ({
    contentDirPath: './content',
    documentTypes: [Post, Portfolio],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypeAccessibleEmojis,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        if (node.children.length == 0) {
                            node.children = [{ type: 'text', value: ' ' }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = 'word--highlighted'
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section'
                    }
                }
            ]
        ],
    },
    watch: process.env.NODE_ENV === 'development',
})