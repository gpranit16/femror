'use client';

import React, { useState, useEffect, useRef } from 'react';
import { forecastScenarios, ForecastScenario } from '@/data/forecast';
import { formatINR, formatCompactINR, formatPercent } from '@/lib/formatCurrency';
import { TrendingUp, ArrowRight, ShieldAlert, Sliders, ChevronRight } from 'lucide-react';

const periods = ['Now', '2Y', '5Y', '10Y', '15Y'] as const;
type PeriodType = typeof periods[number];

export function ForecastFuture() {
  const [activePeriod, setActivePeriod] = useState<PeriodType>('10Y');
  const [hoveredPoint, setHoveredPoint] = useState<{ label: string; wealth: number; invested: number } | null>(null);

  // Map PeriodType to scenario or fallback
  const scenarioKey = activePeriod === 'Now' ? '2Y' : activePeriod;
  const scenario = forecastScenarios[scenarioKey];

  const displayWealth =
    activePeriod === 'Now'
      ? 5300000
      : scenario.projectedWealth;

  const displayGain =
    activePeriod === 'Now'
      ? 0
      : scenario.wealthGain;

  const displayPercent =
    activePeriod === 'Now'
      ? 0
      : scenario.percentageGain;

  const activeIndex = periods.indexOf(activePeriod);
  const progressRatio = activeIndex / (periods.length - 1);

  return (
    <section id="forecast" className="py-24 lg:py-32 bg-[#0B2A20] text-[var(--white)] border-b border-[rgba(255,255,255,0.08)] relative overflow-hidden">
      
      {/* Background Subtle Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs font-bold text-[var(--mint-soft)] tracking-widest uppercase flex items-center gap-2">
              <span>04</span>
              <span className="text-[rgba(255,255,255,0.2)]">/</span>
              <span>FORECAST HORIZON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--white)] tracking-tight">
              What could your money become?
            </h2>
            <p className="text-base text-[var(--mineral)]/80">
              Scrub across time to observe the mathematical impact of compounding and disciplined monthly contributions.
            </p>
          </div>

          {/* Timeframe Toggles */}
          <div className="flex items-center gap-1.5 p-1 bg-[rgba(255,255,255,0.06)] rounded-full border border-[rgba(255,255,255,0.12)] self-start md:self-auto">
            {periods.map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => {
                  setActivePeriod(period);
                  setHoveredPoint(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                  activePeriod === period
                    ? 'bg-[var(--mint)] text-[#0B2A20] shadow-sm scale-[1.03]'
                    : 'text-[var(--mineral)]/70 hover:text-[var(--white)] hover:bg-[rgba(255,255,255,0.08)]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Cinematic Forecast Card */}
        <div className="bg-[#0e3529] border border-[rgba(255,255,255,0.14)] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          
          {/* Top Big Number Transition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-6 border-b border-[rgba(255,255,255,0.08)]">
            
            {/* Today Baseline (4 cols) */}
            <div className="lg:col-span-4 space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[rgba(255,255,255,0.6)]">
                TOTAL WEALTH TODAY
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[var(--white)] tabular-nums">
                ₹53,00,000
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] font-mono">
                Starting Net Worth Core
              </div>
            </div>

            {/* Transition Arrow (1 col) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center text-[var(--mint)]">
              <ChevronRight size={32} />
            </div>

            {/* Dynamic Horizon Projected Wealth (7 cols) */}
            <div className="lg:col-span-7 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--mint-soft)] flex items-center justify-between">
                <span>{activePeriod === 'Now' ? 'CURRENT BASELINE' : `PROJECTED WEALTH IN ${activePeriod}`}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[rgba(124,255,155,0.15)] text-[var(--mint)] border border-[rgba(124,255,155,0.2)] font-mono">
                  Illustrative Projection
                </span>
              </div>

              <div className="flex items-baseline gap-4 flex-wrap">
                <div className="font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--mint)] tabular-nums tracking-tight transition-all duration-300">
                  {formatINR(displayWealth)}
                </div>
                {displayGain > 0 && (
                  <div className="inline-flex items-center gap-1 text-sm font-mono font-bold text-[var(--white)] bg-[rgba(255,255,255,0.1)] px-3 py-1 rounded-lg border border-[rgba(255,255,255,0.15)] animate-in fade-in">
                    <TrendingUp size={14} className="text-[var(--mint)]" />
                    <span>+{formatINR(displayGain)} ({formatPercent(displayPercent)})</span>
                  </div>
                )}
              </div>

              <div className="text-xs text-[rgba(255,255,255,0.65)] font-mono pt-1">
                {activePeriod === 'Now' ? 'Baseline status without future compounding additions.' : `${scenario.milestoneTitle} — ${scenario.milestoneDescription}`}
              </div>
            </div>

          </div>

          {/* Interactive Cinematic Chart */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[rgba(255,255,255,0.6)]">
              <span>PROGRESSIVE COMPOUNDING TIMELINE</span>
              {hoveredPoint ? (
                <span className="text-[var(--mint)] font-bold">
                  {hoveredPoint.label}: {formatINR(hoveredPoint.wealth)} (Invested: {formatINR(hoveredPoint.invested)})
                </span>
              ) : (
                <span className="text-[var(--mint-soft)]">Interactive 15-Year Horizon · 12% Assumed Return</span>
              )}
            </div>

            {/* Custom SVG Line Chart with Dynamic Scrub Drawing */}
            <div className="relative h-48 sm:h-60 w-full bg-[rgba(0,0,0,0.25)] rounded-2xl p-4 border border-[rgba(255,255,255,0.08)]">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 180" preserveAspectRatio="none">
                {/* Horizontal Gridlines */}
                <line x1="0" y1="30" x2="800" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="80" x2="800" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="0" y1="130" x2="800" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                {/* 15Y Full Timeline Dataset */}
                {(() => {
                  const pts = [
                    { label: 'Now', wealth: 5300000, invested: 5300000 },
                    { label: '2Y', wealth: 7320480, invested: 5900000 },
                    { label: '5Y', wealth: 11462340, invested: 6800000 },
                    { label: '10Y', wealth: 16460996, invested: 8300000 },
                    { label: '15Y', wealth: 34289450, invested: 9800000 },
                  ];

                  const maxW = 38000000;
                  const minW = 4500000;
                  const getY = (val: number) => 155 - ((val - minW) / (maxW - minW)) * 130;
                  const getX = (idx: number) => 40 + (idx / (pts.length - 1)) * 720;

                  // Active subset based on activeIndex
                  const activePts = pts.slice(0, activeIndex + 1);

                  const fullInvestedPath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.invested)}`).join(' ');
                  const fullWealthPath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.wealth)}`).join(' ');
                  const activeWealthPath = activePts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(p.wealth)}`).join(' ');

                  return (
                    <>
                      {/* Invested Baseline Path */}
                      <path
                        d={fullInvestedPath}
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />

                      {/* Inactive Background Wealth Path (Subtle) */}
                      <path
                        d={fullWealthPath}
                        fill="none"
                        stroke="rgba(124,255,155,0.15)"
                        strokeWidth="2"
                      />

                      {/* Active Drawn Wealth Path */}
                      <path
                        d={activeWealthPath}
                        fill="none"
                        stroke="#7CFF9B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />

                      {/* Timeline Data Points */}
                      {pts.map((p, i) => {
                        const cx = getX(i);
                        const cy = getY(p.wealth);
                        const isActive = i <= activeIndex;
                        const isCurrent = i === activeIndex;

                        return (
                          <g key={i}>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isCurrent ? 7 : isActive ? 5 : 3.5}
                              className={`cursor-pointer transition-all duration-200 ${
                                isCurrent
                                  ? 'fill-[var(--mint)] stroke-[#0B2A20] stroke-3 scale-110'
                                  : isActive
                                  ? 'fill-[var(--mint)] stroke-[#0B2A20] stroke-2'
                                  : 'fill-[#0B2A20] stroke-[rgba(124,255,155,0.4)] stroke-1.5'
                              }`}
                              onClick={() => {
                                setActivePeriod(periods[i]);
                                setHoveredPoint(null);
                              }}
                              onMouseEnter={() => setHoveredPoint(p)}
                              onMouseLeave={() => setHoveredPoint(null)}
                            />
                            <text
                              x={cx}
                              y={175}
                              textAnchor="middle"
                              fill={isCurrent ? '#7CFF9B' : isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)'}
                              fontSize="11"
                              fontWeight={isCurrent ? 'bold' : 'normal'}
                              fontFamily="monospace"
                            >
                              {p.label}
                            </text>
                          </g>
                        );
                      })}
                    </>
                  );
                })()}
              </svg>
            </div>

            {/* Model Assumptions Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
              <div>
                <div className="text-[10px] font-mono text-[rgba(255,255,255,0.5)] uppercase">Monthly Inflow</div>
                <div className="font-mono text-sm font-bold text-[var(--white)] mt-0.5">
                  ₹25,000 / mo
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[rgba(255,255,255,0.5)] uppercase">Assumed CAGR</div>
                <div className="font-mono text-sm font-bold text-[var(--mint)] mt-0.5">
                  12.0% p.a.
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[rgba(255,255,255,0.5)] uppercase">Total Fresh Capital</div>
                <div className="font-mono text-sm font-bold text-[var(--white)] mt-0.5">
                  {formatINR(activePeriod === 'Now' ? 0 : scenario.totalInvested - scenario.currentWealth)}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[rgba(255,255,255,0.5)] uppercase">Compounded Gain</div>
                <div className="font-mono text-sm font-bold text-[var(--mint)] mt-0.5">
                  +{formatINR(displayGain)}
                </div>
              </div>
            </div>

            <div className="text-center text-[11px] font-mono text-[rgba(255,255,255,0.45)] pt-2">
              *Illustrative projection assuming 12.0% annual CAGR without taxation or transaction fee drag. Past market returns do not guarantee future compounding.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
