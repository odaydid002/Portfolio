import Feature from "@/components/container/Feature"
import AnymosIcon from "@/components/svg/AnymosIcon"
import DatabaseIcon from "@/components/svg/DatabaseIcon"
import JavaIcon from "@/components/svg/JavaIcon"
import ProgrammingIcon from "@/components/svg/ProgrammingIcon"
import { beam } from "@/constants/images"
import { chield, lightning, mail, star } from "@/constants/logo"
import Image from "next/image"

const Contact = () => {
  return (
    <div className="flex flex-1 h-full w-full items-center justify-center lg:overflow-visible overflow-hidden lg:pt-4 pt-16">
      <div className="flex h-full flex-wrap justify-center w-full px-8 lg:px-0 lg:w-3/4 gap-4">
        <div className="flex flex-col gap-10 self-center relative">
          <ProgrammingIcon className="absolute top-5 right-20 w-12 h-auto rotate-12"/>
          <JavaIcon className="absolute -bottom-12 -left-20 w-10 h-auto -rotate-12"/>
          <DatabaseIcon className="absolute -bottom-10 right-0 w-10 h-auto -rotate-6"/>
          <div 
            className="bg-primary rounded-full w-30 h-50 z-0 absolute anime-fade -top-10 -left-10" 
            style={{
              filter:"blur(90px)",
              transform: "rotateZ(-50deg)"
            }}
          ></div>
          <div 
            className="bg-secondary/20 rounded-full w-50 h-70 z-0 absolute -bottom-15 -right-5" 
            style={{
              filter:"blur(90px)",
              transform: "rotateZ(50deg)"
            }}
          ></div>
          <div className="flex items-center gap-2 self-center lg:self-auto">
            <div className="rounded-full animate-pulse p-1 bg-primary/10 flex items-center justify-center">
              <div className="rounded-full w-1 h-1 bg-primary"></div>
            </div>
            <p className="text-[0.65rem] font-bold text-primary">LET'S CONNECT</p>
          </div>
          <h3 className="flex flex-col font-bold text-5xl text-center lg:text-left">
            <span className="z-20">Let's Build</span>
            <span className="z-0">Somthing</span>
            <span className="z-20">Amazing <span className="text-secondary">Together</span></span>
          </h3>
          <p className="flex flex-col text-sm opacity-70 w-full lg:w-3/4 text-center lg:text-left z-20">
            <span>Have a project in mind or want to discuss potential opportunities? i'd love to hear from you.</span>
            <span>Let's create somthing excepitional</span>
          </p>
          <div className="flex flex-col gap-4 w-fit self-center lg:self-auto">
            <Feature logo={lightning} title="Fast Response" description="I typically respond within 24 hours"/>
            <Feature logo={star} title="Project Focused" description="Clear communication & goal-oriented" mode="dotted" fill={false} />
            <Feature logo={chield} title="Quality Essurance" description="High-quality code & modern solutions"/>
          </div>
        </div>
        <div className="flex flex-1 border-2 mt-16 lg:mt-0 border-primary/20 dark:shadow-[5px_-30px_80px_-25px__#009B77] shadow-[10px_-30px_150px_-50px__#009B77] relative rounded-2xl z-10 min-w-75 max-w-150">
          <Image src={beam} alt="" className="absolute -top-368 z-0 opacity-40 dark:opacity-100"/>
          <div 
            className="bg-white/30 rounded-full w-30 h-50 z-20 absolute -bottom-5 left-0" 
            style={{
              filter:"blur(100px)",
              transform: "rotateZ(-50deg)"
            }}
          ></div>
          <div 
            className="bg-primary/50 rounded-full w-30 h-50 z-20 absolute -top-5 right-0" 
            style={{
              filter:"blur(100px)",
              transform: "rotateZ(-50deg)"
            }}
          ></div>
          <div className="flex flex-col flex-1 w-full h-full bg-(--background) z-10 rounded-2xl p-4 lg:p-8 gap-4">
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold lg:text-lg text-sm">Send Me a Message</h3>
                <p className="text-[0.6rem] lg:text-sm opacity-60">Fill out the form below and i'll get back to you soon.</p>
              </div>
              <div className="flex items-center justify-center rounded-full w-10 h-10 border-2 border-primary/20 bg-primary/10 ">
                  <Image src={mail} alt="Feature" width={20}/>
              </div>
            </div>
            <div className="flex flex-row w-full gap-4 lg:flex-nowrap items-center justify-between">
              <div className="flex flex-col gap-2 min-w-25 w-full">
                <h3 className="font-bold text-[0.7rem] opacity-70">First Name</h3>
                <input type="text" className="rounded-lg px-4 py-2 flex flex-1 bg-gray-400/5 border-2 border-gray-700/10"/>
              </div>
              <div className="flex flex-col gap-2 min-w-25 w-full">
                <h3 className="font-bold text-[0.7rem] opacity-70">Last Name</h3>
                <input type="text" className="rounded-lg px-4 py-2 flex flex-1 bg-gray-400/5 border-2 border-gray-700/10"/>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold text-[0.7rem] opacity-70">Email Address</h3>
              <input type="text" className="rounded-lg px-4 py-2 flex flex-1 bg-gray-400/5 border-2 border-gray-700/10"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold text-[0.7rem] opacity-70">Message Type</h3>
              <select className="selectop text-[0.8rem] rounded-lg px-4 py-2.5 flex flex-1 bg-gray-400/5 border-2 border-gray-700/10 focus:outline-0 active:outline-0">
                <option value="conversational">Conversational</option>
                <option value="promotional">Promotional</option>
                <option value="feedback">Feedback</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-bold text-[0.7rem] opacity-70">Your Message</h3>
              <textarea className="rounded-lg px-4 py-2 flex flex-1 bg-gray-400/5 border-2 border-gray-700/10 resize-none" rows={5}></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact