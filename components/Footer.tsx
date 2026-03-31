import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4 w-full z-50 mt-8 bg-background hidden4phone">
        <h1 className='cursor-default'><span className='text-lg font-extrabold'>ODAY-DEV</span><span className='text-sm'>.app</span></h1>
        <ul className={`flex items-center justify-center gap-4 `}>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-sm'><Link href="/">Support</Link></li>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-sm'><Link href="/services">Privacy Policy</Link></li>
            <li className='cursor-pointer hover:opacity-50 opacity-80 duration-300 ease-in-out text-sm'><Link href="/contact">Terms and Conditions</Link></li>
        </ul>
        <p className='text-sm opacity-50 cursor-default'>&copy; 2022 Oday-dev, All Rights Reserved</p>
    </div>
  )
}


export default Footer