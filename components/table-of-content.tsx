"use client";
import Link from 'next/link';
import { useRef, useState } from 'react';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { motion } from 'framer-motion';

function formatLink(text: string) {
  return text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, '-');
}

const variants = {
  open: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
}

export default function TableOfContent({ headings }: { headings: { [key: string]: string[] } }) {
  const [tocOpen, setTocOpen] = useState(false);
  
  const toggleToc = () => {
    setTocOpen(!tocOpen);
  }

  return (
    <div className="font-khula text-lg fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-50 w-[250px] rounded border-2">
      <div className="py-2 px-5">
        <button className="flex w-full text-slate-600" onClick={toggleToc}>
          <span className="font-bold h-[24px]">Table of Content</span>
          <span className="ml-auto" >
            {
              tocOpen ? <GoTriangleDown size={24} className="text-slate-600" /> : <GoTriangleUp size={24} className="text-slate-600" />
            }
          </span>
        </button>
        <motion.ol
          id="toc"
          className={`overflow-hidden text-slate-500 hover:text-slate-600 ${tocOpen ? "mt-5" : ""}`}
          animate={tocOpen ? "open" : "closed"}
          variants={variants}
          initial="closed"
        >
          {
            Object.keys(headings).map((key, index) => (
              <li key={index}>
                <Link
                  passHref href={`#${formatLink(key)}`}
                  className="hover:text-slate-500"
                  scroll={true}
                  onClick={() => {
                    const element = document.getElementById(formatLink(key))
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }
                  }}
                >
                  {key}
                </Link>
                <ul className="list-disc pl-5">
                  {headings[key].map((subHeading, subIndex) => (
                    <li key={`${index}-${subIndex}`} className="hover:text-slate-500">
                      <Link
                        passHref
                        href={`#${formatLink(subHeading)}`}
                        onClick={() => {
                          const element = document.getElementById(formatLink(key))
                          if (element) {
                            element.scrollIntoView({
                              behavior: 'smooth'
                            })
                          }
                        }}
                      >
                        {subHeading}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          }
        </motion.ol>
      </div>
    </div>
  )
}