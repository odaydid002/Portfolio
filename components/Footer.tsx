import { logo } from '@/constants/images'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between py-2 px-4 w-full z-50 mt-8 bg-background hidden4phone">
        {/*
        */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt='logo' width={35}/>
          <h1 className='cursor-default'><span className='text-md font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        </div>
        <ul className={`flex items-center justify-center gap-4 `}>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-[0.7rem]'><Link href="/">Support</Link></li>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-[0.7rem]'><Link href="/services">Privacy Policy</Link></li>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-[0.7rem]'><Link href="/contact">Terms and Conditions</Link></li>
        </ul>
        <p className='text-[0.7rem] opacity-40 cursor-default'>&copy; 2022 Oday-dev, All Rights Reserved</p>
    </div>
  )
}


export default Footer