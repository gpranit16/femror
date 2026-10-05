'use client';

import React, { useState } from 'react';
import { stocksData, mutualFundsData, etfsData, AssetHolding } from '@/data/stocks';
import { formatINR } from '@/lib/formatCurrency';
import { TrendingUp, TrendingDown, ArrowRight, Check, Calendar, Plus, Sparkles } from 'lucide-react';

export function InvestSimply() {
  const [activeTab, setActiveTab] = useState<'stocks' | 'mf' | 'etfs'>('stocks');
  const [sipAmount, setSipAmount] = useState<number>(5000);
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly'>('monthly');
  const [isIncreased, setIsIncreased] = useState(false);

  const currentList =
    activeTab === 'stocks'
      ? stocksData
      : activeTab === 'mf'
      ? mutualFundsData
      : etfsData;

  // Approximate 10Y projected corpus based on 12% CAGR: FV = P * (((1+r)^n - 1)/r)*(1+r)
  const monthlyRate = 0.12 / 12;
  const months = 120;
  const projected10YCorpus = Math.round(
    sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  );

  const handleIncreaseSip = () => {
    setSipAmount((prev) => prev + 1000);
    setIsIncreased(true);
    setTimeout(() => setIsIncreased(false), 1500);
  };

  return (
    <section id="investments" className="py-20 lg:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-xl mb-12">
          <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
            <span>03</span>
            <span className="text-[var(--border)]">/</span>
            <span>INVEST SIMPLY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
            Invest without the noise.
          </h2>
          <p className="text-base text-[var(--muted)]">
            See what is moving, understand why it matters, and build an automated habit that fits your financial plan.
          </p>
        </div>

        {/* 2-Column Grid: Market List (65%) + Monthly SIP Panel (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Asset Holdings & Sparkline Table (8 cols) */}
          <div className="lg:col-span-8 bg-[var(--white)] border border-[var(--border)] rounded-3xl p-5 sm:p-7 shadow-sm">
            
            {/* Tabs Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] flex-wrap gap-4">
              <div className="flex items-center gap-1.5 p-1 bg-[var(--surface-2)] rounded-full border border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setActiveTab('stocks')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === 'stocks'
                      ? 'bg-[var(--forest)] text-[var(--white)] shadow-sm'
                      : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  Stocks
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('mf')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === 'mf'
                      ? 'bg-[var(--forest)] text-[var(--white)] shadow-sm'
                      : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  Mutual Funds
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('etfs')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === 'etfs'
                      ? 'bg-[var(--forest)] text-[var(--white)] shadow-sm'
                      : 'text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  ETFs
                </button>
              </div>

              <span className="text-xs font-mono text-[var(--muted)]">
                Market Snapshot · Illustrative
              </span>
            </div>

            {/* Asset Rows List with Smooth Stagger */}
            <div className="divide-y divide-[var(--border-subtle)] mt-2">
              {currentList.map((asset, index) => {
                const isPos = asset.isPositive;
                // SVG Sparkline calculation
                const min = Math.min(...asset.sparkline);
                const max = Math.max(...asset.sparkline);
                const range = max - min || 1;
                const points = asset.sparkline
                  .map((val, idx) => {
                    const x = (idx / (asset.sparkline.length - 1)) * 64;
                    const y = 22 - ((val - min) / range) * 18;
                    return `${x},${y}`;
                  })
                  .join(' ');

                return (
                  <div
                    key={asset.id}
                    className="py-3.5 flex items-center justify-between gap-4 hover:bg-[var(--surface)] px-2.5 rounded-xl transition-all duration-150 group cursor-default"
                  >
                    {/* Symbol & Name */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                          {asset.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)] font-semibold">
                          {asset.ticker}
                        </span>
                      </div>
                      <div className="text-xs text-[var(--muted)] mt-0.5 truncate">
                        {asset.category}
                      </div>
                    </div>

                    {/* Sparkline Visual */}
                    <div className="hidden sm:block w-16 h-7 shrink-0 transition-transform group-hover:scale-105">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 64 24">
                        <polyline
                          fill="none"
                          stroke={isPos ? '#0A7A3E' : '#C23B3B'}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={points}
                        />
                      </svg>
                    </div>

                    {/* Metric / Price Column */}
                    <div className="text-right shrink-0">
                      <div className="font-mono text-sm font-bold text-[var(--ink)] tabular-nums">
                        {asset.price}
                      </div>
                      <div
                        className={`font-mono text-xs font-semibold tabular-nums inline-flex items-center gap-0.5 ${
                          isPos ? 'text-[var(--positive)]' : 'text-[var(--negative)]'
                        }`}
                      >
                        {isPos ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                        <span>{asset.change}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
              <span>Prices illustrative for exchange simulation</span>
              <a href="#calculators" className="text-[var(--forest)] font-bold hover:underline">
                Compare SIPs →
              </a>
            </div>
          </div>

          {/* Right Column: Monthly SIP Interactive Habit Panel (4 cols) */}
          <div className="lg:col-span-4 bg-[var(--mint-soft)]/60 border border-[rgba(10,122,62,0.25)] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--forest)] font-bold">
                  MONTHLY SIP HABIT
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--positive)]" />
              </div>

              {/* Amount Display */}
              <div>
                <div className="text-xs text-[var(--forest)]/70 font-mono">AUTOMATED ALLOCATION</div>
                <div className="font-mono text-4xl font-bold text-[var(--forest)] mt-1 tabular-nums">
                  {formatINR(sipAmount)}
                  <span className="text-sm font-normal text-[var(--forest)]/70"> / {frequency === 'monthly' ? 'mo' : 'qtr'}</span>
                </div>
              </div>

              {/* Frequency Toggle */}
              <div className="flex items-center gap-1 p-1 bg-[var(--white)]/70 rounded-xl border border-[rgba(10,122,62,0.15)]">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    frequency === 'monthly'
                      ? 'bg-[var(--forest)] text-[var(--mint)] shadow-sm'
                      : 'text-[var(--forest)] hover:bg-[var(--white)]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('quarterly')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    frequency === 'quarterly'
                      ? 'bg-[var(--forest)] text-[var(--mint)] shadow-sm'
                      : 'text-[var(--forest)] hover:bg-[var(--white)]'
                  }`}
                >
                  Quarterly
                </button>
              </div>

              {/* Slider for interactive SIP simulation */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--forest)]">
                  <span>Adjust Monthly SIP</span>
                  <span className="font-bold">{formatINR(sipAmount)}</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={sipAmount}
                  onChange={(e) => setSipAmount(Number(e.target.value))}
                  className="w-full accent-[var(--forest)] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--forest)]/70">
                  <span>₹500</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

              {/* Dynamic 10Y Corpus Simulation Result */}
              <div className="p-3.5 bg-[var(--white)]/90 rounded-2xl border border-[rgba(10,122,62,0.2)] space-y-1">
                <div className="text-[10px] font-mono text-[var(--forest)]/70 uppercase">
                  10-YEAR PROJECTED CORPUS (@ 12%)
                </div>
                <div className="font-mono text-xl font-extrabold text-[var(--forest)] tabular-nums">
                  {formatINR(projected10YCorpus)}
                </div>
                <div className="text-[10px] font-mono text-[var(--forest)]/60">
                  Total invested: {formatINR(sipAmount * 120)}
                </div>
              </div>

              {/* Next Investment Date */}
              <div className="p-3 bg-[var(--white)]/70 rounded-xl border border-[rgba(10,122,62,0.15)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[var(--forest)]">
                  <Calendar size={14} />
                  <span>Next scheduled cycle:</span>
                </div>
                <span className="font-mono font-bold text-[var(--forest)]">17 OCT</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleIncreaseSip}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                {isIncreased ? (
                  <>
                    <Check size={14} />
                    <span>SIP Increased by ₹1,000</span>
                  </>
                ) : (
                  <>
                    <span>Increase SIP (+₹1,000)</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
              <div className="text-center text-[10px] text-[var(--forest)]/80 font-mono">
                Illustrative simulator · Automated monthly habit
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
