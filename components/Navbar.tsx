'use client'

import Image from 'next/image'
import { Tie } from "@/constants/logo"

const Navbar = () => {
  return (
    <div className='flex w-full items-center justify-between px-8 pt-8 absolute text-white z-50'>
        <h1><span className='font-bold text-lg'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        <ul className="flex items-center justify-center gap-8 font-medium">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <button className='flex flex-row items-center justify-center gap-2 py-2 px-4 bg-yellow-400 rounded-full'>
            <p className='text-md font-bold text-black'>Hire ME</p> 
            <Image src={Tie} alt="Tie" width={20} height={20} /> 
        </button>
    </div>
  )
}

export default Navbar