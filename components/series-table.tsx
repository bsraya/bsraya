import Link from 'next/link'

interface SeriesPost {
    title: string,
    current: boolean
}

export default function SeriesTable({ title, series }: { title: string, series: SeriesPost[] }) {
  return (
    <div className="mb-32 p-5 rounded-lg border not-prose w-full text-gray-800">
      <p className="font-bebasneue text-2xl mb-5 underline">{title}: {series.length} Parts</p>
      <ol className="font-baskervville list-decimal list-inside flex flex-col gap-3 ml-3">
        {
          series.map(({ title, current }: SeriesPost) => {
            const slug = title.toLowerCase().replace(/ /g, '-');
            return (
              <li key={slug} className={`hover:underline text-lg ${current ? 'font-bold' : ''}`}>
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
