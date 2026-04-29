import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import { forwardRef } from "react";
import { ReactElement } from "react"

import {react, angular, html, css, node, mysql, postgresql, vue, python, mongo, laravel, next, tailwind, graphql, java, flutter, typescript, js, flask, redis, gsap, threejs, docker} from '@/constants/logo'

const prgIcons = {
    "react" : react,
    "angular" : angular,
    "html" : html,
    "css" : css,
    "node" : node,
    "mysql" : mysql,
    "postgresql" : postgresql,
    "vue" : vue,
    "python" : python,
    "mongo" : mongo,
    "laravel" : laravel,
    "next" : next,
    "tailwind" : tailwind,
    "graphql" : graphql,
    "java" : java,
    "flutter" : flutter,
    "typescript" : typescript,
    "js" : js,
    "flask" : flask,
    "redis" : redis,
    "gsap" : gsap,
    "threejs" : threejs,
    "docker" : docker
}

type StackKey = keyof typeof prgIcons;

interface projectPrps{
    title?: string;
    description?: string;
    link?: string;
    imageSrc: string | StaticImport;
    className?: string;
    stack?: StackKey[];
    onClick?: ()=>{}
}

const Project = forwardRef<HTMLDivElement, projectPrps>(
  ({ title= "", description="", link="", imageSrc="", stack=[], className="", onClick = ()=>{}}, ref) => {
    return (
        <div className={`${className} p-4 flex flex-col gap-4 border-2 border-gray-500/10 rounded-3xl dark:bg-gray-500/10 bg-gray-900 w-3/12 min-w-[300px]`} ref={ref}>
            <div className="lg:h-[200px] h-[150px] overflow-hidden rounded-lg bg-linear-to-tr from-secondary/20 to-gray-900/50 dark:from-secondary/20 dark:to-black/15 relative">
                <Image src={imageSrc} alt="Project Image" className="w-4/5 absolute bottom-0 left-1/2 -translate-x-1/2"/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <h3 className="font-bold text-lg cursor-pointer hover:opacity-70 text-white" onClick={onClick}>{title}</h3>
                <p className="text-[0.7rem] opacity-60 text-white">{description}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row -space-x-2.5">
                    {stack.map((icn, index) => (
                        <div key={index} className="rounded-full flex items-center justify-center border-2 border-gray-500/10 w-8 h-8 bg-gray-800 dark:bg-[#0a0a0a]">
                            <Image key={index} src={prgIcons[icn]} alt="Icon" className="w-1/2" />
                        </div>
                    ))}
                </div>
                <a className="text-secondary text-sm font-light hover:opacity-80 cursor-pointer" href={link} target="_blank">Check Live Site &#8599;</a>
            </div>
        </div>
    );
  }
);

Project.displayName = "Project";

export default Project;