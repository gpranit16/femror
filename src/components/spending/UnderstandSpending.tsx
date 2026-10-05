'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, PieChart } from 'lucide-react';

const spendingMonths = {
  current: {
    label: 'This month (Oct)',
    totalNum: 48320,
    totalFormatted: '₹48,320',
    reduction: '12% vs last month',
    isReduction: true,
    categories: [
      { name: 'Food & Dining', percent: 26, amount: '₹12,563', color: '#12382B' },
      { name: 'Shopping & Leisure', percent: 17, amount: '₹8,215', color: '#1B4D3E' },
      { name: 'Transport & Fuel', percent: 14, amount: '₹6,764', color: '#4A6B5D' },
      { name: 'Rent, Utilities & Others', percent: 43, amount: '₹20,778', color: '#657169' },
    ],
    savingsRate: '59.7%',
    fixedVsDiscretionary: '58% Fixed / 42% Variable',
  },
  last: {
    label: 'Last month (Sep)',
    totalNum: 54910,
    totalFormatted: '₹54,910',
    reduction: '+8% vs Aug',
    isReduction: false,
    categories: [
      { name: 'Food & Dining', percent: 31, amount: '₹17,022', color: '#12382B' },
      { name: 'Shopping & Leisure', percent: 22, amount: '₹12,080', color: '#1B4D3E' },
      { name: 'Transport & Fuel', percent: 13, amount: '₹7,138', color: '#4A6B5D' },
      { name: 'Rent, Utilities & Others', percent: 34, amount: '₹18,670', color: '#657169' },
    ],
    savingsRate: '54.2%',
    fixedVsDiscretionary: '52% Fixed / 48% Variable',
  }
};

export function UnderstandSpending() {
  const [selectedMonth, setSelectedMonth] = useState<'current' | 'last'>('current');
  const [displayCount, setDisplayCount] = useState(0);
  const data = spendingMonths[selectedMonth];

  // Progressive count-up
  useEffect(() => {
    let start = 0;
    const end = data.totalNum;
    const duration = 600;
    const steps = 24;
    const stepVal = (end - start) / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += stepVal;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [selectedMonth, data.totalNum]);

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
              <span>02</span>
              <span className="text-[var(--border)]">/</span>
              <span>UNDERSTAND YOUR MONEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
              Know where your money goes.
            </h2>
            <p className="text-base text-[var(--muted)]">
              See the spending patterns that matter before they become fixed habits.
            </p>
          </div>

          {/* Month Switcher Toggle */}
          <div className="inline-flex p-1 rounded-full bg-[var(--surface-3)] border border-[var(--border)] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSelectedMonth('current')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedMonth === 'current'
                  ? 'bg-[var(--forest)] text-[var(--white)] shadow-sm'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              This Month
            </button>
            <button
              type="button"
              onClick={() => setSelectedMonth('last')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedMonth === 'last'
                  ? 'bg-[var(--forest)] text-[var(--white)] shadow-sm'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              Last Month
            </button>
          </div>
        </div>

        {/* Editorial Data Forward Grid (40 / 60 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--white)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-semibold flex items-center justify-between">
                <span>TOTAL SPENDING</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--forest)] font-mono">
                  {data.label}
                </span>
              </div>

              <div className="font-mono text-4xl sm:text-5xl font-bold text-[var(--ink)] tracking-tight tabular-nums">
                ₹{displayCount.toLocaleString('en-IN')}
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--mint-soft)] text-[var(--forest)] border border-[rgba(10,122,62,0.2)]">
                <ArrowDownRight size={14} className="text-[var(--positive)]" />
                <span>{data.reduction}</span>
              </div>

              <p className="text-xs text-[var(--muted)] leading-relaxed pt-2">
                Controlled dining out and automated SIP transfers prior to discretionary spend prevented lifestyle inflation.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border)] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--muted)]">Effective Savings Rate</span>
                <span className="font-mono font-bold text-[var(--positive)]">{data.savingsRate}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--muted)]">Fixed vs Variable</span>
                <span className="font-mono font-medium text-[var(--ink)]">{data.fixedVsDiscretionary}</span>
              </div>

              <a
                href="#calculators"
                className="pt-2 inline-flex items-center gap-2 text-xs font-bold text-[var(--forest)] hover:underline group"
              >
                <span>View detailed cashflow analysis</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Category Proportions (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--white)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-semibold">
                  CATEGORY EXPENDITURE BREAKDOWN
                </span>
                <span className="text-xs font-mono text-[var(--forest)] font-medium">
                  100% Accounted
                </span>
              </div>

              {/* Horizontal Proportional Bar Chart */}
              <div className="space-y-5">
                {data.categories.map((cat, idx) => (
                  <div key={cat.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-[var(--ink)]">{cat.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-[var(--ink)] tabular-nums">{cat.amount}</span>
                        <span className="font-mono text-xs text-[var(--muted)] w-8 text-right font-medium tabular-nums">
                          {cat.percent}%
                        </span>
                      </div>
                    </div>

                    {/* Bar Line */}
                    <div className="w-full h-3.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${cat.percent}%`,
                          backgroundColor: cat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight Note */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>Next predictable large recurring expense: <strong>Term Insurance (₹14,500 on 24 Nov)</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
