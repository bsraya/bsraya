import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ExternalLink from '@/components/external-link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About'
}

export default function About() {
    return (
        <div className="flex flex-col gap-10 lg:p-10 p-5">
            <Header />
            
            <div>
                <div className="w-fit">
                    <Link href="/">
                        <div className="flex px-5 py-2 border rounded-full hover:border-gray-500 items-center mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <p className="font-baskervville text-lg">Home</p>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col gap-10 mb-10">
                    <h1 className="font-bebasneue text-5xl">About</h1>
                    <div className="font-baskervville max-w-prose leading-8 flex flex-col gap-10 text-lg">
                        <p>
                            Hello! I am Bijon, a passionate technologist based in Taipei City, Taiwan.
                            My journey in tech began at <ExternalLink text="National Tsing Hua University" url='https://www.nthu.edu.tw/' />, where I completed both my Bachelor&apos;s and Master&apos;s degrees in <ExternalLink text="Computer Science" url="https://dcs.site.nthu.edu.tw/" />.
                            If you are interested to see what I have done? You could see my resume <Link href="/experience" className="underline">here</Link> or the projects that I have done <Link href="/works" className="underline">here</Link>.
                        </p>

                        <div>
                            <p>Why am I writing posts?</p>
                            <ol className="list-decimal list-inside">
                                <li>
                                    I wanna make sure that I have written down all the things that I have learned, and I can always come back to them when I need to.
                                </li>
                                <li>
                                    To make technology understandable for everyone, even five-year-olds! Whether it is a complex algorithm or concepts, I am all about breaking it down into bite-sized, easy-to-digest pieces. Because let us face it, tech should be fun and accessible, not a headache.
                                </li>
                            </ol>
                        </div>

                        <p>
                            When I unplug, you might find me dabbling in creative projects, freelancing, volunteering, or just enjoying a good chat over coffee. I believe life is about those little moments of connection, and I am all about sharing stories and laughs.
                        </p>

                        <p>
                            So, why not drop me a line on <ExternalLink text="LinkedIn" url="https://www.linkedin.com/in/bijonsetyawan/" />, check out my projects on <ExternalLink text="GitHub" url="https://github.com/bsraya" />, or send me an email at <ExternalLink text="bijonsetyawan@gmail.com" url="mailto:bijonsetyawan@gmail.com" />? Let&apos;s talk about tech, life, or anything that excites you!
                        </p>
                    </div>  
                </div>
            </div>

            <Footer />
        </div>
    )
}