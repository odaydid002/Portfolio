import { ReactNode } from 'react';
import styles from './glass.module.css'

interface prps {
    className?: string
    children?: ReactNode
    shine?: boolean
    tint?: boolean
    rounded?: number
}

const Glass = ({className = "", children, tint = true, shine = true, rounded = 25}:prps) => {
  return (
    <>
        <div className={`${className} ${styles.glass} rounded-[${rounded}px]`}>
            <div className={`${styles.effect} rounded-[${rounded}px]`}></div>
            {tint && (
                <div className={`${styles.tint} rounded-[${rounded}px]`}></div>
            )}
            {shine && (
                <div className={`${styles.shine} rounded-[${rounded}px]`}></div>
            )}
            {children}
        </div>
        <svg className="hidden">
            <filter
                id="glass-distortion"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                filterUnits="objectBoundingBox"
            >
                <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.01"
                numOctaves="1"
                seed="5"
                result="turbulence"
                />
                <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                </feComponentTransfer>

                <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

                <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lightingColor="white"
                result="specLight"
                >
                <fePointLight x="-200" y="-200" z="300" />
                </feSpecularLighting>

                <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
                />

                <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="150"
                xChannelSelector="R"
                yChannelSelector="G"
                />
            </filter>
        </svg>
    </>
    
  )
}

export default Glass