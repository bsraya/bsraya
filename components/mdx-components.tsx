import Flow from "./flow";
import Link from "next/link";
import * as React from "react";
import { cn } from "../lib/utils";
import LineGraph from "./line-graph";
import SeriesTable from './series-table';
import ScatterGraph from "./scatter-graph";
import Video from "./video";
import { useMDXComponent } from "next-contentlayer/hooks";

const customLink = (classes: string, props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href} {...props} />
    )
  }

  return (
    <a className={`${classes}`} target="_blank" rel="noopener noreferrer" {...props}>
      <span className="mr-1 break-words">{props.children}</span>
      <svg viewBox="0 0 24 24" className="inline-block mb-1" height="16" width="16">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <path d="M15 3h6v6"></path>
          <path d="M10 14L21 3"></path>
        </g>
      </svg>
    </a>
  )
}

const components: any = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-merriweather mt-2 scroll-m-20 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        `font-merriweather scroll-m-20 border-b pb-1 text-3xl font-semibold mt-10 {&[class*="footnote-label"]}:mt-10`,
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-merriweather mt-8 scroll-m-20 text-2xl font-semibold",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-merriweather mt-8 scroll-m-20 text-xl font-semibold",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "font-merriweather mt-8 scroll-m-20 text-lg font-semibold",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "font-merriweather mt-8 scroll-m-20 text-base font-semibold",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p
      className={cn("font-khula md:leading-8 leading-6 [&:not(:first-child)]:my-10", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("font-khula my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("font-khula my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2 max-w-prose", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "font-khula mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="w-full flex flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={
          cn("rounded w-full", className)
        }
        alt={alt}
        {...props}
      />
      <span className="mx-auto text-sm text-muted-foreground text-slate-500">
        {alt}
      </span>
    </span>
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <th
      className={cn(
        "border px-4 py-4 text-left font-bold md:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className || ""
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        "border px-4 py-2 text-left md:px-4 [&[align=center]]:text-center [&[align=right]]:text-right",
        className || ""
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: any) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-fira text-sm [&>*]:my-[0.2rem] break-words",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => (
    customLink(
      cn("flex-inline", className),
      props
    )
  ),
  ScatterGraph,
  LineGraph,
  SeriesTable,
  Flow,
  Video
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}