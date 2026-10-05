import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function BrandLogo({ theme = 'light', size = 'md', className = '' }: BrandLogoProps) {
  const isDark = theme === 'dark';
  
  // Clean geometric Fermor mark
  const iconSize = size === 'sm' ? 22 : size === 'lg' ? 32 : 26;
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mint)] rounded-md ${className}`}
      aria-label="Fermor Home"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Geometric diamond-cut financial glyph */}
          <rect
            x="2"
            y="2"
            width="24"
            height="24"
            rx="6"
            fill={isDark ? '#0B2A20' : '#101713'}
            stroke={isDark ? 'rgba(124, 255, 155, 0.4)' : '#CBD4CD'}
            strokeWidth="1.2"
          />
          {/* Mint precision signal bars */}
          <path
            d="M8 18.5V9.5H19.5"
            stroke="#7CFF9B"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14H16.5"
            stroke="#7CFF9B"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="19.5" cy="18.5" r="2.2" fill="#7CFF9B" />
        </svg>
      </div>

      <span
        className={`font-heading font-extrabold tracking-tight ${textSize} ${
          isDark ? 'text-[var(--white)]' : 'text-[var(--ink)]'
        }`}
      >
        Fermor
      </span>
    </Link>
  );
}
