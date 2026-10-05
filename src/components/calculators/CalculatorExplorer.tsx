'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { calculatorsList, calculatorCategories, CalculatorItem } from '@/data/calculators';
import { Search, ArrowRight, Calculator, Sparkles, Filter, X, Command } from 'lucide-react';

interface CalculatorExplorerProps {
  onSelectCalculator?: (calc: CalculatorItem) => void;
}

export function CalculatorExplorer({ onSelectCalculator }: CalculatorExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Press "/" to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCalculators = useMemo(() => {
    return calculatorsList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.searchTerms.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="calculators" className="py-20 lg:py-28 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
            <span>07</span>
            <span className="text-[var(--border)]">/</span>
            <span>CALCULATOR DISCOVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
            Start with the decision
            <br />
            you're trying to make.
          </h2>
          <p className="text-base text-[var(--muted)]">
            Explore specialized Indian financial calculators with zero registration, unbiased mathematical modeling, and FY 2025-26 rules.
          </p>
        </div>

        {/* Large Search Input & Category Filters */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-[var(--muted)]">
              <Search size={20} />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Try "Can I afford this home?", "Old vs New tax", "FIRE retirement", or "SIP grow"...'
              className="w-full pl-12 sm:pl-14 pr-24 py-4 bg-[var(--white)] border border-[var(--border)] rounded-2xl text-sm sm:text-base text-[var(--ink)] placeholder:text-[var(--muted)]/70 focus:outline-none focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10 shadow-sm transition-all"
            />
            
            {/* Shortcut Badge / Clear Button */}
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[var(--muted)] hover:text-[var(--ink)] p-1"
                >
                  <X size={18} />
                </button>
              ) : (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-[var(--surface-2)] text-[var(--muted)] border border-[var(--border)]">
                  <span>Press</span>
                  <kbd className="font-bold text-[var(--forest)]">/</kbd>
                </span>
              )}
            </div>
          </div>

          {/* Category Pill Filters */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {calculatorCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[var(--forest)] text-[var(--white)] border-[var(--forest)] shadow-sm'
                    : 'bg-[var(--white)] text-[var(--muted)] border-[var(--border)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator List Rows (Interactive Expanding Rows) */}
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl divide-y divide-[var(--border-subtle)] overflow-hidden shadow-sm">
          {filteredCalculators.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <div className="text-sm font-semibold text-[var(--ink)]">No calculators matched your query</div>
              <div className="text-xs text-[var(--muted)]">Try searching for &quot;SIP&quot;, &quot;EMI&quot;, &quot;Tax&quot;, &quot;FIRE&quot;, or reset category filters.</div>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-4 py-1.5 text-xs font-bold rounded-full bg-[var(--surface-2)] text-[var(--forest)] hover:bg-[var(--surface-3)]"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCalculators.map((calc) => (
              <a
                key={calc.id}
                href={calc.href}
                onClick={() => onSelectCalculator?.(calc)}
                className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[var(--surface)] transition-all group block cursor-pointer"
              >
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm sm:text-base text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                      {calc.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--forest)] font-semibold">
                      {calc.categoryLabel}
                    </span>
                    {calc.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--mint-soft)] text-[var(--forest)] font-bold">
                        {calc.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted)] line-clamp-1 leading-relaxed">
                    {calc.description}
                  </p>
                </div>

                {/* Metrics Preview Tag */}
                {calc.metricsPreview && (
                  <div className="hidden md:block text-right shrink-0">
                    <span className="font-mono text-xs text-[var(--forest)] font-semibold bg-[var(--surface-2)] px-2.5 py-1 rounded-md border border-[var(--border)]">
                      {calc.metricsPreview}
                    </span>
                  </div>
                )}

                {/* Hover Arrow Indicator */}
                <div className="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--forest)] flex items-center justify-center shrink-0 group-hover:bg-[var(--forest)] group-hover:text-[var(--mint)] group-hover:translate-x-1 transition-all">
                  <ArrowRight size={14} />
                </div>
              </a>
            ))
          )}
        </div>

        {/* Bottom Explorer Footer */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-[var(--muted)] px-2">
          <span>Showing {filteredCalculators.length} mathematical tools</span>
          <span>Open mathematical methodology</span>
        </div>

      </div>
    </section>
  );
}
