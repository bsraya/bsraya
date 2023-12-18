import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ExternalLink from '@/components/external-link';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Bijon\'s resume',
    openGraph: {
        url: '/experience',
        title: 'Experience',
        description: 'Bijon\'s resume',
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
        images: [
            {
                url: `/api/og?title=Experience`,
                width: 1200,
                height: 630,
                alt: `Bijon Setyawan Raya - Experience`,
            }
        ]
    },
    keywords: [
        'Bsraya resume',
        'Bsraya curriculum vitae',
        'Bsraya cv',
        'Bsraya experience',
        'Bijon Setyawan Raya resume',
        'Bijon Setyawan Raya curriculum vitae',
        'Bijon Setyawan Raya cv',
        'Bijon Setyawan Raya experience',
    ]
}

export default function Experience() {
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

                <p className='font-baskervville mb-10 text-lg'>Need something on the go? Worry not, you can download my resume <ExternalLink text="here" url="https://drive.google.com/file/d/1jC-51cyHc-xOxdgyzh787VEHsWKMdQM7/view?usp=sharing" />.</p>

                <div className="flex flex-col gap-20 mb-10">
                    <div>
                        <h1 className="font-bebasneue mb-10 text-5xl">Experience</h1>
                        <div className="flex flex-col gap-10">
                            <div>
                                <p className="font-bebasneue text-lg">October 2022 - Present</p>
                                <p className="font-ptserif text-3xl">Fullstack Developer</p>
                                <p className="font-baskervville text-lg mb-1">Faria Education Group - Taipei, Taiwan</p>
                                <p className="font-baskervville text-sm">Technologies: Ruby on Rails, Vue, MySQL, and ElasticSearch</p>
                            </div>
                            <div>
                                <p className="font-bebasneue text-lg">February 2021 - December 2022</p>
                                <p className="font-ptserif text-3xl">Graduate Research Assistant</p>
                                <p className="font-baskervville text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bebasneue mb-10 text-5xl">Education</h1>
                        <div className="flex flex-col gap-10">
                            <div>
                                <p className="font-bebasneue text-lg">February 2021 - January 2023</p>
                                <p className="font-ptserif text-3xl">M. Sc. in Computer Science</p>
                                <p className="font-baskervville text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                            </div>
                            <div>
                                <p className="font-bebasneue text-lg">September 2015 - January 2021</p>
                                <p className="font-ptserif text-3xl">B. Sc. in Computer Science</p>
                                <p className="font-baskervville text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bebasneue mb-10 text-5xl">Achievements</h1>
                        <div className="font-baskervville flex flex-col gap-10">
                            <div>
                                <p className="font-bebasneue text-lg">December 2018</p>
                                <p className="font-ptserif text-3xl">Civil IoT Taiwan 2018</p>
                                <p className="font-baskervville text-lg">Third place - Taipei, Taiwan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}