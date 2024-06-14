import Link from 'next/link';
import { Metadata } from 'next';
import Time from '@/components/time';
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoBriefcaseOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";

export const metadata: Metadata = {
    openGraph: {
        url: '/',
        title: 'Home',
        description: 'Blog and portfolio',
        siteName: 'Bijon Setyawan Raya',
        creators: ['Bijon Setyawan Raya'],
        images: [
            {
                url: `/api/og?title=Home`,
                width: 1200,
                height: 630,
                alt: `Bijon Setyawan Raya - Home`,
            }
        ]
    }
}

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between min-h-screen">
        <nav className="flex p-5">
          <div className="font-baskervville mr-auto md:text-[2rem] text-[1.25rem]">BSR</div>
          <ul className="font-inter text-right md:text-[2rem] text-[1.25rem]">
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>

        <div className="flex flex-col gap-2 p-5">
          <div className="font-baskervville uppercase md:text-[4rem] text-[2rem]">
            Bijon makes<br />websites and <br />machines learn.
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 w-fit rounded">
            <Link href="/projects">Learn more</Link>
          </button>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 font-inter h-1/4 p-5 gap-10">
          <div className="flex gap-5">
            <div>
              <IoLocationOutline className="h-5 w-5 mb-1" />
              <div className="flex">Location</div>
              <div className="text-slate-500">Taipei, Taiwan</div>
            </div>

            <div>
              <IoTimeOutline className="h-5 w-5 mb-1" />
              <div className="flex">Time</div>
              <div className="text-slate-500"><Time /></div>
            </div>

            <div>
              <IoBriefcaseOutline className="h-5 w-5 mb-1" />
              <div className="flex"> Working on</div>
              <div className="text-slate-500">M-Cubes</div>
            </div>
          </div>
          
          {/* <div className="flex gap-5 items-end justify-left md:justify-end">
            <a href="mailto:bijonsetyawan@gmail.com">
              <MdOutlineEmail className="h-10 w-10"/>
            </a>

            <a href="https://www.linkedin.com/in/bijonsetyawan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-10 w-10"/>
            </a>
            
            <a href="https://github.com/bsraya" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-10 w-10"/>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}
