'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Search, LineChart, Zap, ShieldAlert } from 'lucide-react';

const workflowSteps = [
  {
    num: '01',
    title: 'ANALYZE',
    label: 'Diagnostic Clarity',
    headline: 'Understand your spending, assets, investments and cash flow.',
    description: 'Fermor unifies fragmented bank statements, credit card flows, and equity holdings into one transparent ledger. Unmask your true savings rate and expense leaks before they turn into permanent habits.',
    icon: Search,
    metrics: [
      { label: 'Net Inflow Mapped', value: '100%' },
      { label: 'Savings Rate', value: '59.7%' },
      { label: 'Burn Rate', value: '₹48.3K / mo' },
    ],
    actionStatement: 'Zero spreadsheet friction. Clean mathematical clarity.',
  },
  {
    num: '02',
    title: 'PLAN',
    label: 'Mathematical Modeling',
    headline: 'Model goals, taxes, loan prepayments and future decisions.',
    description: 'Simulate the real purchasing power of your money over 10 to 25 years. Compare Old vs New Tax Regimes under FY 2025-26 rules, optimize loan amortization by prepaying 1 EMI per year, and calculate milestone readiness.',
    icon: LineChart,
    metrics: [
      { label: 'Tax Optimized', value: 'FY 25-26' },
      { label: 'Prepayment Savings', value: '₹5.84L' },
      { label: 'Down Payment Target', value: '78% Ready' },
    ],
    actionStatement: 'Model scenarios deterministically before committing capital.',
  },
  {
    num: '03',
    title: 'INVEST',
    label: 'Disciplined Execution',
    headline: 'Turn your understanding into consistent, automated action.',
    description: 'Bridge the gap between analysis and habit. Set automated monthly SIPs, diversify across broad Indian indices and low-cost flexi-cap funds, and implement annual step-ups to defeat inflation seamlessly.',
    icon: Zap,
    metrics: [
      { label: 'Active Monthly SIP', value: '₹5,000 / mo' },
      { label: 'Compounding CAGR', value: '12% Assumed' },
      { label: 'Step-up Advantage', value: '+₹32.4L (15Y)' },
    ],
    actionStatement: 'Build financial habits that compound quietly in the background.',
  },
];

export function ProductPhilosophy() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = workflowSteps[activeStepIndex];
  const Icon = activeStep.icon;

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
            <span>05</span>
            <span className="text-[var(--border)]">/</span>
            <span>PRODUCT METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
            Turn information into
            <br />
            a repeatable process.
          </h2>
          <p className="text-base text-[var(--muted)]">
            Fermor is not a collection of isolated cards. It is an interconnected 3-step discipline designed for Indian personal finance.
          </p>
        </div>

        {/* Step Navigation Bar (Horizontal Progression) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 sm:p-6 rounded-2xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--forest)] text-[var(--white)] border-[var(--forest)] shadow-md'
                    : 'bg-[var(--white)] text-[var(--muted)] border-[var(--border)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      isActive ? 'text-[var(--mint)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    STEP {step.num}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[var(--mint)]' : 'bg-[var(--border)]'
                    }`}
                  />
                </div>
                <div
                  className={`font-heading font-extrabold text-lg sm:text-2xl tracking-tight ${
                    isActive ? 'text-[var(--white)]' : 'text-[var(--ink)]'
                  }`}
                >
                  {step.title}
                </div>
                <div
                  className={`text-xs mt-1 hidden sm:block truncate ${
                    isActive ? 'text-[var(--mineral)]/80' : 'text-[var(--muted)]'
                  }`}
                >
                  {step.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Hero Canvas (One Large Active Experience) */}
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Description (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-2)] text-[var(--forest)] text-xs font-mono font-bold uppercase">
                <Icon size={14} className="text-[var(--forest)]" />
                <span>{activeStep.label}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--ink)] tracking-tight leading-snug">
                {activeStep.headline}
              </h3>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-medium text-[var(--forest)] flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--positive)] shrink-0" />
                <span>{activeStep.actionStatement}</span>
              </div>
            </div>

            {/* Right Live Key Metrics (5 cols) */}
            <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-bold pb-2 border-b border-[var(--border)] flex items-center justify-between">
                <span>{activeStep.title} DIAGNOSTIC METRICS</span>
                <span className="text-[10px] text-[var(--forest)]">LIVE PREVIEW</span>
              </div>

              <div className="space-y-3">
                {activeStep.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[var(--white)] rounded-xl border border-[var(--border)] flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-[var(--ink)]">{m.label}</span>
                    <span className="font-mono text-sm font-bold text-[var(--forest)] tabular-nums">{m.value}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % 3)}
                className="w-full mt-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Step {workflowSteps[(activeStepIndex + 1) % 3].num}: {workflowSteps[(activeStepIndex + 1) % 3].title}</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
