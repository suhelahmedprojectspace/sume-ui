"use client"
import { ReactLenis } from "lenis/react"

type Props = { children: React.ReactNode };

export default function SmoothScroll({ children }: Props) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,                    // Perfect balance
                duration: 1.2,                // Industry standard
                easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
                syncTouch: true,
                syncTouchLerp: 0.1,
                touchInertiaMultiplier: 35,
                infinite: false,
                autoResize: true,
                prevent: (node) => node.classList.contains('lenis-prevent')
            }}
        >
            {children}
        </ReactLenis>
    )
}
