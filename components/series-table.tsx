import Link from 'next/link'

interface SeriesPost {
  title: string,
  current: boolean
}

export default function SeriesTable({ title, series }: { title: string, series: SeriesPost[] }) {
  return (
    <div className="mb-32 p-5 rounded-lg border not-prose w-3/4 mx-auto grid grid-cols gap-3 dark:bg-neutral-900">
      <p className="font-merriweather text-xl">{title}: {series.length} Part&#40;s&#41;</p>
      <ol className="font-khula list-decimal list-inside flex flex-col gap-1 ml-3">
        {
          series.map(({ title, current }: SeriesPost) => {
            const slug = title.toLowerCase().replace(/ /g, '-');
            return (
              <li key={slug} className={`hover:underline ${current ? 'font-bold underline' : ''}`}>
                <Link href={`/posts/${slug}`} as={`/posts/${slug}`}>
                  {title}
                </Link>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}
