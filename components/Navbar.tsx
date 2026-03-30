'use client'

import styles from "./styles/navbar.module.css"
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/constants/logo";

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className='flex w-full items-center justify-between px-8 lg:px-12 pt-8 absolute text-white z-50'>
        <h1 className='cursor-default'><span className='text-xl font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        <ul className={`hidden4phone flex items-center justify-center gap-8 font-semibold ${styles.navList}`}>
            <li onClick={()=>{setCurrentPage("home")}} className={currentPage == "home"?styles.navSelected:""}><Link href="/">Home</Link></li>
            <li onClick={()=>{setCurrentPage("services")}} className={currentPage == "services"?styles.navSelected:""}><Link href="/services">Services</Link></li>
            <li onClick={()=>{setCurrentPage("contact")}} className={currentPage == "contact"?styles.navSelected:""}><Link href="/contact">Contact</Link></li>
            <li onClick={()=>{setCurrentPage("about")}} className={currentPage == "about"?styles.navSelected:""}><Link href="/about">About</Link></li>
        </ul>
        <button className='hidden4phone flex flex-row items-center justify-center gap-2 py-2 px-10 border-1 border-white rounded-lg cursor-pointer'>
            <p className='text-sm font-bold text-white'>Hire me</p> 
        </button>
        <Image className="hidden4pc" src={menu} alt="menu-icon" />
    </div>
  )
}

export default Navbar