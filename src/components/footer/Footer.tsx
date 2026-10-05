import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B2A20] text-[var(--white)] pt-16 pb-12 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-14 border-b border-[rgba(255,255,255,0.1)]">
          
          {/* Brand Info (4 cols on md) */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <BrandLogo theme="dark" size="md" />
            <p className="text-xs sm:text-sm text-[var(--mineral)]/75 max-w-sm leading-relaxed">
              Fermor helps you understand your money before you make your next money decision. Built for Indian personal finance clarity.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[var(--mint-soft)] tracking-wider">
              <span>Understand</span>
              <span>·</span>
              <span>Plan</span>
              <span>·</span>
              <span>Invest</span>
              <span>·</span>
              <span>Grow</span>
            </div>
          </div>

          {/* Column 1: Products (2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mint-soft)] font-bold">
              Products
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--mineral)]/80">
              <li><a href="#market" className="hover:text-[var(--mint)] transition-colors">Market</a></li>
              <li><a href="#financial-canvas" className="hover:text-[var(--mint)] transition-colors">Portfolio</a></li>
              <li><a href="#investments" className="hover:text-[var(--mint)] transition-colors">ACT</a></li>
              <li><a href="#ask" className="hover:text-[var(--mint)] transition-colors">Ask</a></li>
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">For Kids</a></li>
            </ul>
          </div>

          {/* Column 2: Tools (2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mint-soft)] font-bold">
              Tools
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--mineral)]/80">
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">All Calculators</a></li>
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">SIP Calculator</a></li>
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">Home Loan EMI</a></li>
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">Income Tax FY25</a></li>
              <li><a href="#calculators" className="hover:text-[var(--mint)] transition-colors">FIRE Retirement</a></li>
            </ul>
          </div>

          {/* Column 3: Learn (2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mint-soft)] font-bold">
              Learn
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--mineral)]/80">
              <li><a href="#learn" className="hover:text-[var(--mint)] transition-colors">Dispatches & News</a></li>
              <li><a href="#learn" className="hover:text-[var(--mint)] transition-colors">Market Insights</a></li>
              <li><a href="#learn" className="hover:text-[var(--mint)] transition-colors">Tax Guides</a></li>
              <li><a href="#learn" className="hover:text-[var(--mint)] transition-colors">Compounding Math</a></li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mint-soft)] font-bold">
              Company
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--mineral)]/80">
              <li><a href="#" className="hover:text-[var(--mint)] transition-colors">About Fermor</a></li>
              <li><a href="#" className="hover:text-[var(--mint)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--mint)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--mint)] transition-colors">Disclosures</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer Section */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] sm:text-xs text-[var(--mineral)]/60 leading-relaxed max-w-4xl">
            <strong>Regulatory Disclaimer:</strong> Fermor is not a SEBI-registered investment adviser. Information, calculators, and educational content are provided for informational and mathematical simulation purposes only and should not be considered personalized financial, investment, or tax advice. Past returns on benchmark indices or mutual funds do not guarantee future compounding returns.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--mineral)]/60 border-t border-[rgba(255,255,255,0.06)]">
            <div>
              © 2026 Fermor Financial Technologies. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Made with clarity for Indian investors</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
