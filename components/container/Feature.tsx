import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface featPrps{
    logo: string | StaticImport
    title: string
    description: string
    className?: string
    mode?: keyof {"solid":"solid", "dotted":"dotted"}
    fill?: boolean
}

const Feature = ({
    className,
    logo,
    title,
    description,
    mode = 'solid',
    fill = true

}:featPrps) => {
  return (
    <div className={`${className} flex items-center gap-4 w-full`}>
        <div className={`flex items-center justify-center rounded-full w-10 h-10 border-2 border-primary/20 ${fill?'bg-primary/10':'bg-transparent'} ${mode === "solid"?"border-solid":"border-dotted"}`}>
            <Image src={logo} alt="Feature" width={20}/>
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="font-bold text-sm">{title}</h3>
            <p className="text-[0.6rem] opacity-50">{description}</p>
        </div>
    </div>
  )
}

export default Feature