"use client"
import {ReactLenis} from "lenis/react"

type Props = {children: React.ReactNode};

export default function SmoothScroll({children}: Props) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.15,        // Increased for quicker response (was 0.08)
                duration: 0.8,     // Reduced for snappier feel (was 1.2)
                syncTouch: true,
                touchMultiplier: 2, // Much lower for normal touch (was 25)
                smoothWheel: true,
                orientation: 'vertical',
                infinite: false,
                wheelMultiplier: 1.2, // Slightly enhanced wheel sensitivity
                gestureOrientation: 'vertical'
            }}
        >
            {children}
        </ReactLenis>
    )
}
