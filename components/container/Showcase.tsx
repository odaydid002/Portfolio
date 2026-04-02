import Image from "next/image";
import { forwardRef } from "react";

interface prps {
    className?:string
    image?:any
}

const Showcase = forwardRef<HTMLDivElement, prps>(
    ({className = "", image}, ref) =>{
        return (
            <div className={`${className} bg-background p-4 z-10`} ref={ref}>
                <Image src={image} alt="showcase" className="rounded-xl"/>
            </div>
        )
})


export default Showcase