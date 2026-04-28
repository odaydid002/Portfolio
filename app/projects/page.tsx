'use client'

import { arbtg, arbty, grid, image1, image2, image3, image4, mockup, pagination, section, vscode } from '@/constants/images'
import Image from 'next/image'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import Skill from '@/components/container/Skill';
import { copy } from '@/constants/logo';
import Project from '@/components/container/Project';
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

  const ct1 = useRef(null);
  const ct2 = useRef(null);
  const ct3 = useRef(null);
  const ct4 = useRef(null);
  const ct5 = useRef(null);
  const ct6 = useRef(null);

  const sk1 = useRef<HTMLDivElement | null>(null);
  const sk2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sk1.current) return;

    gsap.to(sk1.current, {
      scrollTop: sk1.current.scrollHeight,
      ease: "none",
      scrollTrigger: {
        trigger: sk1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    if (!sk2.current) return;

    gsap.fromTo(
      sk2.current,
      {
        scrollTop: sk2.current.scrollHeight,
      },
      {
        scrollTop: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sk2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

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
      }),
      gsap.set([ct1.current, ct2.current, ct3.current, ct4.current, ct5.current, ct6.current], {y: 50, opacity: 0})
      gsap.to([ct1.current, ct2.current, ct3.current, ct4.current, ct5.current, ct6.current], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          start: "bottom center",
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
          <h3 className='font-extrabold text-3xl lg:text-5xl flex flex-col gap-2 max-w-3/4 lg:max-w-fit'>
            <span ref={title1}>Transforming Concepts into</span>
            <span ref={title2}>Seamless <span className='text-primary'> User Experiences</span></span>
          </h3>
          <p className='text-[0.7rem] lg:text-[0.8rem] font-extralight opacity-60 max-w-3/4' ref={para2}>Hi! I&apos;m <strong>Oudai Oulhadj</strong>, a Fullstack Developer based in Algeria 🇩🇿</p>
          <button ref={bt1} className='text-sm lg:text-[1rem] px-10 py-2 dark:bg-gray-700/10 bg-gray-800/15 rounded-xl cursor-pointer active:scale-95 hover:opacity-60 ease-in-out duration-500'>See my work &#8599;</button>
        </div>
      </div>
      <div className="lg:w-3/4 lg:px-0 px-8 mx-auto flex flex-wrap flex-row lg:grid lg:grid-cols-1 lg:grid-rows-2 gap-4 py-8" ref={sec2}>
        <div className='flex flex-col lg:grid lg:grid-cols-[1fr_0.7fr] lg:grid-rows-1 gap-4 w-full lg:h-[400px]'>
          <div className='border-2 border-gray-500/10 rounded-lg min-w-[260px] min-h-[260px] relative overflow-hidden' ref={ct1}>
            <Image src={arbtg} alt='section' className='absolute z-1 top-5 left-5'/>
            <Image src={arbty} alt='section' className='absolute z-1 bottom-5 right-5'/>
            <Image src={mockup} alt='section' className='absolute z-0'/>
            <div className="absolute lg:bottom-10 lg:left-10 bottom-5 left-5">
              <h3 className='text-[0.9rem] lg:text-lg flex flex-col font-bold'>
                <span>I prioritize client</span>
                <span>collaboration, fostering</span>
                <span>open communication</span>
              </h3>
            </div>
          </div>
          <div className='flex flex-wrap flex-row lg:grid lg:grid-cols-1 lg:grid-rows-2 gap-4'>
            <div className='border-2 border-gray-500/10 rounded-lg flex-1 min-w-[200px] min-h-[114px] relative overflow-hidden' ref={ct2}>
              <Image src={pagination} alt='Word Map' className='absolute z-0 bottom-0'/>
              <div className="absolute bg-secondary rounded-full w-30 h-30 -top-5 -left-1/12 rotate-45 blur-2xl opacity-20 z-0"></div>
              <div className="absolute top-5 left-5 lg:left-10">
                <h3 className='text-sm lg:text-lg flex flex-col font-bold'>
                  <span>I’m very flexible with time</span>
                  <span>zone communications</span>
                </h3>
              </div>
            </div>
            <div className='border-2 border-gray-500/10 rounded-lg bg-gray-500/10 flex-1 min-w-[200px] min-h-[114px] lg:max-h-fit max-h-[120px] overflow-hidden flex flex-row gap-4 relative pr-4' ref={ct3}>
              <div className="absolute bg-black rounded-full w-30 h-30 top-0 right-1/12 rotate-45 blur-2xl opacity-50 z-0"></div>
              <div className="w-[32%]">
              </div>
              <div className="flex flex-col absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <p className='text-[0.5rem] lg:text-[0.7rem] opacity-50'>I constantly try to improve</p>
                <h3 className='text-lg lg:text-2xl font-bold'>My tech stack</h3>
              </div>
              <div ref={sk1} className="flex flex-col flex-1 h-full overflow-y-auto gap-4 hide-scrollbar pt-4">
                <Skill skill='ReactJS'/>
                <Skill skill='Express'/>
                <Skill skill='Typescript'/>
                <Skill skill='React Native'/>
                <Skill skill='Flutter'/>
                <Skill skill='Jersy'/>
                <Skill skill='Django'/>
                <Skill skill='Flusk'/>
                <div className="py-2"></div>
              </div>
              <div ref={sk2} className="flex flex-col flex-1 h-full overflow-y-auto gap-4 hide-scrollbar">
                <Skill skill='Php'/>
                <Skill skill='NestJS'/>
                <Skill skill='Restfull'/>
                <Skill skill='Laravel'/>
                <Skill skill='Postgresql'/>
                <Skill skill='MongoDB'/>
                <Skill skill='MySQL'/>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-[0.5fr_1fr] lg:grid-rows-1 gap-4 w-full'>
          <div className='flex flex-wrap flex-row lg:grid lg:grid-cols-1 lg:grid-rows-2 gap-4'>
            <div className="border-2 border-gray-300/10 rounded-lg bg-gray-600/10 flex-1 min-w-[200px] min-h-[114px] relative overflow-hidden" ref={ct4}>
              <Image src={grid} alt='section' className='absolute z-0'/>
              <Image src={section} alt='section' className='absolute z-10 lg:right-5 lg:-bottom-1/4 -bottom-3/4 right-0'/>
              <div className="absolute bg-primary rounded-full w-30 h-30 -top-5 right-1/12 rotate-45 blur-2xl opacity-20 z-0"></div>
              <div className="absolute top-5 left-5 lg:left-10">
                <h3 className='text-sm lg:text-lg flex flex-col font-bold'>
                  <span>Tech enthusiast with a</span>
                  <span>passion for development.</span>
                </h3>
              </div>
            </div>
            <div className="border-2 border-gray-500/10 rounded-lg flex-1 min-w-[200px] min-h-[114px] relative bg-linear-to-tr from-primary/20 to-black/15 overflow-hidden" ref={ct5}>
              <Image src={grid} alt='section' className='absolute z-0'/>
              <div className="absolute bg-primary rounded-full w-30 h-30 top-1/2 left-1/12 rotate-45 blur-2xl opacity-50 z-10"></div>
              <div className="flex flex-col absolute top-2/12 lg:top-3/12 z-10 w-full text-center">
                <h3 className='text-[0.8rem] lg:text-lg font-bold flex flex-col'>
                  <span>Do you want to start</span>
                  <span>a project together?</span>
                </h3>
                <button className='bg-gray-800/50 py-1.5 lg:py-2 px-3 lg:px-6 self-center w-fit rounded mt-2 cursor-pointer lg:mt-3 flex flex-row gap-2 hover:opacity-50'>
                  <Image src={copy} alt='Copy' className='w-2 lg:w-3'/>
                  <p className='text-[0.5rem] lg:text-[0.7rem] text-white'>Copy my email</p>
                </button>
              </div>
            </div>
          </div> 
          <div className="border-2 border-gray-500/10 rounded-lg min-w-[260px] min-h-[260px] relative overflow-hidden" ref={ct6}>
            <Image src={grid} alt='section' className='absolute z-0 -top-10'/>
            <Image src={vscode} alt='snapshot' className='absolute z-0 opacity-40 w-150 -right-1/4 top-2/12'/>
            <div className="flex flex-col absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <p className='text-[0.6rem] lg:text-md opacity-50'>The Inside Scoop</p>
              <h3 className='text-lg lg:text-3xl font-bold flex flex-col'>
                <span>Focused on writing</span>
                <span>clean, well-structured</span>
                <span>code.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-8" ref={sec3}>
        <h1 className='text-3xl font-black text-center w-full mb-8'>Recent projects <span className='text-primary'>showcase</span></h1>
        <div className="w-full flex flex-row justify-center flex-wrap gap-8 py-8">
          <Project 
            title='3D Solar System Planets to Explore'
            description='Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.'
            imageSrc={image1}
            stack={["next", "tailwind", "typescript", "threejs"]}
          />
          <Project 
            title='Yoom - Video Conferencing App'
            description='Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.'
            imageSrc={image2}
            stack={["next", "tailwind", "typescript"]}
          />
          <Project 
            title='AI Image SaaS - Canva Application'
            description='A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.'
            imageSrc={image3}
            stack={["react", "tailwind", "typescript", "threejs"]}
          />
          <Project 
            title='Animated Apple Iphone 3D Website'
            description='Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.'
            imageSrc={image4}
            stack={["next", "tailwind", "typescript", "threejs", "gsap"]}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects