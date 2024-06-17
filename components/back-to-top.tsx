"use client";
import { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100
      if (isAtTop !== isTop) {
        setIsAtTop(isTop);
      }

      if (isTop !== isScrolling) {
        setIsScrolling(isTop);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isAtTop, isScrolling]);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    if (isAtTop) {
      setIsVisible(false);
    } else {
      setIsVisible(!isScrolling);
    }
  }, [isAtTop, isScrolling]);

  return (
    <>
      {
        isVisible && (
          <button onClick={scrollToTop} className="fixed bottom-5 right-5 z-10 bg-slate-50 p-2 border-2 rounded">
            <GoTriangleUp size={24} className="text-slate-600" />
          </button>
        )
      }
    </>
  )
}