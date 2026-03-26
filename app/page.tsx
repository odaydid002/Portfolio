import Image from "next/image";
import { oday } from "@/constants/images"
import { facebook, instagram, linkedin, telegram } from "@/constants/logo";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <div 
        className="flex my-2 rounded-2xl flex-col items-center overflow-hidden relative"
        style={{backgroundColor: '#5476CC', width: 'calc(100% - 1em)', height: 'calc(100vh - 1em)'}}
      >
        <Image src={oday} alt="Oudai" width={650} className="absolute bottom-0"/>
        <div className="absolute flex flex-col justify-around w-[300px] right-0 top-0 h-full ml-8">
          <div>
            <h2 className="font-black">FOLLOW ME</h2>
            <ul className="flex flex-row gap-4">
              <li className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={facebook} alt="f" width={15} height={15} /> 
              </li>
              <li className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={instagram} alt="instagram" width={15} height={15} /> 
              </li>
              <li className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={telegram} alt="telegram" width={15} height={15} /> 
              </li>
              <li className="mt-2 rounded-full p-1 border-2 flex items-center justify-center">
                 <Image src={linkedin} alt="in" width={15} height={15} /> 
              </li>
            </ul>
            <p className="font-stretch-75% pt-2">I develop production-ready full-stack applications, including web platforms and mobile apps for both Android and iOS.</p>
          </div>
          <h1 className="flex flex-col text-6xl font-black gap-2">
            <span>FULL</span>
            <span>STACK</span>
            <span>CODER</span>
          </h1>
        </div>
        <div className="absolute flex flex-col justify-around w-[300px] left-0 top-0 h-full ml-8">
          <h1 className="flex flex-col text-6xl font-black gap-2">
            <span>UI UX</span>
            <span>DESIGNER</span>
          </h1>
          <div>
            <h2 className="text-xl font-bold">HI, I AM OUDAI</h2>
            <p className="font-stretch-75%">I design intuitive interfaces and develop user-centric solutions, blending creativity and technical expertise to craft seamless digital experiences</p>
          </div>
        </div>
      </div>
    </>
  );
}
