import Link from 'next/link';

export default function Tags() {
  return (
    <div className="p-10">
      <div className='text-xl mb-36'><Link href='/'>Bijon Setyawan Raya</Link> / <Link href='/tags' className='font-bold'>Tags</Link></div>
    </div>
  )
}