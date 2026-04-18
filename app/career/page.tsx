'use client'

import { grid } from '@/constants/images'
import Image from 'next/image'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Career = () => {

  const doc = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    });
    return () => ctx.revert();
  }, [])

  return (
    <div className='flex-1 w-full' ref={doc}>
    </div>
  )
}

export default Career