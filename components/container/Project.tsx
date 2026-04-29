import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import { forwardRef } from "react";
import { ReactElement } from "react"

import {react, angular, html, css, node, mysql, postgresql, vue, python, mongo, laravel, next, tailwind, graphql, java, flutter, typescript, js, flask, redis, gsap, threejs, docker, ios, android} from '@/constants/logo'
import LogoGithub from "../svg/logo/LogoGithub";
import LogoFacebook from "../svg/logo/LogoFacebook";
import LogoFigma from "../svg/logo/LogoFigma";

const prgIcons = {
    "react" : react,
    "angular" : angular,
    "android" : android,
    "ios" : ios,
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
    github?: string;
    figma?: string;
    imageSrc: string | StaticImport;
    className?: string;
    stack?: StackKey[];
    onClick?: ()=>{}
}

const Project = forwardRef<HTMLDivElement, projectPrps>(
  ({ title= "", description="", link, github, figma, imageSrc="", stack=[], className="", onClick = ()=>{}}, ref) => {
    return (
        <div className={`${className} p-4 flex flex-col gap-4 border-2 border-gray-500/10 rounded-3xl dark:bg-gray-500/10 bg-black w-1/4 min-w-[300px] relative`} ref={ref}>
            <div className="lg:h-[190px] h-[150px] overflow-hidden rounded-lg bg-linear-to-tr from-secondary/10 to-primary/10 relative">
                <Image src={imageSrc} alt="Project Image" className="w-4/5 absolute bottom-0 left-1/2 -translate-x-1/2"/>
            </div>
            <div className="w-full flex flex-row gap-4 text-white">
                {
                    figma && (
                        <a className="cursor-pointer hover:opacity-70 opacity-100 flex flex-row items-center gap-2" href={figma} target="_blank" title="Figma Design Link">
                            <LogoFigma className="w-4"/>
                            <h3 className="text-[0.7rem]">Figma</h3>
                        </a>
                    )
                }
                {
                    github && (
                        <a className="cursor-pointer hover:opacity-70 flex flex-row items-center gap-2" href={github} target="_blank" title="Figma Design Link">
                            <LogoGithub className="w-4"/>
                            <h3 className="text-[0.7rem]">Github</h3>
                        </a>
                    )
                }
            </div>
            <div className="flex flex-col w-full gap-2">
                <a className="font-bold text-lg cursor-pointer hover:opacity-70 text-white" onClick={onClick}>{title}</a>
                <p className="text-[0.7rem] opacity-60 text-white">{description}</p>
            </div>
            <div className="flex flex-row items-center justify-between mt-auto">
                <div className="flex flex-row -space-x-2.5">
                    {stack.map((icn, index) => (
                        <div key={index} title={icn} className="rounded-full flex items-center justify-center border-2 border-gray-500/10 w-8 h-8 bg-gray-800 dark:bg-[#0a0a0a]">
                            <Image key={index} src={prgIcons[icn]} alt="Icon" className="w-2/3" />
                        </div>
                    ))}
                </div>
                {
                    link && (
                        <a className="text-secondary text-sm font-light hover:opacity-80 cursor-pointer" href={link} target="_blank">Check Live Site &#8599;</a>
                    )
                }
            </div>
        </div>
    );
  }
);

Project.displayName = "Project";

export default Project;