"use client";

import { facebook, instagram, linkedin, telegram } from "@/constants/logo";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './styles/navbar.module.css'
import { useGSAP } from "@gsap/react";
import Rect from "@/components/svg/Rect";
import Shape1 from "@/components/svg/Shape1";
import Shape2 from "@/components/svg/Shape2";
import Shape3 from "@/components/svg/Shape3";
import Shape4 from "@/components/svg/Shape4";
import Shape5 from "@/components/svg/Shape5";
import Image from "next/image";
import { oday } from "@/constants/images";

gsap.registerPlugin(ScrollTrigger);

export const dynamic = 'force-dynamic'

export default function Home() {

  return (
    <>
      <div className="flex flex-row items-center justify-center w-full flex-wrap">
        <div className="flex-1 h-dvh pt-45 pl-8 max-w-3/6">
          <h1 className="text-white font-extrabold text-6xl flex flex-col gap-2">
            <span>FULL</span>
            <span>STACK</span>
            <span>CODER</span>
          </h1>
          <p className="mt-20 max-w-4/6">A Full-Stack Software Engineer and UI/UX Designer, creating modern, user-friendly web and mobile applications that are both functional and visually appealing. I turn ideas into seamless digital experiences from concept to deployment.</p>
        </div>
        <div className="flex-1 h-dvh relative min-w-150 max-w-3/6">
          <Shape2 className="absolute top-55 right-35"/>
          <Rect className="absolute top-65 right-30"/>
          {/*
            <Image src={oday} alt="oday" width={470} className="absolute top-23 right-15"/>
          */}
          <Shape3 className="absolute top-40 left-35"/>
          <Shape4 className="absolute top-35 right-20"/>
          <Shape1 className="absolute bottom-15 left-20"/>
          <Shape5 className="absolute bottom-10 right-20"/>
        </div>
      </div>
    </>
  );
}
