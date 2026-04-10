'use client'

import styles from "./styles/navbar.module.css"
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/constants/logo";
import { logo } from "@/constants/images";
import Glass from "./container/Glass";

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className='flex w-11/12 mt-4 items-center justify-between px-2 lg:px-12 py-2 z-99'>
        <h1 className='cursor-default'><span className='text-lg font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        <div className="fixed z-999 left-1/2 -translate-x-1/2 hidden4phone">
          <Glass className="relative px-12 py-3 over hidden" rounded={25}>
            <ul className={`hidden4phone flex items-center justify-center gap-8 font-extralight ${styles.navList}`}>
                <li onClick={()=>{setCurrentPage("home")}} className={currentPage == "home"?styles.navSelected:""}><Link href="/">Home</Link></li>
                <li onClick={()=>{setCurrentPage("Career")}} className={currentPage == "Career"?styles.navSelected:""}><Link href="/">Career</Link></li>
                <li onClick={()=>{setCurrentPage("contact")}} className={currentPage == "contact"?styles.navSelected:""}><Link href="/">Contact</Link></li>
                <li onClick={()=>{setCurrentPage("about")}} className={currentPage == "about"?styles.navSelected:""}><Link href="/">About</Link></li>
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