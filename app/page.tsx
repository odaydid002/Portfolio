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
import { oday, oday2, showcase1, showcase2, showcase3 } from "@/constants/images";
import VideoPlayer from "@/components/VideoPlayer";
import { welcomeVid } from "@/constants/videos";
import ServiceContainer from "@/components/ServiceContainer";
import Glass from "@/components/container/Glass";
import Showcase from "@/components/container/Showcase";
import JavaIcon from "@/components/svg/JavaIcon";
import ProgrammingIcon from "@/components/svg/ProgrammingIcon";
import DatabaseIcon from "@/components/svg/DatabaseIcon";
import AnymosIcon from "@/components/svg/AnymosIcon";
import BracesIcon from "@/components/svg/BracesIcon";
import ReactIcon from "@/components/svg/ReactIcon";
import DebugIcon from "@/components/svg/DebugIcon";
import CodeIcon from "@/components/svg/CodeIcon";
import TerminalIcon from "@/components/svg/TerminalIcon";
import TreeIcon from "@/components/svg/TreeIcon";

const getPageHeight = (): number => {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
};

gsap.registerPlugin(ScrollTrigger);

export const dynamic = 'force-dynamic'

export default function Home() {

  const scrollUp = () => {
    setTimeout(() => {
        ScrollTrigger.refresh();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
  }

  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo({
        top: 99999,
      });
      scrollUp()
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);


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
  const sec4 = useRef(null);
  const sec5 = useRef(null);

  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const title5 = useRef(null);
  const title6 = useRef(null);
  const title7 = useRef(null);
  const title8 = useRef(null);

  const shape1 = useRef(null);
  const shape2 = useRef(null);
  const shape3 = useRef(null);
  const shape4 = useRef(null);
  const shape5 = useRef(null);
  const shape6 = useRef(null);
  const shape7 = useRef(null);
  const shape8 = useRef(null);
  const shape9 = useRef(null);
  const shape10 = useRef(null);
  const shape11 = useRef(null);
  const shape12 = useRef(null);
  const shape13 = useRef(null);
  const shape14 = useRef(null);
  const shape15 = useRef(null);

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
  const container7 = useRef(null);
  const container8 = useRef(null);
  const container9 = useRef(null);

  const doc = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([shape3.current, shape5.current], {y: 50, rotateZ: 0})
      gsap.from([shape3.current, shape5.current], {
        y: 0,
        rotateZ: 12,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec1.current,
        },
      }),
      gsap.set([shape4.current, shape6.current], {y: 50, rotateZ: 0})
      gsap.from([shape4.current, shape6.current], {
        y: 0,
        rotateZ: -12,
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
      /*-----*/
      gsap.set(sec5.current, {opacity: 1})
      gsap.from(sec5.current, {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          start: "bottom bottom",
          scrub: 3,
          trigger: sec4.current,
        },
      }),
      /*-----*/
      gsap.set(title8.current, {x: 0, opacity: 1})
      gsap.from(title8.current, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 2,
          trigger: sec3.current,
        },
      }),
      gsap.set([container7.current, container8.current, , container9.current], {y: 0, opacity: 1})
      gsap.from([container7.current, container8.current, , container9.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top bottom",
          scrub: 3,
          trigger: sec4.current,
        },
      }),
      /*-----*/
      gsap.set(shape10.current, {y: Math.ceil(getPageHeight() / 4)})
      gsap.from(shape10.current, {
        y: Math.ceil(getPageHeight() / 2),
        duration: 2,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: doc.current,
        },
      }),
      gsap.set(shape11.current, {y: Math.ceil(getPageHeight() / 3), rotateZ: 0})
      gsap.from(shape11.current, {
        y: Math.ceil(getPageHeight() / 3) + 500,
        rotateZ: 360,
        duration: 2,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: doc.current,
        },
      }),
      gsap.set(shape12.current, {y: Math.ceil(getPageHeight() / 2)})
      gsap.from(shape12.current, {
        y: Math.ceil(getPageHeight() / 2) + 200,
        duration: 2,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: doc.current,
        },
      }),
      gsap.set(shape13.current, {y: Math.ceil(getPageHeight() / 4)})
      gsap.from(shape13.current, {
        y: Math.ceil(getPageHeight() / 4) + 200,
        duration: 2,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: doc.current,
        },
      }),
      /*-----*/
      gsap.set([shape14.current, shape15.current], {y: 100})
      gsap.from([shape14.current, shape15.current], {
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "top top",
          scrub: 3,
          trigger: sec3.current,
        },
      })
    });
    return () => ctx.revert();
  }, [])

  const [playable, setPlayable] = useState(false);

  return (
    <div className="lg:px-30 px-8 w-full relative" ref={doc}>

      <div 
        className="rounded-full w-100 h-250 z-0 opacity-20 fixed left-50 bg-primary anime-fade" 
        style={{
          filter:"blur(150px)",
          transform: "rotateZ(-50deg)"
        }}
      ></div>
      <div 
        className="bg-secondary rounded-full w-100 h-250 z-0 opacity-20 fixed right-50 top-50 anime-fade" 
        style={{
          filter:"blur(150px)",
          transform: "rotateZ(50deg)"
        }}
      ></div>

      <BracesIcon ref={shape10} className="absolute top-50 lg:top-none z-99 w-8 lg:w-10"/>
      <ReactIcon ref={shape11} className="absolute top-50 lg:top-none z-99 w-8 lg:w-10 lg:right-30 right-5"/>
      <DebugIcon ref={shape12} className="absolute top-50 lg:top-none z-99 w-8 lg:w-10 lg:left-30 left-5"/>
      <CodeIcon ref={shape13} className="absolute top-50 lg:top-none z-99 w-8 lg:w-10 lg:right-10"/>
      
      <button onClick={scrollUp} className="fixed z-99 bottom-8 right-8 bg-gray-600/20 w-10 h-10 rounded-full hidden4phone flex items-center justify-center cursor-pointer opacity-20 hover:opacity-70 duration-500 ease-in-out">
        &#8686;
      </button>
      <div className="flex relative flex-row items-center justify-center w-full flex-wrap z-10 overflow-hidden" ref={sec1}>
        <div className="flex-1 flex flex-col h-dvh pt-20 lg:pt-30 lg:max-w-3/6 ">
          <h1 className=" font-extrabold text-4xl lg:text-6xl flex flex-col gap-2">
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
        <div className="flex-1 lg:h-dvh min-h-120 relative min-w-150 max-w-3/6 overflow-hidden">
          <Shape2 ref={shape1} className="absolute top-20 right-50 lg:top-35 lg:right-35 w-60 lg:w-90 h-auto"/>
          <Image ref={shape2} src={oday} alt="oday" className="absolute top-0 lg:right-19 right-35 lg:w-120 w-80"/>
          {/*
          <Image ref={shape2} src={oday} alt="oday" className="absolute top-0 lg:right-19 right-35 lg:w-120 w-80"/>
          <Rect ref={shape2} className="absolute top-55 right-50 lg:top-45 lg:right-30 w-50 lg:w-90 h-auto"/>
          */}
          <JavaIcon ref={shape3} className="absolute top-25 lg:top-30 lg:left-15 w-8 lg:w-15 h-auto -rotate-12"/>
          <ProgrammingIcon ref={shape4} className="absolute top-20 right-35 lg:top-25 lg:right-10 w-10 lg:w-15 h-auto rotate-12"/>
          <DatabaseIcon ref={shape5} className="absolute bottom-20 left-35 lg:bottom-35 lg:left-15 lg:w-15 w-10 h-auto -rotate-6"/>
          <AnymosIcon ref={shape6} className="absolute bottom-35 right-35 lg:bottom-30 lg:right-20 w-8 lg:w-15 h-auto rotate-6"/>
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
      <div className="flex flex-col w-full items-center z-10 relative my-4" ref={sec3}>
        <h1 className="font-extrabold text-3xl flex flex-col text-center">
          <span ref={title6}>Services I Can Provide</span>
          <span ref={title7}>For You</span>
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full lg:mt-20 mt-8">
          <ServiceContainer ref={container1} className="lg:w-1/3 mt-8" logo={dev} color="#5454D4" title="Development" description="I build fast, scalable, and responsive websites tailored to your business needs, ensuring a seamless user experience across all devices."/>
          <ServiceContainer ref={container2} className="lg:w-1/3 mt-8" logo={layer} color="#F04037" title="UI/UX Design" description="I design intuitive and visually engaging user interfaces that enhance user experience and drive interaction and conversion."/>
          <ServiceContainer ref={container3} className="lg:w-1/3 mt-8" logo={code} color="#34C759" title="Graphic Design" description="I create custom icon sets and unique logos tailored to your brand identity."/>
          <ServiceContainer ref={container4} className="lg:w-1/3 mt-8" logo={align} color="#FEDC5A" title="Motion Graphics" description="I design engaging motion graphics and animations that bring your ideas to life and capture attention."/>
          <ServiceContainer ref={container5} className="lg:w-1/3 mt-8" logo={camera} color="#FF2D55" title="Product Prototyping" description="I transform ideas into interactive prototypes with intuitive design and smooth user flows, ready for testing and development."/>
          <ServiceContainer ref={container6} className="lg:w-1/3 mt-8" logo={server} color="#00C8B3" title="API Development & Integration" description="I design and integrate powerful APIs to connect systems, automate workflows, and enhance your application's functionality."/>
        </div>
        <Shape1 ref={shape7} className="z-50 absolute left-0 lg:left-60 w-15 lg:w-20 h-auto"/>
        <Shape5 ref={shape8} className="z-50 absolute top-20 lg:right-60 right-0 w-10 h-auto rotate-12"/>
        <Shape5 ref={shape9} className="z-50 absolute bottom-50 lg:-bottom-10 left-0 lg:left-60 w-10 h-auto -rotate-12"/>
      </div>
      <div className="flex flex-col w-full mt-25 mb-4 relative" ref={sec4}>
        <h1 className="font-extrabold text-2xl lg:text-3xl" ref={title8}>My Creative Showcase</h1>
        <div className="flex flex-row justify-center gap-4 lg:gap-8 w-full flex-wrap lg:mt-15">
            <Showcase className="h-fit rounded-2xl" image={showcase1} ref={container7}/>
            <Showcase className="h-fit lg:mt-20 rounded-2xl" image={showcase2} ref={container8}/>
            <Showcase className="h-fit lg:mt-40 rounded-2xl" image={showcase3} ref={container9}/>
        </div>
        <TerminalIcon ref={shape14} className="absolute z-99 w-5 lg:w-10 lg:right-10 right-0 top-5 -rotate-12"/>
        <TreeIcon ref={shape15} className="absolute z-99 w-5 lg:w-10 lg:left-10 left-0 bottom-15 rotate-12"/>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 lg:gap-0 mb-4 mt-10 lg:mt-50 lg:px-20 px-8 h-60 lg:h-100 relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg" ref={sec5}>
          <h1 className="lg:text-5xl text-xl font-extrabold flex flex-col">
            <span>Contact me for the service</span>
            <span>you want to use</span>
          </h1>
          <button className="rounded-sm bg-primary text-white text-sm font-semibold px-8 h-10 hover:opacity-80 cursor-pointer duration-500 ease-in-out">
            Contact Me
          </button>
          <Shape4 className="absolute lg:bottom-10 bottom-5 left-5 w-10 h-auto"/>
          <Shape5 className="absolute top-5 lg:top-10 right-5 lg:right-10 w-5 lg:w-10 h-auto rotate-12"/>
      </div>
    </div>
  );
}
