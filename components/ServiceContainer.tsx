import Image from 'next/image'
import { forwardRef } from 'react'

interface prps {
    className?: string
    color?: string
    title?: string
    description?: string
    logo?:any
}

const ServiceContainer = forwardRef<HTMLDivElement, prps>(
  ({ className = "", color = "#000", title = "", description = "", logo = "" }, ref) => {
    return (
    <div ref={ref} className={`${className} flex flex-col items-center gap-3`}>
        <div className="flex items-center justify-center w-15 h-15 rounded-full" style={{backgroundColor: `color-mix(in srgb, ${color} 15%, transparent 50%`}}>
            <Image src={logo} alt={title} />
        </div>
        <h3 className='text-white text-lg font-bold'>{title}</h3>
        <p className='text-white opacity-80 text-sm lg:w-1/2 w-2/3'>{description}</p>
    </div>
  )
})

export default ServiceContainer