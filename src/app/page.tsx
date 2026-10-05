'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { MarketTicker } from '@/components/market/MarketTicker';
import { AskFermor } from '@/components/ask/AskFermor';
import { UnderstandSpending } from '@/components/spending/UnderstandSpending';
import { InvestSimply } from '@/components/investments/InvestSimply';
import { ForecastFuture } from '@/components/forecast/ForecastFuture';
import { ProductPhilosophy } from '@/components/philosophy/ProductPhilosophy';
import { FinancialCanvas } from '@/components/canvas/FinancialCanvas';
import { CalculatorExplorer } from '@/components/calculators/CalculatorExplorer';
import { EditorialSection } from '@/components/learn/EditorialSection';
import { HealthCheckCTA } from '@/components/cta/HealthCheckCTA';
import { Footer } from '@/components/footer/Footer';
import { HealthCheckModal } from '@/components/health-check/HealthCheckModal';
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider';
import { InitialLoader } from '@/components/common/InitialLoader';

export default function HomePage() {
  const [isHealthCheckOpen, setIsHealthCheckOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      {/* 00. Fast subtle 750ms Initial Loader */}
      <InitialLoader />

      <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] flex flex-col selection:bg-[var(--mint-soft)] selection:text-[var(--forest)]">
        {/* 01. Sticky Navigation Bar */}
        <Navbar onOpenHealthCheck={() => setIsHealthCheckOpen(true)} />

        <main className="flex-1">
          {/* 02. Hero / Financial Command Center (Dark Forest with Three.js Constellation) */}
          <Hero onOpenHealthCheck={() => setIsHealthCheckOpen(true)} />

          {/* 03. Live Market Information Rail */}
          <div id="market">
            <MarketTicker />
          </div>

          {/* 04. Ask Fermor Interactive Dialogue (Mineral Surface) */}
          <AskFermor />

          {/* 05. Understand Your Money (Spending Breakdown with Count-up) */}
          <UnderstandSpending />

          {/* 06. Invest Without The Noise & Monthly SIP Habit */}
          <InvestSimply />

          {/* 07. Forecast Your Future (Deep Forest Climax Section with Terminal Chart) */}
          <ForecastFuture />

          {/* 08. Product Methodology (Active 3-Step Narrative Workflow) */}
          <ProductPhilosophy />

          {/* 09. Interconnected Financial Canvas (SVG Relationship Map) */}
          <FinancialCanvas />

          {/* 10. Calculator Explorer & Decision Discovery (Press '/' to search) */}
          <CalculatorExplorer />

          {/* 11. Learn / Editorial Magazine Stories */}
          <EditorialSection />

          {/* 12. Free Financial Health Check CTA */}
          <HealthCheckCTA onOpenHealthCheck={() => setIsHealthCheckOpen(true)} />
        </main>

        {/* 13. Minimal Editorial Footer & Regulatory Disclosures */}
        <Footer />

        {/* Interactive Financial Health Check Modal */}
        <HealthCheckModal
          isOpen={isHealthCheckOpen}
          onClose={() => setIsHealthCheckOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
