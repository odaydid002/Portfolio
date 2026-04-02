import Image from 'next/image'
import { forwardRef } from 'react'
import styles from '@/components/styles/effects.module.css'

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
        <div 
          className={`flex items-center justify-center relative w-15 h-15 rounded-full bg-[var(--b)] before:bg-[var(--c)] ${styles.glow}`} 
          style={{ "--c": color, "--b": `color-mix(in srgb, ${color} 15%, transparent 50%)` } as React.CSSProperties}
        >
            <Image src={logo} alt={title} />
        </div>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='opacity-80 text-sm lg:w-1/2 w-2/3'>{description}</p>
    </div>
  )
})

export default ServiceContainer