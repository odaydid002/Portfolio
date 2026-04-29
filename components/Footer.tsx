import { logo } from '@/constants/images'
import { facebook, instagram, linkedin } from '@/constants/logo'
import Image from 'next/image'
import Link from 'next/link'
import LogoFacebook from './svg/logo/LogoFacebook'
import LogoInstagram from './svg/logo/LogoInstagram'
import LogoLinkedIn from './svg/logo/LogoLinkedin'
import LogoGithub from './svg/logo/LogoGithub'

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between py-2 px-4 w-full z-50 mt-8 bg-background">
        {/*
        */}
        <div className="flex items-center gap-2 hidden4phone">
          <Image src={logo} alt='logo' width={35}/>
          <h1 className='cursor-default'><span className='text-md font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        </div>
        <p className='text-[0.7rem] opacity-40 cursor-default'>&copy; 2022 Oday-dev, All Rights Reserved</p>
        <ul className={`flex items-center justify-center gap-4 `}>
           <a title='Facebook' href='https://facebook.com/oulhadjoday' target='_blank'><LogoFacebook width={8} className='hover:opacity-100 opacity-60 ease-in-out duration-500 cursor-pointer'/></a>
           <a title='Instagram' href='https://facebook.com/oulhadjoday' target='_blank'><LogoInstagram width={12} className='hover:opacity-100 opacity-60 ease-in-out duration-500 cursor-pointer'/></a>
           <a title='LinkedIn' href='https://www.linkedin.com/in/oudai-oulhadj' target='_blank'><LogoLinkedIn width={12} className='hover:opacity-100 opacity-60 ease-in-out duration-500 cursor-pointer'/></a>
           <a title='Github' href='https://github.com/odaydid002' target='_blank'><LogoGithub width={12} className='hover:opacity-100 opacity-60 ease-in-out duration-500 cursor-pointer'/></a>
        </ul>
    </div>
  )
}


export default Footer