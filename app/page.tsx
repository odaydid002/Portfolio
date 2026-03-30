"use client";

import { facebook, instagram, linkedin, telegram } from "@/constants/logo";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './styles/navbar.module.css'
import { useGSAP } from "@gsap/react";
import Rect from "@/components/svg/Rect";
import Shape1 from "@/components/svg/Shape1";
import Shape2 from "@/components/svg/Shape2";
import Shape3 from "@/components/svg/Shape3";
import Shape4 from "@/components/svg/Shape4";
import Shape5 from "@/components/svg/Shape5";
import Image from "next/image";
import { oday } from "@/constants/images";

gsap.registerPlugin(ScrollTrigger);

export const dynamic = 'force-dynamic'

export default function Home() {
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sec1 = useRef(null);
  const sec2 = useRef(null);

  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);

  const shape1 = useRef(null);
  const shape2 = useRef(null);
  const shape3 = useRef(null);
  const shape4 = useRef(null);
  const shape5 = useRef(null);
  const shape6 = useRef(null);

  const button1 = useRef(null);
  
  const para1 = useRef(null);

  useEffect(() => {
    const s1 = sec1.current;
    const s2 = sec2.current;

    const t1 = title1.current;
    const t2 = title2.current;
    const t3 = title3.current;

    const sh1 = shape1.current;
    const sh2 = shape2.current;
    const sh3 = shape3.current;
    const sh4 = shape4.current;
    const sh5 = shape5.current;
    const sh6 = shape6.current;

    const bt1 = button1.current;
    
    const p1 = para1.current;

    const ctx = gsap.context(() => {
      gsap.set([sh3, sh4, sh5, sh6], {y: -120, opacity: 0})
      gsap.from([sh3, sh4, sh5, sh6], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: s1,
        },
      }),
      gsap.set([sh1, sh2], {y: -100})
      gsap.from([sh1, sh2], {
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: s1,
        },
      }),
      gsap.set([t1, t2, t3], {y: -200})
      gsap.from([t1, t2, t3], {
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 2,
          trigger: s1,
        },
      }),
      gsap.set([p1, bt1], {y: 100, opacity: 0})
      gsap.from([p1, bt1], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 1,
          trigger: s1,
        },
      })
    });
    return () => ctx.revert();
  }, [])

  return (
    <>
      <div className="flex flex-row items-center justify-center w-full flex-wrap z-50 overflow-hidden " ref={sec1}>
        <div className="flex-1 flex flex-col h-dvh pt-35 lg:pt-45 pl-8 lg:max-w-3/6 ">
          <h1 className="text-white font-extrabold text-4xl lg:text-6xl flex flex-col gap-2">
            <span ref={title1}>FULL</span>
            <span ref={title2}>STACK</span>
            <span ref={title3}>CODER</span>
          </h1>
          <p className="mt-10 pr-4 pt-4 lg:max-w-4/6 lg:pt-0 text-md" ref={para1}>A Full-Stack Software Engineer and UI/UX Designer, creating modern, user-friendly web and mobile applications that are both functional and visually appealing. I turn ideas into seamless digital experiences from concept to deployment.</p>
          <button ref={button1} className="mt-10 bg-primary hover:opacity-80 cursor-pointer text-white text-sm rounded-lg px-8 py-2 font-semibold max-w-fit">
            My Work
            <span className="font-bold pl-2">
              &#8599;
            </span>
          </button>
        </div>
        <div className="flex-1 h-dvh relative min-w-150 max-w-3/6 overflow-hidden">
          <Shape2 ref={shape1} className="absolute top-50 right-50 lg:top-55 lg:right-35 w-50 lg:w-90 h-auto"/>
          <Rect ref={shape2} className="absolute top-55 right-50 lg:top-65 lg:right-30 w-50 lg:w-90 h-auto"/>
          {/*
            <Image ref={shape2} src={oday} alt="oday" width={470} className="absolute top-23 right-15"/>
          */}
          <Shape3 ref={shape3} className="absolute top-25 lg:top-40 left-35 w-15 lg:w-20 h-auto"/>
          <Shape4 ref={shape4} className="absolute top-30 right-35 lg:top-35 lg:right-20 w-15 lg:w-20 h-auto"/>
          <Shape1 ref={shape5} className="absolute bottom-40 left-35 lg:bottom-15 lg:left-20 w-15 lg:w-20 h-auto"/>
          <Shape5 ref={shape6} className="absolute bottom-35 right-35 lg:bottom-10 lg:right-20 w-10 lg:w-20 h-auto"/>
        </div>
      </div>
      <div className="flex flex-col w-full h-dvh" ref={sec2}>
        
      </div>
    </>
  );
}
