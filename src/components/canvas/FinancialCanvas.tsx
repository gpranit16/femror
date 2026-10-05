'use client';

import React, { useState } from 'react';
import { canvasNodes, financialCanvasHub, CanvasNode } from '@/data/canvasData';
import { ShieldCheck, TrendingUp, ArrowUpRight, CheckCircle, Info, Link2 } from 'lucide-react';

export function FinancialCanvas() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Group nodes by side for clean asymmetric map layout
  const leftNodes = canvasNodes.filter((n) => n.id === 'assets' || n.id === 'income');
  const rightNodes = canvasNodes.filter((n) => n.id === 'investments' || n.id === 'expenses');
  const bottomNodes = canvasNodes.filter((n) => n.id === 'goals' || n.id === 'debt');

  const isRelated = (nodeId: string) => {
    if (!hoveredNodeId) return true;
    if (hoveredNodeId === nodeId) return true;
    if (hoveredNodeId === 'goals' && (nodeId === 'investments' || nodeId === 'assets')) return true;
    if (hoveredNodeId === 'investments' && nodeId === 'assets') return true;
    if (hoveredNodeId === 'expenses' && nodeId === 'income') return true;
    return false;
  };

  return (
    <section id="financial-canvas" className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center justify-center gap-2">
            <span>06</span>
            <span className="text-[var(--border)]">/</span>
            <span>FINANCIAL MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
            Your financial life,
            <br />
            in one view.
          </h2>
          <p className="text-base text-[var(--muted)]">
            Hover over any pillar to trace its live relationship with your primary Net Worth.
          </p>
        </div>

        {/* The Interconnected Canvas Viewport */}
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-3xl p-6 sm:p-10 shadow-[0_16px_40px_rgba(16,23,19,0.05)] relative">
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border)] text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--positive)] animate-pulse" />
              <span className="text-[var(--forest)] font-bold">RELATIONSHIP TOPOLOGY ACTIVE</span>
            </div>
            <span className="text-[var(--muted)]">6 Mapped Nodes</span>
          </div>

          {/* Connected Grid Map with Central Net Worth Core */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Column: Inflows & Tangibles (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              {leftNodes.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const active = isRelated(node.id);
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-[var(--surface-3)] border-[var(--forest)] shadow-md scale-[1.02]'
                        : active
                        ? 'bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]'
                        : 'opacity-40 bg-[var(--surface)] border-[var(--border)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase font-semibold text-[var(--muted)]">
                        {node.title}
                      </span>
                      {node.trend && (
                        <span className="text-[10px] font-mono font-bold text-[var(--positive)]">
                          {node.trend}
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-2xl font-bold text-[var(--ink)] mt-1.5 tabular-nums">
                      {node.amount}
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Column: Primary Net Worth Command Core (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-[#0B2A20] text-[var(--white)] border border-[rgba(255,255,255,0.15)] rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
                <div className="text-xs font-mono text-[var(--mint-soft)] uppercase tracking-widest font-semibold">
                  {financialCanvasHub.title}
                </div>
                <div className="font-mono text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[var(--white)] mt-2 tabular-nums tracking-tight">
                  {financialCanvasHub.amount}
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-mono text-[var(--mint)] bg-[rgba(124,255,155,0.12)] px-3 py-1 rounded-full border border-[rgba(124,255,155,0.2)] mt-3">
                  <TrendingUp size={12} />
                  <span>{financialCanvasHub.growthYOY}</span>
                </div>
                <p className="text-xs text-[var(--mineral)]/75 mt-4 leading-relaxed">
                  {financialCanvasHub.description}
                </p>

                {hoveredNodeId && (
                  <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.12)] text-xs text-left font-mono">
                    <div className="text-[var(--mint)] font-bold mb-1 flex items-center gap-1.5">
                      <Link2 size={12} />
                      <span>Connected Relationship</span>
                    </div>
                    <div className="text-[rgba(255,255,255,0.7)] text-[11px]">
                      {canvasNodes.find((n) => n.id === hoveredNodeId)?.details.join(' · ')}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Outflows & Investments (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              {rightNodes.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const active = isRelated(node.id);
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-[var(--surface-3)] border-[var(--forest)] shadow-md scale-[1.02]'
                        : active
                        ? 'bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]'
                        : 'opacity-40 bg-[var(--surface)] border-[var(--border)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase font-semibold text-[var(--muted)]">
                        {node.title}
                      </span>
                      {node.trend && (
                        <span className={`text-[10px] font-mono font-bold ${node.id === 'expenses' ? 'text-[var(--positive)]' : 'text-[var(--forest)]'}`}>
                          {node.trend}
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-2xl font-bold text-[var(--ink)] mt-1.5 tabular-nums">
                      {node.amount}
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Nodes Strip: Goals & Debt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[var(--border)]">
            {bottomNodes.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              const active = isRelated(node.id);
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isHovered
                      ? 'bg-[var(--surface-3)] border-[var(--forest)] shadow-sm scale-[1.01]'
                      : active
                      ? 'bg-[var(--surface)] border-[var(--border)] hover:bg-[var(--surface-2)]'
                      : 'opacity-40 bg-[var(--surface)] border-[var(--border)]'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono uppercase font-bold text-[var(--muted)]">
                      {node.title}
                    </div>
                    <div className="font-mono text-xl font-bold text-[var(--ink)] mt-0.5 tabular-nums">
                      {node.amount}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-[var(--forest)]">
                      {node.trend}
                    </span>
                    <div className="text-[11px] text-[var(--muted)] mt-0.5">
                      {node.details[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
