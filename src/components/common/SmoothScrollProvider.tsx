'use client';

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    // Track scroll progress for subtle right indicator
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Subtle Right-side Mint Vertical Scroll Progress Indicator (Desktop Only) */}
      <div 
        className="hidden lg:block fixed right-0 top-0 bottom-0 w-[2.5px] bg-[rgba(16,23,19,0.06)] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="w-full bg-[var(--mint)] transition-all duration-75"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {children}
    </>
  );
}
