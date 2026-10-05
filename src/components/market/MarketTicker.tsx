'use client';

import React from 'react';
import { marketTickerData } from '@/data/market';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

export function MarketTicker() {
  return (
    <div className="w-full bg-[#071D16] border-y border-[rgba(255,255,255,0.08)] py-2.5 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 flex items-center gap-4">
        {/* Market Status & Timestamp Badge */}
        <div className="hidden lg:flex items-center gap-2 pr-4 border-r border-[rgba(255,255,255,0.1)] shrink-0">
          <span className="w-2 h-2 rounded-full bg-[var(--mint)] animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--mineral)]/70 font-semibold">
            NSE / BSE LIVE
          </span>
          <span className="text-[10px] font-mono text-[var(--mineral)]/40 flex items-center gap-1 ml-1">
            <Clock size={10} />
            <span>2 min ago</span>
          </span>
        </div>

        {/* Ticker Rail (Continuous Crawl) */}
        <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex items-center">
          <div className="flex items-center gap-8 shrink-0 animate-ticker">
            {/* Repeat list twice to create seamless loop */}
            {[...marketTickerData, ...marketTickerData].map((item, index) => {
              const isPositive = item.isPositive;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="inline-flex items-center gap-2.5 py-0.5 whitespace-nowrap group cursor-default"
                >
                  <span className="font-mono text-xs font-semibold text-[var(--mineral)]/90 tracking-tight">
                    {item.symbol}
                  </span>

                  <span className="font-mono text-xs font-bold text-[var(--white)] tabular-nums">
                    {item.price}
                  </span>

                  <span
                    className={`inline-flex items-center gap-0.5 text-[11px] font-mono font-medium px-1 py-0.2 rounded tabular-nums ${
                      isPositive
                        ? 'text-[var(--mint)] bg-[rgba(124,255,155,0.1)]'
                        : 'text-[#FF8080] bg-[rgba(255,128,128,0.1)]'
                    }`}
                  >
                    {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    <span>{item.change}</span>
                  </span>

                  <span className="text-[rgba(255,255,255,0.15)] ml-3">/</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
