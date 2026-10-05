'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../common/BrandLogo';
import { 
  TrendingUp, 
  PieChart, 
  Zap, 
  MessageSquare, 
  Baby, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Calculator,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  onOpenHealthCheck?: () => void;
}

const productLinks = [
  {
    title: 'Market',
    description: "Understand what's moving across Indian equities & indices.",
    icon: TrendingUp,
    badge: 'Real-time',
    href: '#market',
  },
  {
    title: 'Portfolio',
    description: 'See your investments, allocations & net worth together.',
    icon: PieChart,
    badge: 'Unified',
    href: '#financial-canvas',
  },
  {
    title: 'ACT',
    description: 'Turn complex financial information into disciplined action.',
    icon: Zap,
    badge: 'Actionable',
    href: '#investments',
  },
  {
    title: 'Ask',
    description: 'Ask questions about your money in natural plain language.',
    icon: MessageSquare,
    badge: 'Insight',
    href: '#ask',
  },
  {
    title: 'For Kids',
    description: 'Build compounding and financial literacy habits early.',
    icon: Baby,
    badge: 'Education',
    href: '#calculators',
  },
];

export function Navbar({ onOpenHealthCheck }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[var(--white)]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(16,23,19,0.06)] border-b border-[var(--border)]'
            : 'py-4 bg-[var(--surface)]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-12" aria-label="Main Navigation">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-8">
              <BrandLogo size={isScrolled ? 'sm' : 'md'} />

              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center gap-1.5" ref={dropdownRef}>
                {/* Products Mega Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    onMouseEnter={() => setIsProductsOpen(true)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isProductsOpen
                        ? 'bg-[var(--surface-2)] text-[var(--ink)]'
                        : 'text-[var(--ink)]/80 hover:text-[var(--ink)] hover:bg-[var(--surface-2)]'
                    }`}
                    aria-expanded={isProductsOpen}
                    aria-haspopup="true"
                  >
                    <span>Products</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isProductsOpen ? 'rotate-180 text-[var(--forest)]' : 'text-[var(--muted)]'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isProductsOpen && (
                    <div
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className="absolute top-full left-0 mt-2 w-[340px] p-2 bg-[var(--white)] rounded-2xl border border-[var(--border)] shadow-[0_12px_36px_rgba(11,42,32,0.12)] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    >
                      <div className="px-3 py-1.5 mb-1 border-b border-[var(--border-subtle)] flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--muted)] font-semibold">
                          Ecosystem Products
                        </span>
                        <span className="text-[10px] font-mono text-[var(--positive)] font-medium">
                          5 Modules
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        {productLinks.map((product) => {
                          const Icon = product.icon;
                          return (
                            <a
                              key={product.title}
                              href={product.href}
                              onClick={() => setIsProductsOpen(false)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[var(--surface)]"
                            >
                              <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--forest)] group-hover:bg-[var(--forest)] group-hover:text-[var(--mint)] transition-colors shrink-0">
                                <Icon size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--forest)]">
                                    {product.title}
                                  </span>
                                  {product.badge && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-2)] text-[var(--muted)] font-medium group-hover:bg-[var(--mint-soft)] group-hover:text-[var(--forest)] transition-colors">
                                      {product.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[var(--muted)] line-clamp-1 mt-0.5 leading-relaxed">
                                  {product.description}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Calculators Link */}
                <a
                  href="#calculators"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
                >
                  <Calculator size={14} className="text-[var(--muted)]" />
                  <span>Calculators</span>
                </a>

                {/* Learn / Editorial Link */}
                <a
                  href="#learn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
                >
                  <BookOpen size={14} className="text-[var(--muted)]" />
                  <span>Learn</span>
                </a>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenHealthCheck}
                className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--forest)] hover:bg-[var(--surface-2)] rounded-full transition-colors"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={onOpenHealthCheck}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Get started</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenHealthCheck}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--forest)] text-[var(--mint)] sm:hidden"
              >
                Start
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-[var(--ink)]/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed top-16 left-3 right-3 p-5 bg-[var(--white)] rounded-2xl border border-[var(--border)] shadow-2xl max-h-[85vh] overflow-y-auto space-y-5">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] font-bold mb-2.5">
                Products & Tools
              </div>
              <div className="grid grid-cols-1 gap-1">
                {productLinks.map((product) => {
                  const Icon = product.icon;
                  return (
                    <a
                      key={product.title}
                      href={product.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[var(--surface)] text-[var(--ink)]"
                    >
                      <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--forest)]">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{product.title}</div>
                        <div className="text-xs text-[var(--muted)]">{product.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
              <a
                href="#calculators"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface)]"
              >
                <span>Financial Calculators</span>
                <ArrowRight size={14} className="text-[var(--muted)]" />
              </a>
              <a
                href="#learn"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface)]"
              >
                <span>Editorial & Learn</span>
                <ArrowRight size={14} className="text-[var(--muted)]" />
              </a>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenHealthCheck?.();
                }}
                className="w-full py-3 rounded-full text-center text-sm font-semibold bg-[var(--forest)] text-[var(--mint)]"
              >
                Get Free Health Check →
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenHealthCheck?.();
                }}
                className="w-full py-2.5 rounded-full text-center text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]"
              >
                Sign In to Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
