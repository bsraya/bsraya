
import { Metadata } from 'next';
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
        <>
            <p className='font-khula mb-10 text-lg'>Need something on the go? Worry not, you can download my resume <ExternalLink text="here" url="https://drive.google.com/file/d/1jC-51cyHc-xOxdgyzh787VEHsWKMdQM7/view?usp=sharing" />.</p>

            <div className="flex flex-col gap-20">
                <div>
                    <h1 className="font-lalezar mb-5 text-3xl">Experience</h1>
                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="font-lalezar text-lg text-slate-500">October 2022 - Present</p>
                            <p className="font-merriweather text-3xl mb-1">Fullstack Developer</p>
                            <p className="font-khula text-lg">Faria Education Group - Taipei, Taiwan</p>
                        </div>
                        <div>
                            <p className="font-lalezar text-lg text-slate-500">February 2021 - December 2022</p>
                            <p className="font-merriweather text-3xl mb-1">Graduate Research Assistant</p>
                            <p className="font-khula text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-lalezar mb-5 text-3xl">Education</h1>
                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="font-lalezar text-lg text-slate-500">February 2021 - January 2023</p>
                            <p className="font-merriweather text-3xl mb-1">M. Sc. in Computer Science</p>
                            <p className="font-khula text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                        </div>
                        <div>
                            <p className="font-lalezar text-lg text-slate-500">September 2015 - January 2021</p>
                            <p className="font-merriweather text-3xl mb-1">B. Sc. in Computer Science</p>
                            <p className="font-khula text-lg">National Tsing Hua University - Hsinchu, Taiwan</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-lalezar mb-5 text-3xl">Achievements</h1>
                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="font-lalezar text-lg text-slate-500">December 2018</p>
                            <p className="font-merriweather text-3xl mb-1">Civil IoT Taiwan 2018</p>
                            <p className="font-khula text-lg">Third place - Taipei, Taiwan</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}