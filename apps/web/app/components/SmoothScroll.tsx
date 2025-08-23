"use client"
import {ReactLenis} from "lenis/react"

type Props={children:React.ReactNode};

export default function SmoothScroll({children}:Props){
    return(
        <ReactLenis
         root
         options={{
            lerp:0.08,
            duration:1.2,
            syncTouch:true,
            touchMultiplier:25,
            smoothWheel: true ,
            orientation:'vertical'
         }}
        >
            {children}
        </ReactLenis>
    )
}