import Link from 'next/link'

export default function Posts() {
    return (
        <div className="p-10">
            <div className="text-xl mb-36"><Link href="/">Bijon Setyawan Raya</Link> / <Link href="/posts" className="font-bold">Posts</Link></div>
            <h1 className="underline mb-5">All Posts</h1>
            <div className="flex flex-col gap-10 mb-32 w-3/4 md:w-full">
                {
                    [...Array(6)].map((_, i) => {
                        return (
                            <Link key={i} href="#" className="h-30 flex gap-5">
                                <img src="https://dummyimage.com/200x125.png/a9a9a9/fff" alt="dummy" className="rounded-lg" />
                                <div>
                                    <h1 className="text-2xl font-bold">Lorem Ipsum Dolorem Sit Amet</h1>
                                    <p className="text-lg my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                                    <p className="text-gray-500">January 1, 2024</p>
                                </div>
                            </Link>
                        )
                    })
                }
                {/* <Link to="#" className="py-2 px-5 text-xl w-fit rounded-full border border-2 hover:border-gray-500">Load More</Link> */}
            </div>
        </div>
    )
}