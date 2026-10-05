export interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  tag?: string;
}

export const marketTickerData: MarketItem[] = [
  {
    id: 'nifty-50',
    symbol: 'NIFTY 50',
    name: 'NSE Benchmark',
    price: '25,612.90',
    change: '+0.72%',
    isPositive: true,
  },
  {
    id: 'sensex',
    symbol: 'SENSEX',
    name: 'BSE Benchmark',
    price: '80,452.17',
    change: '+0.68%',
    isPositive: true,
  },
  {
    id: 'nifty-bank',
    symbol: 'NIFTY BANK',
    name: 'Banking Index',
    price: '52,341.25',
    change: '+0.91%',
    isPositive: true,
  },
  {
    id: 'usd-inr',
    symbol: 'USD / INR',
    name: 'Currency Pair',
    price: '92.18',
    change: '-0.21%',
    isPositive: false,
  },
  {
    id: 'gold',
    symbol: 'GOLD (10g)',
    name: 'Commodities 24K',
    price: '₹7,482',
    change: '+0.34%',
    isPositive: true,
  },
  {
    id: 'brent-crude',
    symbol: 'BRENT CRUDE',
    name: 'Oil / Barrel',
    price: '$78.40',
    change: '-1.12%',
    isPositive: false,
  },
  {
    id: 'nifty-it',
    symbol: 'NIFTY IT',
    name: 'Tech Index',
    price: '41,890.30',
    change: '+1.04%',
    isPositive: true,
  },
  {
    id: 'india-10y',
    symbol: '10Y G-SEC',
    name: 'Bond Yield',
    price: '6.78%',
    change: '-0.04%',
    isPositive: false,
  }
];
