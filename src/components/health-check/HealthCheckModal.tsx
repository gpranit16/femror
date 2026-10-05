'use client';

import React, { useState } from 'react';
import { formatINR } from '@/lib/formatCurrency';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

interface HealthCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HealthCheckModal({ isOpen, onClose }: HealthCheckModalProps) {
  const [step, setStep] = useState(1);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(100000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(45000);
  const [existingSavings, setExistingSavings] = useState<number>(300000);
  const [hasEmergencyFund, setHasEmergencyFund] = useState<boolean>(true);
  const [hasInsurance, setHasInsurance] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculators & Diagnostic Results
  const monthlySurplus = Math.max(0, monthlyIncome - monthlyExpenses);
  const savingsRate = Math.round((monthlySurplus / monthlyIncome) * 100) || 0;
  const emergencyMonths = Math.round(existingSavings / monthlyExpenses) || 0;
  
  let healthScore = 65;
  if (savingsRate >= 40) healthScore += 15;
  else if (savingsRate >= 20) healthScore += 10;
  if (emergencyMonths >= 6) healthScore += 10;
  if (hasInsurance) healthScore += 10;
  healthScore = Math.min(98, healthScore);

  const recommendedSip = Math.round((monthlySurplus * 0.7) / 500) * 500;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink)]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[var(--white)] border border-[var(--border)] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Step Indicator Header */}
        <div className="mb-6 pb-4 border-b border-[var(--border)]">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
            <span className="font-bold text-[var(--forest)] uppercase">
              Financial Diagnostic Check
            </span>
            <span>Step {step} of 2</span>
          </div>
          <div className="w-full h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--forest)] transition-all duration-300 rounded-full"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </div>

        {step === 1 ? (
          /* Step 1: Input Baseline Numbers */
          <div className="space-y-5">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-[var(--ink)] tracking-tight">
                Your Monthly Baseline
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)]">
                Input your approximate monthly cashflow numbers to generate a deterministic health check.
              </p>
            </div>

            {/* Monthly Income */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-semibold text-[var(--ink)]">Monthly In-Hand Income</span>
                <span className="font-bold text-[var(--forest)]">{formatINR(monthlyIncome)}</span>
              </div>
              <input
                type="range"
                min={25000}
                max={500000}
                step={5000}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full accent-[var(--forest)]"
              />
            </div>

            {/* Monthly Expenses */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-semibold text-[var(--ink)]">Monthly Living Expenses</span>
                <span className="font-bold text-[var(--ink)]">{formatINR(monthlyExpenses)}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={300000}
                step={5000}
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full accent-[var(--forest)]"
              />
            </div>

            {/* Existing Liquid Reserve */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="font-semibold text-[var(--ink)]">Liquid Bank / FD Savings</span>
                <span className="font-bold text-[var(--ink)]">{formatINR(existingSavings)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={2000000}
                step={25000}
                value={existingSavings}
                onChange={(e) => setExistingSavings(Number(e.target.value))}
                className="w-full accent-[var(--forest)]"
              />
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasInsurance}
                  onChange={(e) => setHasInsurance(e.target.checked)}
                  className="rounded accent-[var(--forest)]"
                />
                <span>Have Term Insurance</span>
              </label>
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasEmergencyFund}
                  onChange={(e) => setHasEmergencyFund(e.target.checked)}
                  className="rounded accent-[var(--forest)]"
                />
                <span>Dedicated Emergency Fund</span>
              </label>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3.5 mt-4 rounded-xl font-bold text-sm bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Calculate Financial Health Score</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          /* Step 2: Diagnostic Scorecard */
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--forest)] uppercase font-semibold">
                  DIAGNOSTIC SUMMARY
                </span>
                <h3 className="text-2xl font-extrabold text-[var(--ink)]">
                  Your Financial Scorecard
                </h3>
              </div>
              <div className="text-center p-3 rounded-2xl bg-[var(--mint-soft)] border border-[rgba(10,122,62,0.2)]">
                <div className="font-mono text-3xl font-extrabold text-[var(--forest)]">
                  {healthScore}/100
                </div>
                <div className="text-[10px] font-mono text-[var(--forest)] font-bold">HEALTH RATING</div>
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Monthly Surplus</div>
                <div className="font-mono text-lg font-bold text-[var(--positive)] mt-0.5">
                  {formatINR(monthlySurplus)}/mo
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)]">{savingsRate}% savings rate</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Emergency Buffer</div>
                <div className="font-mono text-lg font-bold text-[var(--ink)] mt-0.5">
                  {emergencyMonths} Months
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)]">
                  {emergencyMonths >= 6 ? 'Adequate 6M buffer' : 'Target 6 months living burn'}
                </div>
              </div>
            </div>

            {/* Actionable Recommendations */}
            <div className="p-4 rounded-2xl bg-[var(--forest)] text-[var(--white)] space-y-2.5">
              <div className="text-xs font-mono uppercase text-[var(--mint-soft)] font-bold flex items-center gap-1.5">
                <Sparkles size={14} className="text-[var(--mint)]" />
                <span>Next Recommended Moves</span>
              </div>
              <ul className="text-xs space-y-1.5 text-[var(--mineral)]/90 list-disc list-inside">
                <li>Automate a monthly SIP of <strong>{formatINR(recommendedSip)}</strong> in broad index funds.</li>
                <li>Maintain <strong>{formatINR(monthlyExpenses * 6)}</strong> in a liquid FD as an emergency cushion.</li>
                <li>{hasInsurance ? 'Term cover active. Review sum assured every 3 years.' : 'Prioritize pure term cover (15x annual salary).'}</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl text-xs font-semibold bg-[var(--surface-2)] text-[var(--ink)] hover:bg-[var(--surface-3)] flex items-center gap-1.5"
              >
                <RefreshCw size={14} />
                <span>Recalculate</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)]"
              >
                Done & Return to Homepage
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
