"use client";

import { align, camera, code, dev, facebook, instagram, layer, linkedin, play, server, telegram } from "@/constants/logo";
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
import VideoPlayer from "@/components/VideoPlayer";
import { welcomeVid } from "@/constants/videos";
import ServiceContainer from "@/components/ServiceContainer";


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
  const sec3 = useRef(null);

  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const title5 = useRef(null);
  const title6 = useRef(null);
  const title7 = useRef(null);

  const shape1 = useRef(null);
  const shape2 = useRef(null);
  const shape3 = useRef(null);
  const shape4 = useRef(null);
  const shape5 = useRef(null);
  const shape6 = useRef(null);
  const shape7 = useRef(null);
  const shape8 = useRef(null);
  const shape9 = useRef(null);

  const button1 = useRef(null);
  
  const video1 = useRef(null);
  
  const para1 = useRef(null);
  const para2 = useRef(null);

  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([shape3.current, shape4.current, shape5.current, shape6.current], {y: 50, opacity: 0})
      gsap.from([shape3.current, shape4.current, shape5.current, shape6.current], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set([shape1.current, shape2.current], {y: 100})
      gsap.from([shape1.current, shape2.current], {
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set([title1.current, title2.current, title3.current], {y: -200})
      gsap.from([title1.current, title2.current, title3.current], {
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 2,
          trigger: sec1.current,
        },
      }),
      gsap.set([para1.current, button1.current], {y: 100, opacity: 0})
      gsap.from([para1.current, button1.current], {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 1,
          trigger: sec1.current,
        },
      })
      /*-----*/
      gsap.set([title4.current, title5.current], {y: 0, opacity: 1})
      gsap.from([title4.current, title5.current], {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 2,
          trigger: sec1.current,
        },
      }),
      gsap.set(para2.current, {x: 0, opacity: 1})
      gsap.from(para2.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set(video1.current, {y: 0, opacity: 1})
      gsap.from(video1.current, {
        y: 150,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      })
      /*-----*/
      gsap.set([title6.current, title7.current], {y: 0, opacity: 1})
      gsap.from([title6.current, title7.current], {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 2,
          trigger: sec2.current,
        },
      }),
      gsap.set([container1.current, container2.current, container3.current, container4.current, container5.current, container6.current], {y: 0, opacity: 1})
      gsap.from([container1.current, container2.current, container3.current, container4.current, container5.current, container6.current], {
        y: 150,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec2.current,
        },
      }),
      gsap.set([shape7.current, shape8.current, shape9.current], {y: 0, rotateZ: -60})
      gsap.from([shape7.current, shape8.current, shape9.current], {
        y: -100,
        rotateZ: 90,
        duration: 2,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 4,
          trigger: sec2.current,
        },
      })
    });
    return () => ctx.revert();
  }, [])

  const [playable, setPlayable] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-center w-full flex-wrap z-10 overflow-hidden" ref={sec1}>
        <div className="flex-1 flex flex-col h-dvh pt-35 lg:pt-45 pl-8 lg:max-w-3/6 ">
          <h1 className="text-white font-extrabold text-4xl lg:text-6xl flex flex-col gap-2">
            <span ref={title1}>FULL</span>
            <span ref={title2}>STACK</span>
            <span ref={title3}>CODER</span>
          </h1>
          <p className="mt-10 pr-4 pt-4 lg:max-w-4/6 lg:pt-0 text-md opacity-70" ref={para1}>A Full-Stack Software Engineer and UI/UX Designer, creating modern, user-friendly web and mobile applications that are both functional and visually appealing. I turn ideas into seamless digital experiences from concept to deployment.</p>
          <button ref={button1} className="mt-10 bg-primary hover:opacity-80 cursor-pointer text-white text-sm rounded-lg px-8 py-2 font-semibold max-w-fit">
            My Work
            <span className="font-bold pl-2">
              &#8599;
            </span>
          </button>
        </div>
        <div className="flex-1 min-h-dvh relative min-w-150 max-w-3/6 overflow-hidden">
          <Shape2 ref={shape1} className="absolute top-50 right-50 lg:top-55 lg:right-35 w-50 lg:w-90 h-auto"/>
          <Rect ref={shape2} className="absolute top-55 right-50 lg:top-65 lg:right-30 w-50 lg:w-90 h-auto"/>
          {/*
            <Image ref={shape2} src={oday} alt="oday" width={470} className="absolute top-23 right-15"/>
          */}
          <Shape3 ref={shape3} className="absolute top-25 lg:top-40 left-35 w-15 lg:w-20 h-auto"/>
          <Shape4 ref={shape4} className="absolute top-30 right-35 lg:top-35 lg:right-20 w-15 lg:w-20 h-auto"/>
          <Shape1 ref={shape5} className="absolute bottom-40 left-35 lg:bottom-15 lg:left-20 w-15 lg:w-20 h-auto"/>
          <Shape5 ref={shape6} className="absolute bottom-35 right-35 lg:bottom-10 lg:right-20 w-10 lg:w-15 h-auto"/>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-hidden lg:pt-8 pt-16 pb-8 z-10" ref={sec2}>
        <div className="flex flex-row px-4 lg:px-0 lg:w-3/4 self-center flex-wrap">
              <h1 className="min-w-[50%] font-extrabold text-4xl flex flex-col">
                <span ref={title4}>Why I Am The </span>
                <span ref={title5}>Best Choice?</span>
              </h1>
              <p ref={para2} className="min-w-[50%] flex-1 opacity-80 text-sm mt-6 lg:mt-2">
                I combine full-stack development and UI/UX design to deliver seamless, visually appealing, and highly functional digital solutions.
              </p>
        </div>
        <div ref={video1} onClick={() => setPlayable(true)} className="cursor-pointer mt-12 self-center flex relative z-50">
            <div onClick={() => setPlayable(true)} hidden={playable} className="hover:opacity-90 absolute top-20 lg:top-50 left-2/4 w-10 h-10 lg:w-20 lg:h-20 bg-primary z-10 rounded-full flex items-center justify-center" style={{transform: "translateX(-50%)"}}>
              <Image src={play} alt="play" width={12} />
            </div>
            <VideoPlayer src={welcomeVid} controls={playable} autoPlay={playable} />
        </div>
      </div>
      <div className="flex flex-col w-full items-center z-10 relative mt-4 mb-8" ref={sec3}>
        <h1 className="font-extrabold text-3xl flex flex-col text-center">
          <span ref={title6}>Services I Can Provide</span>
          <span ref={title7}>For You</span>
        </h1>
        <div className="flex flex-row flex-wrap w-full lg:mt-20 mt-8">
          <ServiceContainer ref={container1} className="lg:w-1/3 mt-8" logo={dev} color="#5454D4" title="Development" description="I build fast, scalable, and responsive websites tailored to your business needs, ensuring a seamless user experience across all devices."/>
          <ServiceContainer ref={container2} className="lg:w-1/3 mt-8" logo={layer} color="#F04037" title="UI/UX Design" description="I design intuitive and visually engaging user interfaces that enhance user experience and drive interaction and conversion."/>
          <ServiceContainer ref={container3} className="lg:w-1/3 mt-8" logo={code} color="#FEDC5A" title="Graphic Design" description="I create custom icon sets and unique logos tailored to your brand identity."/>
          <ServiceContainer ref={container4} className="lg:w-1/3 mt-8" logo={align} color="#FEDC5A" title="Motion Graphics" description="I design engaging motion graphics and animations that bring your ideas to life and capture attention."/>
          <ServiceContainer ref={container5} className="lg:w-1/3 mt-8" logo={camera} color="#5454D4" title="Product Prototyping" description="I transform ideas into interactive prototypes with intuitive design and smooth user flows, ready for testing and development."/>
          <ServiceContainer ref={container6} className="lg:w-1/3 mt-8" logo={server} color="#F04037" title="API Development & Integration" description="I design and integrate powerful APIs to connect systems, automate workflows, and enhance your application's functionality."/>
        </div>
        <Shape1 ref={shape7} className="z-50 absolute left-0 lg:left-60 w-15 lg:w-20 h-auto"/>
        <Shape5 ref={shape8} className="z-50 absolute top-20 lg:right-60 right-0 w-10 h-auto rotate-12"/>
        <Shape5 ref={shape9} className="z-50 absolute bottom-50 lg:bottom-20 left-0 lg:left-60 w-10 h-auto -rotate-12"/>
      </div>
    </>
  );
}
