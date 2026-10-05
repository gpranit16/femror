'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import { FinancialSnapshot } from './FinancialSnapshot';

interface HeroProps {
  onOpenHealthCheck?: () => void;
}

export function Hero({ onOpenHealthCheck }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroProgress = Math.min(1, scrollY / 500);
  const headlineY = -heroProgress * 20;

  return (
    <section className="relative bg-[#0B2A20] text-[var(--white)] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Clean, subtle technical grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.06}px)`
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Column (6 cols on lg) */}
          <div 
            className="lg:col-span-6 xl:col-span-6 space-y-7 transition-transform duration-200"
            style={{ transform: `translateY(${headlineY}px)` }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] animate-pulse-subtle" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--mint-soft)] font-semibold">
                MONEY / MADE CLEAR
              </span>
            </div>

            {/* Line-by-Line Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold tracking-tight text-[var(--white)] leading-[1.08]">
              <span className="block">See your money clearly.</span>
              <span className="block text-[var(--mint)] mt-1.5">Then make it move.</span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="text-base sm:text-lg text-[var(--mineral)]/80 max-w-xl font-normal leading-relaxed">
              Understand where you stand, what your money is doing, and how every decision compounds across Indian equities, debt, tax, and life goals.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenHealthCheck}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-bold bg-[var(--mint)] text-[#0B2A20] hover:bg-[#92ffad] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(124,255,155,0.22)] group"
              >
                <span>Get a free financial health check</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="#calculators"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-[var(--white)] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.14)] border border-[rgba(255,255,255,0.14)] transition-all"
              >
                <Calculator size={16} className="text-[var(--mint-soft)]" />
                <span>Explore calculators</span>
              </a>
            </div>

            {/* Subtle Product Statement */}
            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-2 text-xs font-mono text-[var(--mineral)]/70 tracking-wide">
              <span>Understand</span>
              <span className="text-[var(--mint)]">·</span>
              <span>Plan</span>
              <span className="text-[var(--mint)]">·</span>
              <span>Invest</span>
              <span className="text-[var(--mint)]">·</span>
              <span>Grow</span>
            </div>
          </div>

          {/* Hero Right Column: Clean Financial Command Center Snapshot */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <FinancialSnapshot />
          </div>

        </div>
      </div>

      {/* Hero Continuity Data Line Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--mint)]/40 to-transparent" />
    </section>
  );
}
