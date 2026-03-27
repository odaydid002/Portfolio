"use client";

import Image from "next/image";
import { oday } from "@/constants/images"
import { facebook, instagram, linkedin, telegram } from "@/constants/logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const dynamic = 'force-dynamic'

export default function Home() {

  const picture = useRef(null);
  
  const section1 = useRef(null);
  
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const title4 = useRef(null);
  const title5 = useRef(null);

  const para1 = useRef(null);
  const para2 = useRef(null);
  const para3 = useRef(null);
  const para4 = useRef(null);
  
  const social1 = useRef(null);
  const social2 = useRef(null);
  const social3 = useRef(null);
  const social4 = useRef(null);

  useEffect(() => {
    const sec1 = section1.current;
    const pic = picture.current;

    const t1 = title1.current;
    const t2 = title2.current;
    const t3 = title3.current;
    const t4 = title4.current;
    const t5 = title5.current;

    const p1 = para1.current;
    const p2 = para2.current;
    const p3 = para3.current;
    const p4 = para4.current;

    const s1 = social1.current;
    const s2 = social2.current;
    const s3 = social3.current;
    const s4 = social4.current;

    const ctx = gsap.context(() => {
              gsap.set(pic, {y: 200, x:0, opacity:0, zIndex: 10})
              gsap.from(pic, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              }),
              gsap.set([s1, s2, s3, s4], {y: -100, x:0, zIndex: 10})
              gsap.from([s1, s2, s3, s4], {
                y: 0,
                duration: 1.5,
                stagger: 0.2,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              }),
              gsap.set([t1, t2, t3], {y: -100, x:0, zIndex: 10})
              gsap.from([t1, t2, t3], {
                y: 0,
                duration: 1.5,
                stagger: 0.2,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              }),
              gsap.set([t3, t4, t5], {y: -100, x:0, zIndex: 10})
              gsap.from([t3, t4, t5], {
                y: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              }),
              gsap.set([p2, p1], {x: 100, opacity: 0, zIndex: 10})
              gsap.from([p2, p1], {
                x: 0,
                duration: 1,
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              }),
              gsap.set([p3, p4], {x: -100, opacity: 0, zIndex: 10})
              gsap.from([p3, p4], {
                x: 0,
                duration: 0.5,
                opacity: 1,
                stagger: 0.1,
                scrollTrigger: {
                  start: "top top",
                  scrub: 1.5,
                  trigger: sec1,
                },
              })
          });
          return () => ctx.revert();
      }, []);

  return (
    <>
      <div
        ref={section1} 
        className="flex my-2 rounded-2xl flex-col items-center overflow-hidden relative"
        style={{backgroundColor: "#222", width: 'calc(100% - 1em)', height: 'calc(100vh - 1em)'}}
      >
        <Image src={oday} ref={picture} alt="Oudai" width={650} className="absolute bottom-0"/>
        <div className="absolute flex flex-col justify-around w-[300px] right-0 top-0 h-full ml-8">
          <div>
            <h2 ref={para3} className="font-black">FOLLOW ME</h2>
            <ul className="flex flex-row gap-4">
              <li ref={social1} className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={facebook} alt="f" width={15} height={15} /> 
              </li>
              <li ref={social2} className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={instagram} alt="instagram" width={15} height={15} /> 
              </li>
              <li ref={social3} className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={telegram} alt="telegram" width={15} height={15} /> 
              </li>
              <li ref={social4} className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={linkedin} alt="in" width={15} height={15} /> 
              </li>
            </ul>
            <p ref={para4} className="font-stretch-75% pt-2">I develop production-ready full-stack applications, including web platforms and mobile apps for both Android and iOS.</p>
          </div>
          <h1 className="flex flex-col text-6xl font-black gap-2">
            <span ref={title3}>FULL</span>
            <span ref={title4}>STACK</span>
            <span ref={title5}>CODER</span>
          </h1>
        </div>
        <div className="absolute flex flex-col justify-around w-[300px] left-0 top-0 h-full ml-8">
          <h1 className="flex flex-col text-6xl font-black gap-2">
            <span ref={title1}>UI UX</span>
            <span ref={title2}>DESIGNER</span>
          </h1>
          <div>
            <h2 ref={para1} className="text-xl font-bold">HI, I AM OUDAI</h2>
            <p ref={para2} className="font-stretch-75%">I design intuitive interfaces and develop user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences</p>
          </div>
        </div>
      </div>
      <div
        className="flex my-4 rounded-2xl flex-col items-center overflow-hidden relative"
        style={{width: 'calc(100% - 2em)', height: 'calc(100vh - 2em)'}}
      >

      </div>
    </>
  );
}
