import Link from 'next/link';
import Header from '@/components/header';
import ExternalLink from '@/components/external-link';

export default function About() {
    return (
        <div className="lg:p-10 p-5">
            <Header />

            <Link href="/">
                <div className="flex w-fit px-5 py-2 border rounded-full hover:border-gray-500 items-center mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <p className="font-baskervville">Home</p>
                </div>
            </Link>

            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="font-bebasneue mb-10 text-5xl">About</h1>
                    <div className="font-baskervville max-w-prose leading-8 flex flex-col gap-10 text-lg">
                        <p>
                            Hello! I am Bijon, a passionate technologist based in Taipei City, Taiwan.
                            My journey in tech began at <ExternalLink text="National Tsing Hua University" url='https://www.nthu.edu.tw/' />, where I completed both my Bachelor&apos;s and Master&apos;s degrees in <ExternalLink text="Computer Science" url="https://dcs.site.nthu.edu.tw/" />.
                            This academic path not only solidified my foundation in technology but also sparked my interest in innovative solutions and collaborative projects.
                        </p>

                        <p>
                            When I unplug, you might find me dabbling in creative projects, volunteering, or just enjoying a good chat over coffee. I believe life is about those little moments of connection, and I am all about sharing stories and laughs.
                        </p>

                        <p>
                            So, why not drop me a line on <ExternalLink text="LinkedIn" url="https://www.linkedin.com/in/bijonsetyawan/" />, check out my projects on <ExternalLink text="GitHub" url="https://github.com/bsraya" />, or send me an email at <ExternalLink text="bijonsetyawan@gmail.com" url="mailto:bijonsetyawan@gmail.com" />? Let&apos;s talk about tech, life, or anything that excites you!
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="font-bebasneue mb-10 text-5xl">Experience</h1>

                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="font-bebasneue text-lg">October 2022 - Present</p>
                            <p className="font-ptserif text-3xl">Fullstack Developer</p>
                            <p className="font-baskervville text-lg">Faria Education Group - Taipei, Taiwan</p>
                        </div>
                        <div>
                            <p className="font-bebasneue text-lg">February 2021 - December 2022</p>
                            <p className="font-ptserif text-3xl">Graduate Research Assistant</p>
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
    )
}