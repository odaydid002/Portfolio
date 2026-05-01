'use client'

import AnymosIcon from "@/components/svg/AnymosIcon";
import DatabaseIcon from "@/components/svg/DatabaseIcon";
import JavaIcon from "@/components/svg/JavaIcon";
import ProgrammingIcon from "@/components/svg/ProgrammingIcon";
import Shape2 from "@/components/svg/Shape2";
import { graduateme } from "@/constants/images";
import { achive, graduate, group, terminal } from "@/constants/logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Career = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  const doc = useRef(null);
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  
  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);
  
  const para1 = useRef(null);
  
  const bt1 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.content', {
        xPercent: -100 * 3,
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1
        }
      }),
      gsap.set([t1.current, t2.current, t3.current], {y: 0})
      gsap.to([t1.current, t2.current, t3.current], {
        y: -100,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sec1.current,
          start: "top top",
          scrub: 2
        }
      }),
      gsap.set([".sh2", ".sh3", ".sh4"], {y: 0, opacity: 1})
      gsap.to([".sh2", ".sh3", ".sh4"], {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sec1.current,
          start: "top top",
          scrub: 4
        }
      }),
      gsap.set(['.img1', ".sh1"], {y: 10})
      gsap.to(['.img1', ".sh1"], {
        y: -100,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sec1.current,
          start: "top top",
          scrub: 3
        }
      }),
      gsap.set(".ctn", {opacity: 0})
      gsap.to(".ctn", {
        opacity: 1
      }),
      gsap.set([para1.current, bt1.current], {opacity: 1, y: 0})
      gsap.to([para1.current, bt1.current],{
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sec1.current,
          start: "top top",
          scrub: 3
        }
      })
    });
    return () => ctx.revert();
  }, [])

  const [educations, setEducations] = useState(2);
  const [exp, setExp] = useState(4);
  const [projects, setProjects] = useState(30);
  const [clients, setClients] = useState(15);

  return (
    <div className='flex-1 w-full overflow-hidden lg:overflow-visible relative' ref={doc}>
      <div className="w-60 h-200 rounded-full z-0 -bottom-50 right-0 blur-[100px] fixed -rotate-45 bg-secondary anime-fade"></div>
      <div className="w-60 h-200 rounded-full z-0 -top-50 left-0 blur-[100px] fixed -rotate-45 bg-primary anime-fade"></div>
      <div className="flex flex-col w-full lg:h-dvh lg:px-8 pt-8" ref={sec1}>
        <div className="flex flex-row flex-wrap items-center gap-8 w-4/5 mx-auto">
          <div className="flex flex-1 flex-col py-18 lg:py-0 text-center lg:text-left items-center lg:items-start gap-12 lg:gap-8 justify-center lg:pl-4">
            <h3 className="flex flex-col lg:gap-1 text-3xl lg:text-4xl font-black">
              <span ref={t1}>Education</span>
              <span ref={t2}>And Professional</span>
              <span ref={t3}>Experience <span className="text-secondary">Overview</span></span>
            </h3>
            <p className="opacity-60 text-sm w-5/6" ref={para1}>A comprehensive overview of my academic background and professional experience, reflecting the knowledge, technical skills, and practical expertise I have developed throughout my journey in computer science and technology.</p>
            <button ref={bt1} className="rounded-lg px-12 py-2.5 text-white font-bold text-[0.75rem] flex items-center justify-center bg-primary hover:opacity-60 cursor-pointer w-fit">
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center flex-1 relative lg:w-120 w-full">
            <Shape2 className="sh1 absolute lg:top-32 lg:right-15 top-20 right-10 lg:w-75 w-55 h-auto"/>
            <JavaIcon className="sh2 absolute top-5 left-0 lg:top-30 lg:left-15 lg:w-15 w-8 h-auto -rotate-12"/>
            <ProgrammingIcon className="sh4 absolute top-25 -right-5 lg:w-12 w-8 h-auto rotate-12"/>
            <DatabaseIcon className="sh3 absolute bottom-0 left-0 lg:bottom-10 lg:left-15 lg:w-10 w-8 h-auto -rotate-15"/>
            <Image src={graduateme} alt="Picture" className="img1 border lg:min-w-105 min-w-75 lg:top-5 lg:left-20 relative z-10" loading="eager" />
          </div>
        </div>
        <div className="ctn flex flex-row flex-wrap gap-2 lg:gap-0 min-w-70 items-center lg:border-2 rounded-xl p-5 w-4/5 lg:h-30 mx-auto lg:border-gray-400/10 lg:bg-gray-600/15">
          <div className="flex flex-row items-center w-full lg:w-1/4 lg:bg-transparent bg-gray-500/10 rounded-xl min-w-50 px-4 py-2 lg:py-0 h-full gap-4 lg:rounded-none border-transparent lg:border-gray-400/10 border-r-2">
            <div className="rounded-full bg-primary/10 shadow-[0px_0px_40px_-15px_#009B77] h-12 w-12 flex items-center justify-center">
              <Image src={graduate} className="w-2/3" alt="Logo" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[0.7rem] opacity-50">Education</p>
              <h3 className="text-lg font-bold">{educations}</h3>
              <p className="text-[0.7rem] opacity-50">Degrees</p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full lg:w-1/4 lg:bg-transparent bg-gray-500/10 rounded-xl min-w-50 px-4 py-2 lg:py-0 h-full gap-4 lg:rounded-none border-transparent lg:border-gray-400/10 border-r-2">
            <div className="rounded-full bg-primary/10 shadow-[0px_0px_40px_-15px_#009B77] h-12 w-12 flex items-center justify-center">
              <Image src={terminal} className="w-2/3" alt="Logo" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[0.7rem] opacity-50">Experience</p>
              <h3 className="text-lg font-bold">{exp}+</h3>
              <p className="text-[0.7rem] opacity-50">Years</p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full lg:w-1/4 lg:bg-transparent bg-gray-500/10 rounded-xl min-w-50 px-4 py-2 lg:py-0 h-full gap-4 lg:rounded-none border-transparent lg:border-gray-400/10 border-r-2">
            <div className="rounded-full bg-primary/10 shadow-[0px_0px_40px_-15px_#009B77] h-12 w-12 flex items-center justify-center">
              <Image src={achive} className="w-2/3" alt="Logo" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[0.7rem] opacity-50">Projects</p>
              <h3 className="text-lg font-bold">{projects}+</h3>
              <p className="text-[0.7rem] opacity-50">Completed</p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full lg:w-1/4 lg:bg-transparent bg-gray-500/10 rounded-xl min-w-50 px-4 py-2 lg:py-0 h-full gap-4">
            <div className="rounded-full bg-primary/10 shadow-[0px_0px_40px_-15px_#009B77] h-12 w-12 flex items-center justify-center">
              <Image src={group} className="w-2/3" alt="Logo" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[0.7rem] opacity-50">Happy Clients</p>
              <h3 className="text-lg font-bold">{clients}+</h3>
              <p className="text-[0.7rem] opacity-50">Worldwide</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-dvh overflow-hidden container" ref={sec2}>
        <div className="w-dvw shrink-0 h-dvh bg-red-500 content"></div>
        <div className="w-dvw shrink-0 h-dvh bg-blue-500 content"></div>
        <div className="w-dvw shrink-0 h-dvh bg-green-500 content"></div>
        <div className="w-dvw shrink-0 h-dvh bg-yellow-500 content"></div>
      </div>
      <div className="flex flex-col w-full h-dvh pt-8 border" ref={sec3}></div>
    </div>
  )
}

export default Career