'use client';

import React from 'react';
import { ArrowRight, Calculator, Sparkles, ShieldCheck } from 'lucide-react';

interface HealthCheckCTAProps {
  onOpenHealthCheck?: () => void;
}

export function HealthCheckCTA({ onOpenHealthCheck }: HealthCheckCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--mineral)] border-b border-[var(--border)] relative overflow-hidden">
      
      {/* Background Animated SVG Financial Constellation Path */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
        <svg className="w-full max-w-4xl h-64" viewBox="0 0 800 200">
          <path
            d="M 100 100 Q 250 40 400 100 T 700 100"
            fill="none"
            stroke="#7CFF9B"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle cx="100" cy="100" r="5" fill="#0B2A20" stroke="#7CFF9B" strokeWidth="2" />
          <circle cx="300" cy="70" r="4" fill="#0B2A20" stroke="#7CFF9B" strokeWidth="2" />
          <circle cx="500" cy="130" r="4" fill="#0B2A20" stroke="#7CFF9B" strokeWidth="2" />
          <circle cx="700" cy="100" r="6" fill="#7CFF9B" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--forest)] font-bold">
                FINANCIAL HEALTH CHECK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight leading-[1.12]">
              Start with one
              <br />
              money decision.
            </h2>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              See where you stand today, understand the underlying numbers, and get an unclouded, mathematical view of what comes next.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 relative z-10">
            <button
              type="button"
              onClick={onOpenHealthCheck}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(11,42,32,0.18)] group"
            >
              <span>Get a free financial health check</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#calculators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-[var(--ink)] bg-[var(--surface)] hover:bg-[var(--surface-2)] border border-[var(--border)] transition-all"
            >
              <Calculator size={16} className="text-[var(--forest)]" />
              <span>Explore calculators</span>
            </a>
          </div>

          {/* Footnote statement */}
          <div className="pt-2 text-xs font-mono text-[var(--muted)] relative z-10 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-[var(--positive)]" />
            <span>Free · Takes about 2 minutes · No sign-up required</span>
          </div>

        </div>

      </div>
    </section>
  );
}
