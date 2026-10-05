/**
 * Formatting utilities for Indian Currency (INR) and Numbers.
 * Adheres strictly to Indian numbering format (Lakhs & Crores).
 */

export function formatINR(amount: number, options?: { hideSymbol?: boolean; decimals?: number }): string {
  const decimals = options?.decimals ?? 0;
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(amount);

  return options?.hideSymbol ? formatted : `₹${formatted}`;
}

export function formatCompactINR(amount: number): string {
  if (Math.abs(amount) >= 10000000) {
    const cr = amount / 10000000;
    return `₹${cr.toFixed(cr % 1 === 0 ? 0 : 2)} Cr`;
  }
  if (Math.abs(amount) >= 100000) {
    const lk = amount / 100000;
    return `₹${lk.toFixed(lk % 1 === 0 ? 0 : 1)}L`;
  }
  if (Math.abs(amount) >= 1000) {
    const k = amount / 1000;
    return `₹${k.toFixed(k % 1 === 0 ? 0 : 1)}K`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatPercent(value: number, includeSign: boolean = true): string {
  const sign = includeSign && value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}
