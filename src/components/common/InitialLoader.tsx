'use client';

import React, { useEffect, useState } from 'react';

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 750ms fast elegant loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 150);
          return 100;
        }
        return prev + 25;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0B2A20] flex flex-col items-center justify-center transition-opacity duration-300"
      style={{ opacity: progress === 100 ? 0 : 1 }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Fermor Geometric Brand Mark */}
        <div className="flex items-center gap-2.5 animate-pulse-subtle">
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="24" height="24" rx="6" fill="#101713" stroke="#7CFF9B" strokeWidth="1.2" />
            <path d="M8 18.5V9.5H19.5" stroke="#7CFF9B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14H16.5" stroke="#7CFF9B" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="19.5" cy="18.5" r="2.2" fill="#7CFF9B" />
          </svg>
          <span className="font-heading font-extrabold text-2xl text-[var(--white)] tracking-tight">
            Fermor
          </span>
        </div>

        {/* Tiny Mint Progress Line */}
        <div className="w-36 h-[2px] bg-[rgba(255,255,255,0.15)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--mint)] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
