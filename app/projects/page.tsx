'use client'

import { grid } from '@/constants/images'
import Image from 'next/image'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const doc = useRef(null);
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);

  const gridbg = useRef(null);
  const spotlightsL = useRef(null);
  const spotlightsR = useRef(null);

  const title1 = useRef(null);
  const title2 = useRef(null);

  const para1 = useRef(null);
  const para2 = useRef(null);

  const bt1 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(spotlightsL.current, {opacity: 0.5, rotate: -45, y: -150})
      gsap.to(spotlightsL.current, {
        opacity: 0,
        y: -250,
        rotate: -20,
        duration: 1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set(spotlightsR.current, {opacity: 0.5, rotate: 45, y: -150})
      gsap.to(spotlightsR.current, {
        opacity: 0,
        y: -250,
        rotate: 20,
        duration: 1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set([para1.current, title1.current, title2.current, para2.current], {y: 50, opacity: 0})
      gsap.from([para1.current, title1.current, title2.current, para2.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      })
    });
    return () => ctx.revert();
  }, [])

  return (
    <div className='flex-1 w-full relative' ref={doc}>
      <Image src={grid} alt='bg' className='absolute -top-10 h-dvh w-full -z-10 opacity-40 dark:opacity-100' ref={gridbg}/>
      <div className="flex gap-40 fixed -left-20" ref={spotlightsL}>
        <div className="w-5 h-120 bg-primary dark:bg-white blur-3xl"></div>
        <div className="w-5 h-100 bg-primary dark:bg-white blur-3xl"></div>
        <div className="w-5 h-120 bg-primary dark:bg-white blur-3xl"></div>
      </div>
      <div className="flex gap-40 fixed -right-20" ref={spotlightsR}>
        <div className="w-5 h-120 bg-primary dark:bg-white blur-3xl"></div>
        <div className="w-5 h-100 bg-primary dark:bg-white blur-3xl"></div>
        <div className="w-5 h-120 bg-primary dark:bg-white blur-3xl"></div>
      </div>
      <div className="w-full py-30" ref={sec1}>
        <div className="flex flex-col gap-8 items-center w-full lg:mt-5 z-10 text-center">
          <p className='text-[0.8rem] lg:text-lg font-extralight opacity-40' ref={para1}>Dynamic Web Magic with <a title='Nextjs.org' href='https://nextjs.org/' target='_blank' className='text-secondary'>Next.js</a></p>
          <h3 className='font-extrabold text-3xl lg:text-5xl flex flex-col gap-2'>
            <span ref={title1}>Transforming Concepts into</span>
            <span ref={title2}>Seamless <span className='text-primary'> User Experiences</span></span>
          </h3>
          <p className='text-[0.7rem] lg:text-[0.8rem] font-extralight opacity-60 max-w-3/4' ref={para2}>Hi! I&apos;m <strong>Oudai Oulhadj</strong>, a Fullstack Developer based in Algeria 🇩🇿</p>
          <button ref={bt1} className='text-sm lg:text-[1rem] px-10 py-2 bg-gray-700/10 rounded-xl cursor-pointer active:scale-95 hover:opacity-60 ease-in-out duration-500'>See my work &#8599;</button>
        </div>
      </div>
      <div className="w-full border h-dvh" ref={sec2}></div>
      <div className="w-full border h-dvh" ref={sec3}></div>
    </div>
  )
}

export default Projects