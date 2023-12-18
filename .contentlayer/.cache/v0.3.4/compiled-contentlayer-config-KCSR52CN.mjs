// contentlayer.config.js
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  tagAsParams: {
    type: "string",
    resolve: (doc) => doc.tag.split(" ").join("-").toLowerCase()
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    image: {
      type: "string"
    },
    tag: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `works/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    image: {
      type: "string"
    },
    tag: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Work],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme: "github-light",
          onVisitLine(node) {
            if (node.children.length == 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = "word--highlighted";
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ],
      rehypeKatex,
      rehypeAccessibleEmojis
    ]
  },
  watch: process.env.NODE_ENV === "development"
});
export {
  Post,
  Work,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KCSR52CN.mjs.map
