'use client'

import styles from "./styles/navbar.module.css"
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/constants/logo";
import Glass from "./container/Glass";
import MoonIcon from "./svg/MoonIcon";
import SunIcon from "./svg/SunIcon";

import gsap from "gsap";
import { useEffect, useRef } from 'react';


import { useTheme } from "next-themes";

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState('home');
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? (resolvedTheme || theme || "light") : "light";
  const isDark = currentTheme === "dark";

  const btTheme = useRef(null);
  const [rotated, setRotated] = useState(false);

  const rotateAN = () =>{
    gsap.to(btTheme.current, {
      rotation: rotated ? 0 : 360,
      duration: 0.6,
      ease: "power2.inOut",
    });
    setRotated(!rotated)
  }

  return (
    <div className='flex w-11/12 mt-4 items-center justify-between px-2 lg:px-12 py-2 z-99'>
        <div className="flex flex-row items-center justify-center gap-4">
          <h1 className='cursor-default text-foreground'><span className='text-lg font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
          <div className="flex w-5 items-center justify-center cursor-pointer hover:opacity-80" onClick={()=>{rotateAN(); setTheme(isDark ? "light" : "dark")}} ref={btTheme}>
            <MoonIcon width={22} className={isDark ? "" : "hidden"}/>
            <SunIcon width={25} className={isDark ? "hidden" : ""}/>
          </div>
        </div>
        <div className="fixed z-999 left-1/2 -translate-x-1/2 hidden4phone">
          <Glass className="relative px-12 py-3" rounded={16}>
            <ul className={`hidden4phone flex items-center justify-center gap-8 font-extralight ${styles.navList}`}>
                <li onClick={()=>{setCurrentPage("home")}} className={currentPage == "home"?styles.navSelected:""}><Link href="/">Home</Link></li>
                <li onClick={()=>{setCurrentPage("Career")}} className={currentPage == "Career"?styles.navSelected:""}><Link href="/">Career</Link></li>
                <li onClick={()=>{setCurrentPage("projects")}} className={currentPage == "projects"?styles.navSelected:""}><Link href="/">Projects</Link></li>
                <li onClick={()=>{setCurrentPage("contact")}} className={currentPage == "contact"?styles.navSelected:""}><Link href="/">Contact</Link></li>
            </ul>
          </Glass>
        </div>
          <a href="/assets/CV_en.pdf" download className='hidden4phone flex flex-row items-center justify-center gap-2 py-2 px-10 border-2 rounded-lg cursor-pointer'>
              <p className='text-sm font-bold'>Download CV</p> 
          </a>
        <Image className="hidden4pc" src={menu} alt="menu-icon" />
    </div>
  )
}

export default Navbar