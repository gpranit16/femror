'use client';

import React, { useState } from 'react';
import { TrendingUp, Target, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MotionCard } from '../common/MotionCard';

interface FinancialSnapshotProps {
  onInteract?: () => void;
}

const timeSteps = [
  { label: 'Now', val: '₹53,00,000', raw: 53.0, growth: 'Starting Base' },
  { label: '2Y', val: '₹73,20,480', raw: 73.2, growth: '+38% Gain' },
  { label: '5Y', val: '₹1,14,62,340', raw: 114.6, growth: '+116% Gain' },
  { label: '10Y', val: '₹1,64,60,996', raw: 164.6, growth: '+211% Gain' },
  { label: '15Y', val: '₹3,42,89,450', raw: 342.8, growth: '+546% Gain' },
];

export function FinancialSnapshot({ onInteract }: FinancialSnapshotProps) {
  const [activeStep, setActiveStep] = useState(3); // Default 10Y
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const current = timeSteps[activeStep];

  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:ml-auto select-none">
      {/* Main Command Center Panel Wrapped in Specular MotionCard */}
      <MotionCard
        glowColor="rgba(124, 255, 155, 0.12)"
        className="bg-[#0e3529] border border-[rgba(255,255,255,0.16)] rounded-3xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(7,29,22,0.6)]"
      >
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Panel Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse-subtle" />
            <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--mint-soft)] font-semibold">
              MONEY SNAPSHOT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.08)] text-[var(--mineral)] border border-[rgba(255,255,255,0.06)]">
              OCT 2026
            </span>
            <span className="text-[10px] font-mono text-[var(--mineral)]/50 hidden sm:inline">
              Illustrative
            </span>
          </div>
        </div>

        {/* Main Wealth Metric Block */}
        <div className="pt-5 pb-4 relative z-10">
          <div className="text-[11px] font-mono text-[rgba(255,255,255,0.6)] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{activeStep === 0 ? 'TOTAL WEALTH TODAY' : `PROJECTED IN ${current.label}`}</span>
            <span className="text-[10px] text-[var(--mint-soft)] font-mono">12% assumed CAGR</span>
          </div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <div className="font-mono text-3xl sm:text-4xl lg:text-[42px] font-bold text-[var(--white)] tracking-tight tabular-nums transition-all duration-200">
              {current.val}
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-mono text-[var(--mint)] bg-[rgba(124,255,155,0.12)] px-2 py-1 rounded border border-[rgba(124,255,155,0.25)]">
              <TrendingUp size={12} />
              <span>{current.growth}</span>
            </div>
          </div>
          <div className="text-xs text-[rgba(255,255,255,0.65)] font-mono mt-1">
            {activeStep === 3 ? '+₹1,11,60,996 total projected gain (211%)' : 'Calculated across equity, fixed buffers & SIPs'}
          </div>
        </div>

        {/* Wealth Trajectory Terminal Chart */}
        <div className="mt-2 pt-3 pb-2 border-t border-[rgba(255,255,255,0.08)] relative z-10">
          <div className="flex items-center justify-between text-[11px] font-mono text-[rgba(255,255,255,0.6)] mb-2">
            <span>TRAJECTORY CURVE</span>
            <span className="text-[var(--mint-soft)] font-bold">Interactive Horizon</span>
          </div>

          {/* Clean SVG Vector Line Chart */}
          <div className="relative h-28 w-full">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 460 90"
              preserveAspectRatio="none"
            >
              {/* Horizontal gridlines */}
              <line x1="0" y1="20" x2="460" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="460" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="460" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

              {/* Trajectory Mint Path */}
              <path
                d="M 10 74 C 90 70, 160 58, 240 44 C 320 28, 380 18, 450 8"
                fill="none"
                stroke="#7CFF9B"
                strokeWidth="2.4"
                strokeLinecap="round"
              />

              {/* Data points */}
              {[
                { cx: 10, cy: 74, idx: 0 },
                { cx: 110, cy: 66, idx: 1 },
                { cx: 220, cy: 48, idx: 2 },
                { cx: 340, cy: 26, idx: 3 },
                { cx: 450, cy: 8, idx: 4 },
              ].map((pt) => (
                <circle
                  key={pt.idx}
                  cx={pt.cx}
                  cy={pt.cy}
                  r={activeStep === pt.idx ? 6 : 3.5}
                  className={`cursor-pointer transition-all duration-200 ${
                    activeStep === pt.idx
                      ? 'fill-[var(--mint)] stroke-[#0B2A20] stroke-2 scale-110'
                      : 'fill-[#0B2A20] stroke-[var(--mint)] stroke-1.5 hover:fill-[var(--mint)]'
                  }`}
                  onClick={() => {
                    setActiveStep(pt.idx);
                    onInteract?.();
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Interactive Timeline Step Selectors */}
          <div className="grid grid-cols-5 gap-1.5 mt-2">
            {timeSteps.map((step, idx) => (
              <button
                key={step.label}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  onInteract?.();
                }}
                className={`py-1.5 px-1 rounded-lg text-center font-mono text-xs transition-all duration-150 ${
                  activeStep === idx
                    ? 'bg-[var(--mint)] text-[#0B2A20] font-bold shadow-sm scale-[1.03]'
                    : 'bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-[var(--white)]'
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>

        {/* Financial Breakdown Grid */}
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] relative z-10">
          <div className="text-[10px] font-mono text-[rgba(255,255,255,0.5)] uppercase tracking-wider mb-2.5">
            CAPITAL ALLOCATION (HOVER TO INSPECT)
          </div>
          <div className="grid grid-cols-5 gap-2 text-center">
            <div
              onMouseEnter={() => setHoveredPillar('assets')}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                hoveredPillar === 'assets'
                  ? 'bg-[rgba(124,255,155,0.15)] border-[var(--mint)] scale-105'
                  : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.6)]">ASSETS</div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[var(--white)] mt-0.5">₹57.4L</div>
            </div>

            <div
              onMouseEnter={() => setHoveredPillar('investments')}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                hoveredPillar === 'investments'
                  ? 'bg-[rgba(124,255,155,0.15)] border-[var(--mint)] scale-105'
                  : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.6)]">INVEST</div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[var(--mint)] mt-0.5">₹41.8L</div>
            </div>

            <div
              onMouseEnter={() => setHoveredPillar('cash')}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                hoveredPillar === 'cash'
                  ? 'bg-[rgba(124,255,155,0.15)] border-[var(--mint)] scale-105'
                  : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.6)]">CASH</div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[var(--white)] mt-0.5">₹4.2L</div>
            </div>

            <div
              onMouseEnter={() => setHoveredPillar('goals')}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                hoveredPillar === 'goals'
                  ? 'bg-[rgba(214,201,168,0.2)] border-[var(--warm)] scale-105'
                  : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.6)]">GOALS</div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[var(--warm)] mt-0.5">₹18L</div>
            </div>

            <div
              onMouseEnter={() => setHoveredPillar('debt')}
              onMouseLeave={() => setHoveredPillar(null)}
              className={`p-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                hoveredPillar === 'debt'
                  ? 'bg-[rgba(255,128,128,0.15)] border-[#FF8080] scale-105'
                  : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.6)]">DEBT</div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#FF9B9B] mt-0.5">₹6.5L</div>
            </div>
          </div>
        </div>
      </MotionCard>

      {/* Secondary Attached Floating Financial Data Badges */}
      <div className="grid grid-cols-3 gap-2.5 mt-3">
        {/* NIFTY 50 Badge */}
        <div className="bg-[#0e3529] border border-[rgba(255,255,255,0.12)] rounded-2xl p-2.5 flex flex-col justify-between hover:border-[var(--mint)] transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[rgba(255,255,255,0.6)] font-semibold">NIFTY 50</span>
            <span className="text-[10px] font-mono text-[var(--mint)] font-bold">+0.72%</span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-[var(--white)] mt-1">25,612.90</div>
        </div>

        {/* MONTHLY SIP Badge */}
        <div className="bg-[#0e3529] border border-[rgba(255,255,255,0.12)] rounded-2xl p-2.5 flex flex-col justify-between hover:border-[var(--mint)] transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[rgba(255,255,255,0.6)] font-semibold">MONTHLY SIP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)]" />
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-[var(--mint)] mt-1">₹5,000 / mo</div>
        </div>

        {/* NEXT GOAL Badge */}
        <div className="bg-[#0e3529] border border-[rgba(255,255,255,0.12)] rounded-2xl p-2.5 flex flex-col justify-between hover:border-[var(--warm)] transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[rgba(255,255,255,0.6)] font-semibold">NEXT GOAL</span>
            <Target size={11} className="text-[var(--warm)]" />
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-[var(--white)] mt-1">Home · ₹18L</div>
        </div>
      </div>
    </div>
  );
}
