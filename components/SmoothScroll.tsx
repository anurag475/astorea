"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Custom Bezier Easing Function (Spline-like)
        // Similar to CSS ease-out-quart or a custom Apple-style ease: [0.33, 1, 0.68, 1]
        // This function approximates a cubic-bezier(0.33, 1, 0.68, 1) curve for fluid momentum.
        const easeOutQuart = (x: number): number => {
            return 1 - Math.pow(1 - x, 4);
        };

        const lenis = new Lenis({
            duration: 1.5, // Increased duration for a more luxurious feel
            easing: easeOutQuart,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2, // Slightly increased multiplier for responsiveness
            touchMultiplier: 2,
        });

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame to GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's lag smoothing to prevent stuttering
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
}
